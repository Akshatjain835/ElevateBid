import { Router } from "express";
import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";
import { createCategoryController, deleteCategoryController, getAllCategoryController, getCategoryController, updateCategoryController } from "../../controllers/category/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", protectMiddleware, isAdmin, createCategoryController);
categoryRouter.get("/", getAllCategoryController);
categoryRouter.get("/:id", protectMiddleware, isAdmin, getCategoryController)
categoryRouter.put("/:id", protectMiddleware, isAdmin, updateCategoryController);
categoryRouter.delete("/:id", protectMiddleware, isAdmin, deleteCategoryController);


export default categoryRouter;