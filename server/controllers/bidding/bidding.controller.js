import BiddingProduct from "../../models/bidding.model.js";
import Product from "../../models/product.model.js";

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


      res.status(200).json({ 
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

  
