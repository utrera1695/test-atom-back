import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();
const userController = new AuthController();

authRouter.post("/auth/register", (req, res) =>
	userController.register(req, res)
);

export default authRouter;
