import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();
const userController = new AuthController();

authRouter.post("/auth/login", (req, res) => userController.login(req, res));
authRouter.post("/auth/register", (req, res) =>
	userController.register(req, res)
);

export default authRouter;
