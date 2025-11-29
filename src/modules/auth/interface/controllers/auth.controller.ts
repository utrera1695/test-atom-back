import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../application/usecases/registeruser.usecase";
import { RegisterDTO } from "../../application/dto/register.dto";
import { LoginUseCase } from "../../application/usecases/login.usecase";
import { LoginDTO } from "../../application/dto/login.dto";

export class AuthController {
	private registerUserUseCase: RegisterUserUseCase;
	private loginUseCase: LoginUseCase;
	constructor() {
		this.registerUserUseCase = new RegisterUserUseCase();
		this.loginUseCase = new LoginUseCase();
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

	async login(req: Request, res: Response) {
		const loginData: LoginDTO = req.body;
		try {
			const result = await this.loginUseCase.execute(loginData);
			res.status(201).json(result);
		} catch (error: Error | any) {
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
}
