export const TaskDTO = {
	type: "object",
	properties: {
		title: { type: "string" },
		description: { type: "string" },
	},
	required: ["title", "description"],
};

export const Task = {
	type: "object",
	properties: {
		id: { type: "string" },
		title: { type: "string" },
		description: { type: "string" },
		completed: { type: "boolean", default: false },
		createdAt: { type: "string", format: "date-time" },
	},
	required: ["id", "title", "description", "completed", "createdAt"],
};
