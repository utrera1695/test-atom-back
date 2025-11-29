import jwt from "jsonwebtoken";
import { authMiddleware } from "../shared/midlewares/auth.middleware";

describe("Auth Middleware", () => {
	const secret = process.env.JWT_SECRET!;

	test("debe permitir el acceso con un token válido", () => {
		const token = jwt.sign({ user: "123" }, secret);

		const req: any = {
			headers: { authorization: `Bearer ${token}` },
		};

		const res: any = {};
		const next = jest.fn();

		authMiddleware(req, res, next);

		expect(next).toHaveBeenCalled(); // verify pasó
	});

	test("debe bloquear un token inválido", () => {
		const req: any = {
			headers: { authorization: "Bearer token_invalido" },
		};

		const res: any = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};
		const next = jest.fn();

		authMiddleware(req, res, next);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({
			message: "Unauthorized",
		});
	});
});
