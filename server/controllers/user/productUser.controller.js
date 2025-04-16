import BiddingProduct from "../../models/bidding.model.js";
import Product from "../../models/product.model.js";


export const getAllProductsController =async (req, res) => {

    const products = await Product.find({}).sort("-createdAt").populate("user");
    // console.log(products);
  
    const productsWithDetails = await Promise.all(

      products.map(async (product) => {
        const latestBid = await BiddingProduct.findOne({ product: product._id }).sort("-createdAt");
        const biddingPrice = latestBid ? latestBid.price : product.price;
        //  console.log(biddingPrice)
        const totalBids = await BiddingProduct.countDocuments({ product: product._id });
        // console.log(totalBids)

        return {
          ...product._doc,
          biddingPrice,
          totalBids, // Adding the total number of bids
        };
      })
    );
  
    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      data: productsWithDetails,
    });
  };
  
export  const getAllProductsofUserController = async (req, res) => {
    const userId = req.user._id;
  
    const products = await Product.find({ user: userId }).sort("-createdAt").populate("user");
     // console.log(products);

   const productsWithPrices = await Promise.all(
    products.map(async (product) => {
      const latestBid = await BiddingProduct.findOne({ product: product._id }).sort("-createdAt");
      // console.log(latestBid)
      const biddingPrice = latestBid ? latestBid.price : product.price;
      // console.log(biddingPrice)
      return {
        ...product._doc,
        biddingPrice, // Adding the price field
      };
    })
  );
  
   
    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      data:productsWithPrices
     
    });
  };
  
export const getProductBySlugController = async (req, res) => {

  const { id } = req.params;
  // console.log(id);

  const product = await Product.findById(id);
  // console.log(product);

  if (!product) {
   return res.status(404).json({
      message: "Product not found",
    });
  }
  // res.status(200).json(product);
  return res.status(200).json({
    message: "Product fetched successfully",
    success: true,
    data: product,
  });
};

export const getAllSoldProductsController = async (req, res) => {

  const product = await Product.find({ isSoldout: true }).sort("-createdAt").populate("user");
  // console.log(product);
  if (!product) {
    return res.status(404).json({
      message: "No sold products found",
    });
  }
  // res.status(200).json(product);
  res.status(200).json({  
    message: "Sold products fetched successfully",
    success: true,
    data: product,
  });
};

export const getWonProductsController =async (req, res) => {
  const userId = req.user._id;

  const wonProducts = await Product.find({ soldTo: userId }).sort("-createdAt").populate("user");
  // console.log(wonProducts);
  
};