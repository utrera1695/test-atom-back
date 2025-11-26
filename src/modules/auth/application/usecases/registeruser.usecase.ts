import { User } from "../../domain/entities/user.entity";
import { UserFactory } from "../../domain/factories/user.factory";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { FirebaseAuthRepository } from "../../infrastructure/firebaseAuth.repository";
import { RegisterDTO } from "../dto/register.dto";

export class RegisterUserUseCase {
	private authRepository: AuthRepository;

	constructor() {
		this.authRepository = new FirebaseAuthRepository();
	}

	async execute(data: RegisterDTO): Promise<User> {
		const user = UserFactory.create(data);
		return await this.authRepository.register(user);
	}
}
