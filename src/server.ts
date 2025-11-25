import express from "express";
import { createServer } from "http";
import { app } from "./app";
import { logger } from "./shared/utils/logger";
import { config } from "./config";

const PORT = config.port || 3000;

const server = createServer(app);

server.listen(PORT, () => {
	logger.info(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
	logger.error(`Server error: ${error}`);
});
