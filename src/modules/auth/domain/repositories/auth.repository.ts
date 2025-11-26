import { auth } from "firebase-admin";
import { User } from "../entities/user.entity";

export interface AuthRepository {
	register(data: User): Promise<User>;
}
