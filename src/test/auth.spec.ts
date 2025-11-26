import { RegisterUserMockUseCase } from "../modules/auth/application/usecases/mock/registeruser.mock.usecase";
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
		const userData = {
			email: "test@email.com",
			password: "Pass123456*",
			displayName: "Test User",
		};

		authRepository.register = jest.fn().mockResolvedValue(userData);

		const result = await registerUser.execute(userData);
		console.log(result);
		expect(result).toEqual(userData);
	});
});
