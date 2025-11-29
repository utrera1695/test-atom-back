import { NextFunction, Request, Response } from "express";
import { TokenAdapter } from "../infrastructure/auth/token.adapter";

declare global {
	namespace Express {
		interface Request {
			token?: any;
		}
	}
}

const authAdapter = new TokenAdapter();

export const refreshMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers["X-Refresh-Token"] as string;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	const token = authHeader.split(" ")[1]; // ahora sí

	try {
		const decoded = authAdapter.verifyToken(token);
		req.token = decoded?.token;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Unauthorized" });
	}
};
