import { jwtSecret } from "../../../config";
import jwt from "jsonwebtoken";

export class TokenAdapter {
	createToken(user: string) {
		return jwt.sign({ user }, jwtSecret, {
			expiresIn: "1h",
		});
	}

	verifyToken(token: string): any {
		try {
			const decoded = jwt.verify(token, jwtSecret!);
			return decoded;
		} catch (error) {
			throw new Error("INVALID_TOKEN");
		}
	}
}
