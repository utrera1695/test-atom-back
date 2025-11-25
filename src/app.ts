import express from "express";
import { json } from "body-parser";
import { taskRoutes } from "./interfaces/http/routes/task.routes";
import { authMiddleware } from "./interfaces/http/middleware/auth.middleware";

const app = express();

// Middleware
app.use(json());
app.use(authMiddleware);

// Routes
app.use("/api/tasks", taskRoutes());

export default app;
