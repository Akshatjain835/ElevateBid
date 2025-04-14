import Router from 'express';
import { createProductController, deleteProductController, getAllProductsController, updateProductController } from '../controllers/product.controller.js';
import { isSeller, protectMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../utils/fileUpload.js';

const productRouter = Router();

productRouter.post('/',protectMiddleware,isSeller,upload.single("image"),createProductController)
productRouter.delete("/:id",protectMiddleware,isSeller, deleteProductController);
productRouter.put("/:id", protectMiddleware, isSeller, upload.single("image"), updateProductController);


productRouter.get("/", getAllProductsController);


export default productRouter