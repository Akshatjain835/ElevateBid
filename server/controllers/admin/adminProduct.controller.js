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