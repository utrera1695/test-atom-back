import { RegisterDTO } from "../../application/dto/register.dto";
import { User } from "../entities/user.entity";

export class UserFactory {
	static uuid = () => crypto.randomUUID();
	static create({ id, email, createdAt }: RegisterDTO) {
		id = id || this.uuid();
		createdAt = createdAt || new Date();
		return new User(id, email, createdAt);
	}
}
