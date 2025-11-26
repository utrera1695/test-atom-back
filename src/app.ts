import express, { urlencoded } from "express";
import { json } from "body-parser";
import cors from "cors";
import taskRouter from "./modules/tasks/interface/routes/task.routes";
import { apiReference } from "@scalar/express-api-reference";
import { swaggerSpec } from "./docs";

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

export default app;
