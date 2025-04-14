import Router from 'express';
import { getAllProductsController, getAllProductsofUserController } from '../../controllers/user/productUser.controller.js';
import { protectMiddleware } from '../../middlewares/authMiddleware.js';

const productUserRouter = Router();

productUserRouter.get("/", getAllProductsController);
productUserRouter.get("/user",protectMiddleware, getAllProductsofUserController);

export default productUserRouter;