import { User } from "../entities/user.entity";
import { LoginResponse } from "../../application/dto/loginResponse.dto";

export interface AuthRepository {
	register(data: User): Promise<User>;
	login(email: string): Promise<LoginResponse>;
}
