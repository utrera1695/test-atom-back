export const RegisterDTO = {
	type: "object",
	properties: {
		email: { type: "string" },
	},
	required: ["email", "password"],
};

export const Register = {
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
