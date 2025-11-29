import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { authMiddleware } from "../../../../shared/midlewares/auth.middleware";

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.post("/task", authMiddleware, (req, res) =>
	taskController.create(req, res)
);
taskRouter.get("/tasks", authMiddleware, (req, res) =>
	taskController.find(req, res)
);
taskRouter.put("/task/:id", authMiddleware, (req, res) =>
	taskController.update(req, res)
);
taskRouter.delete("/task/:id", authMiddleware, (req, res) =>
	taskController.delete(req, res)
);

export default taskRouter;
