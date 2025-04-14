import Router from "express";
import { estimateIncomeController, getAllUserController } from "../../controllers/admin/admin.controller.js";
import { isAdmin, protectMiddleware } from "../../middlewares/authMiddleware.js";

const adminRouter = Router();

adminRouter.get("/getalluser",protectMiddleware,isAdmin,getAllUserController)
adminRouter.get("/estimate-income",protectMiddleware,isAdmin,estimateIncomeController)

export default adminRouter