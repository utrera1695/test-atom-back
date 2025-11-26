import { RegisterDTO } from "../../application/dto/register.dto";
import { User } from "../entities/user.entity";

export class UserFactory {
	static create({ email, password, displayName }: RegisterDTO) {
		return new User(email, password, displayName);
	}
}
