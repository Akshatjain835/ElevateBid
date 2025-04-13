import Router from "express";
import { getAllUserController } from "../controllers/admin.controller.js";
import { isAdmin, protectMiddleware } from "../middlewares/authMiddleware.js";

const adminRouter = Router();

adminRouter.get("/getalluser",protectMiddleware,isAdmin,getAllUserController)

export default adminRouter