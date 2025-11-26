import { NextFunction, Request, Response } from "express";
import { FirebaseAuthAdapter } from "../infrastructure/firebase/firebase-auth.adapter";

declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

const authAdapter = new FirebaseAuthAdapter();

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token || !token.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	try {
		const user = await authAdapter.verifyToken(token);
		req.user = user; // Attach user information to the request
		next();
	} catch (error) {
		return res.status(401).json({ message: "Unauthorized" });
	}
};
