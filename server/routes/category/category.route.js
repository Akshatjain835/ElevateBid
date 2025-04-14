import { Router } from "express";
import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { createCategoryController } from "../../controllers/category/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", protectMiddleware, isAdmin, createCategoryController);

export default categoryRouter;