import Router from 'express';
import { createProductController, deleteProductController, updateProductController } from '../../controllers/seller/product.controller.js';
import { isSeller, protectMiddleware } from '../../middlewares/authMiddleware.js';
import upload from '../../utils/fileUpload.js';

const productSellerRouter = Router();

productSellerRouter.post('/',protectMiddleware,isSeller,upload.single("image"),createProductController)
productSellerRouter.delete("/:id",protectMiddleware,isSeller, deleteProductController);
productSellerRouter.put("/:id", protectMiddleware, isSeller, upload.single("image"), updateProductController);




export default productSellerRouter