import { Router } from "express";
import { getBiddingHistoryController, placeBidController, sellProductController } from "../../controllers/bidding/bidding.controller.js";
import { isSeller, protectMiddleware } from "../../middlewares/authMiddleware.js";

const biddingRouter = Router();


biddingRouter.get("/:productId", getBiddingHistoryController);
biddingRouter.post("/", protectMiddleware, placeBidController);
biddingRouter.post("/sell", protectMiddleware, isSeller, sellProductController);

export default biddingRouter;
