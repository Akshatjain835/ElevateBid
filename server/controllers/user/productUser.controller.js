import Product from "../../models/product.model.js";


export const getAllProductsController =async (req, res) => {

    const products = await Product.find({}).sort("-createdAt").populate("user");
    // console.log(products);
  
      
  
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

     //bidding code
  
   
    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
     
    });
  };
  