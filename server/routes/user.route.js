import { Router } from "express";
import { getUserBalanceController, getUserController, loginAsSellerController, loginStatusController, loginUserController, logoutUserController, registerUserController } from "../controllers/user.controller.js";
import { protectMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.post('/register',registerUserController);
userRouter.post('/login',loginUserController);
userRouter.get('/loggedin',loginStatusController);
userRouter.get('/logout',logoutUserController);
userRouter.post('/seller',loginAsSellerController);
userRouter.get('/getuser',protectMiddleware,getUserController);
userRouter.get('/sell-amount',protectMiddleware,getUserBalanceController);

export default userRouter;