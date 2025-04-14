import Router from "express";

import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { verifyAndAddCommissionProductByAmdinController } from "../../controllers/admin/adminProduct.controller.js";

const adminProductRouter = Router();

adminProductRouter.patch("/admin/product-verified/:id", protectMiddleware, isAdmin, verifyAndAddCommissionProductByAmdinController);

export default adminProductRouter