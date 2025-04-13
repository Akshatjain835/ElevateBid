import { Router } from "express";
import { loginAsSellerController, loginStatusController, loginUserController, logoutUserController, registerUserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register',registerUserController);
userRouter.post('/login',loginUserController);
userRouter.get('/loggedin',loginStatusController);
userRouter.get('/logout',logoutUserController);
userRouter.post('/seller',loginAsSellerController);

export default userRouter;