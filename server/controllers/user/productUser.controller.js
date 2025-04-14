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