import Router from 'express';
import { createProductController } from '../controllers/product.controller.js';
import { isSeller, protectMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../utils/fileUpload.js';

const productRouter = Router();

productRouter.post('/',protectMiddleware,isSeller,upload.single("image"),createProductController)


export default productRouter