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


  
