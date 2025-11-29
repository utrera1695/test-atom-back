import { User } from "../../domain/entities/user.entity";
import { UserFactory } from "../../domain/factories/user.factory";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { FirebaseAuthRepository } from "../../infrastructure/firebaseAuth.repository";
import { LoginDTO } from "../dto/login.dto";
import { LoginResponse } from "../dto/loginResponse.dto";
import { RegisterDTO } from "../dto/register.dto";

export class LoginUseCase {
	private authRepository: AuthRepository;

	constructor() {
		this.authRepository = new FirebaseAuthRepository();
	}

	async execute(data: LoginDTO): Promise<LoginResponse> {
		return await this.authRepository.login(data.email);
	}
}
