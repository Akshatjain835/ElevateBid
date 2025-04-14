import Router from 'express';
import { getAllProductsController, getAllProductsofUserController, getAllSoldProductsController, getProductBySlugController, getWonProductsController } from '../../controllers/user/productUser.controller.js';
import { protectMiddleware } from '../../middlewares/authMiddleware.js';

const productUserRouter = Router();

productUserRouter.get("/", getAllProductsController);
productUserRouter.get("/user",protectMiddleware, getAllProductsofUserController);
productUserRouter.get("/:id", getProductBySlugController);
productUserRouter.get("/sold", getAllSoldProductsController);
productUserRouter.get("/won-products", protectMiddleware, getWonProductsController);

export default productUserRouter;