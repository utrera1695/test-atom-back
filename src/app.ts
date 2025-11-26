import express, { urlencoded } from "express";
import { json } from "body-parser";
import cors from "cors";
import taskRouter from "./modules/tasks/interface/routes/task.routes";
import { apiReference } from "@scalar/express-api-reference";
import { swaggerSpec } from "./docs";
import authRouter from "./modules/auth/interface/routes/auth.routes";

const app = express();

app.use(json());
app.use(cors({ origin: "*" }));
app.use(urlencoded({ extended: true }));

//swagger
if (process.env.NODE_ENV === "development")
	app.use(
		"/docs",
		apiReference({
			content: swaggerSpec,
			theme: "laserwave",
		})
	);

// Routes
app.use("/api", taskRouter);
app.use("/api", authRouter);

export default app;
