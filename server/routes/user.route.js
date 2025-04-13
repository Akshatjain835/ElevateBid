import { Router } from "express";
import { loginStatusController, loginUserController, logoutUserController, registerUserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/register',registerUserController);
userRouter.post('/login',loginUserController);
userRouter.get('/loggedin',loginStatusController);
userRouter.get('/logout',logoutUserController);

export default userRouter;