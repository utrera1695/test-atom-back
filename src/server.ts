import express from "express";
import { createServer } from "http";
import app from "./app";
import { PORT } from "./config/";

const server = createServer(app);

server.listen(PORT, () => {
	console.info(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
	console.error(`Server error: ${error}`);
});
