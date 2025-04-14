import { Router } from "express";
import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { createCategoryController, getAllCategoryController } from "../../controllers/category/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", protectMiddleware, isAdmin, createCategoryController);
categoryRouter.get("/", getAllCategoryController);


export default categoryRouter;