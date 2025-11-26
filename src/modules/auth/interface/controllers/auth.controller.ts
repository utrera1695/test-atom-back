import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../application/usecases/registeruser.usecase";
import { RegisterDTO } from "../../application/dto/register.dto";

export class AuthController {
	private registerUserUseCase: RegisterUserUseCase;
	constructor() {
		this.registerUserUseCase = new RegisterUserUseCase();
	}

	async register(req: Request, res: Response) {
		const userData: RegisterDTO = req.body;
		try {
			const result = await this.registerUserUseCase.execute(userData);
			res.status(201).json(result);
		} catch (error: Error | any) {
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
}
