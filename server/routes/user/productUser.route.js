import Router from 'express';
import { getAllProductsController, getAllProductsofUserController, getAllSoldProductsController, getProductBySlugController } from '../../controllers/user/productUser.controller.js';
import { protectMiddleware } from '../../middlewares/authMiddleware.js';

const productUserRouter = Router();

productUserRouter.get("/", getAllProductsController);
productUserRouter.get("/user",protectMiddleware, getAllProductsofUserController);
productUserRouter.get("/:id", getProductBySlugController);
productUserRouter.get("/sold", getAllSoldProductsController);

export default productUserRouter;