import Product from "../../models/product.model.js";

export const verifyAndAddCommissionProductByAmdinController = async (req, res) => {

    const { commission } = req.body;
    // console.log(commission)

    const { id } = req.params;
    // console.log(id);
  
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
  
    product.isverify = true;

    product.commission = commission;
  
    await product.save();
  
    res.status(200).json({
         message: "Product verified successfully", 
         data: product
         });
  };

export const getAllProductsByAmdinController = async (req, res) => {
    const products = await Product.find({}).sort("-createdAt").populate("user");
  
    // console.log(products);

  };

export const deleteProductsByAmdinController = async (req, res) => {
    try {
      const { productIds } = req.body;
        // console.log(productIds);
  
      const result = await Product.findOneAndDelete({ _id: productIds });
  
      res.status(200).json({ 
        message: `${result.deletedCount} products deleted successfully` 
    });
    } catch (error) {

      res.status(500).json({ 
        message: "Internal server error",
        error: error.message 
    });
    }
  };