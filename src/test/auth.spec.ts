import { RegisterUserMockUseCase } from "../modules/auth/application/usecases/mock/registeruser.mock.usecase";
import { User } from "../modules/auth/domain/entities/user.entity";
import { AuthRepository } from "../modules/auth/domain/repositories/auth.repository";

describe("Test auth", () => {
	let authRepository: jest.Mocked<AuthRepository>;
	let registerUser: RegisterUserMockUseCase;

	beforeEach(() => {
		authRepository = {
			register: jest.fn(),
		} as unknown as jest.Mocked<AuthRepository>;
		registerUser = new RegisterUserMockUseCase(authRepository);
	});

	it("should register user", async () => {
		const userData = new User("1", "test@email.com", new Date());

		authRepository.register = jest.fn().mockResolvedValue(userData);

		const result = await registerUser.execute(userData);
		expect(result).toEqual(userData);
	});
});
