import Router from 'express';
import { getAllProductsController } from '../../controllers/user/productUser.controller.js';

const productUserRouter = Router();

productUserRouter.get("/", getAllProductsController);

export default productUserRouter;