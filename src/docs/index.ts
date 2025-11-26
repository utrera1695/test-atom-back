import swaggerJSDoc from "swagger-jsdoc";
import { Task, TaskDTO } from "./schemas/tasks.schemas";

export const swaggerSpec = {
	openapi: "3.0.0",
	info: {
		title: "AtomChat API",
		version: "1.0.0",
		description: "API para la gestión de usuarios y tasks",
	},
	servers: [
		{
			url: "http://localhost:3000/api",
		},
	],

	paths: {
		"/tasks": {
			post: {
				summary: "Crear tarea",
				tags: ["Tareas"],
				security: [{ bearerAuth: [] }],
				requestBody: { content: { "application/json": { schema: TaskDTO } } },
				responses: {
					201: {
						description: "Tarea creada",
						content: { "application/json": { schema: Task } },
					},
					401: {
						description: "No autorizado",
					},
					404: {
						description: "No encontrado",
					},
					500: {
						description: "Error interno del servidor",
					},
				},
			},
		},
	},
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "JWT",
			},
		},
		schemas: { TaskDTO, Task },
	},
};
