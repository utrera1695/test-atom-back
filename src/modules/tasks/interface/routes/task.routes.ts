import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { authMiddleware } from "../../../../shared/midlewares/auth.middleware";

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.post("/tasks", authMiddleware, taskController.create);

export default taskRouter;
