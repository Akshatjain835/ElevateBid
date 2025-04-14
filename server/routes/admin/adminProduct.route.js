import Router from "express";

import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { deleteProductsByAmdinController, getAllProductsByAmdinController, verifyAndAddCommissionProductByAmdinController } from "../../controllers/admin/adminProduct.controller.js";

const adminProductRouter = Router();

adminProductRouter.patch("/admin/product-verified/:id", protectMiddleware, isAdmin, verifyAndAddCommissionProductByAmdinController);
adminProductRouter.get("/admin/products", protectMiddleware, isAdmin, getAllProductsByAmdinController);
adminProductRouter.delete("/admin/products", protectMiddleware, isAdmin, deleteProductsByAmdinController);

export default adminProductRouter