import BiddingProduct from "../../models/bidding.model.js";
import Product from "../../models/product.model.js";
import sendEmail from "../../utils/sendEmail.js";

export const getBiddingHistoryController = async (req, res) => {
    const { productId } = req.params;
  
    const biddingHistory = await biddingproduct.find({ product: productId }).sort("-createdAt").populate("user").populate("product");
    // console.log(biddingHistory);
  
    // res.status(200).json(biddingHistory);
    return res.status(200).json({
      message: "Bidding history fetched successfully",
      success: true,
      data: biddingHistory,
    });

  };

export const placeBidController =async (req, res) => {

    const { productId, price } = req.body;
    const userId = req.user.id;
  
    const product = await Product.findById(productId);
    // console.log(product);


    if (!product.isverify) {
     res.status(400).json({
        message: "Product is not verified yet", 
        success: false,
      });
    }
  
    if (!product || product.isSoldout === true) {
      res.status(404).json({
        message: "Product not found or already sold out",
        success: false,
        });
    }
  
    /*  if (price < product.minprice) {
      res.status(400);
      throw new Error("Your bid must be equal to or higher than the minimum bidding price");
    } */
  
    const existingUserBid = await BiddingProduct.findOne({ user: userId, product: productId });
  
    if (existingUserBid) {
      if (price <= existingUserBid.price) {
        res.status(400).json({
          message: "Your bid must be higher than your previous bid",
          success: false,
        });
      }
      existingUserBid.price = price;

      await existingUserBid.save();


     return res.status(200).json({ 
        message: "Bid updated successfully",
        success: true,
        biddingProduct: existingUserBid 
    });

    } else {
      const highestBid = await BiddingProduct.findOne({ product: productId }).sort({ price: -1 });
    //   console.log(highestBid);

      if (highestBid && price <= highestBid.price) {

        res.status(400).json({
          message: "Your bid must be higher than the current highest bid",
          success: false,
        });
      }
  
      const biddingProduct = await BiddingProduct.create({
        user: userId,
        product: productId,
        price,
      });
  
    //   res.status(201).json(biddingProduct);
     res.status(201).json({
        message: "Bid placed successfully",
        success: true,
        data: biddingProduct,
      });

    }
  };

export const sellProductController = async (req, res) => {

    const { productId } = req.body;
    // console.log(productId);

    const userId = req.user.id;
    // console.log(userId);
  
    // Find the product
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found",
        error: true,
     });
    }
  
    //   /* const currentTime = new Date();
    //   const tenMinutesAgo = new Date(currentTime - 2 * 60 * 1000); // 10 minutes ago
  
    //     if (!product.isSoldout || product.updatedAt < tenMinutesAgo || product.createdAt < tenMinutesAgo) {
    //     return res.status(400).json({ error: "Product cannot be sold at this time" });
    //   } */
  
    // Check if the user is authorized to sell the product
    if (product.user.toString() !== userId) {

      return res.status(403).json({ 
        error: "You do not have permission to sell this product"
     });
    }
  
    // Find the highest bid

    const highestBid = await BiddingProduct.findOne({ product: productId }).sort({ price: -1 }).populate("user");

    if (!highestBid) {
      return res.status(400).json({
         error: "No winning bid found for the product"
         });
    }
  
    // Calculate commission and final price
    const commissionRate = product.commission;

    const commissionAmount = (commissionRate / 100) * highestBid.price;

    const finalPrice = highestBid.price - commissionAmount;
  
    // Update product details
    product.isSoldout = true;
    product.soldTo = highestBid.user;
    product.soldPrice = finalPrice;
  
    // Update admin's commission balance
    const admin = await User.findOne({ role: "admin" });
    // console.log(admin);

    if (!admin) {
      return res.status(404).json({ 
        error: "Admin user not found" 
      });
    }

    if (admin) {
      admin.commissionBalance += commissionAmount;
      await admin.save();
    }
  
    // Update seller's balance
    const seller = await User.findById(product.user);
    // console.log(seller);
    if (!seller) {
      return res.status(404).json({ 
        error: "Seller not found" 
      });
    }

    if (seller) {
      seller.balance += finalPrice; // Add the remaining amount to the seller's balance

      await seller.save();
    } else {
      return res.status(404).json({ 
        
        error: "Seller not found" 
    });
    }
  
    // Save product
    await product.save();
  
    
  // Send email notification to the highest bidder
  await sendEmail({
    email: highestBid.user.email,
    subject: "Congratulations! You won the auction!",
    text: `You have won the auction for "${product.title}" with a bid of $${highestBid.price}.`,
  });
  
    res.status(200).json({ 
        message: "Product has been successfully sold!"
     });
  };
