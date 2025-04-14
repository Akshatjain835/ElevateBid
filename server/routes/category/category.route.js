import { Router } from "express";
import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { createCategoryController, getAllCategoryController, getCategoryController, updateCategoryController } from "../../controllers/category/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", protectMiddleware, isAdmin, createCategoryController);
categoryRouter.get("/", getAllCategoryController);
categoryRouter.get("/:id", protectMiddleware, isAdmin, getCategoryController)
categoryRouter.put("/:id", protectMiddleware, isAdmin, updateCategoryController);


export default categoryRouter;