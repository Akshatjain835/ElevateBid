import { Router } from "express";
import { getBiddingHistoryController, placeBidController } from "../../controllers/bidding/bidding.controller.js";
import { isSeller, protectMiddleware } from "../../middlewares/authMiddleware.js";

const biddingRouter = Router();


biddingRouter.get("/:productId", getBiddingHistoryController);
biddingRouter.post("/", protectMiddleware, placeBidController);

export default biddingRouter;