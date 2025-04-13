import Router from 'express';
import { createProductController } from '../controllers/product.controller.js';
import { protectMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../utils/fileUpload.js';

const productRouter = Router();

productRouter.post('/',protectMiddleware,upload.single("image"),createProductController)


export default productRouter