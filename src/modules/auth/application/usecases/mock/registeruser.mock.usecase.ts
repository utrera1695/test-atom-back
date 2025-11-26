import { User } from "../../../domain/entities/user.entity";
import { UserFactory } from "../../../domain/factories/user.factory";
import { AuthRepository } from "../../../domain/repositories/auth.repository";
import { FirebaseAuthRepository } from "../../../infrastructure/firebaseAuth.repository";
import { RegisterDTO } from "../../dto/register.dto";

export class RegisterUserMockUseCase {
	constructor(private authRepository: AuthRepository) {}

	async execute(data: RegisterDTO): Promise<User> {
		const user = UserFactory.create(data);
		return await this.authRepository.register(user);
	}
}
