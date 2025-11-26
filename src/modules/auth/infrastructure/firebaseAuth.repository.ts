import { Auth } from "firebase-admin/auth";
import FirebaseProvider from "../../../shared/infrastructure/firebase/firebase.provider";
import { auth } from "firebase-admin";
import { AuthRepository } from "../domain/repositories/auth.repository";
import { User } from "../domain/entities/user.entity";
import { EMAIL_ALEREADY_EXISTS } from "../../../utils/constants/firebase.errors";

export class FirebaseAuthRepository implements AuthRepository {
	private auth: Auth;

	constructor() {
		this.auth = FirebaseProvider.auth();
	}

	async register(data: User): Promise<any> {
		try {
			const result = await this.auth.createUser(data);
			console.log("test result", result);
			return result;
		} catch (error: any) {
			if (error?.errorInfo.code === EMAIL_ALEREADY_EXISTS)
				throw { status: 409, message: error?.errorInfo.message };
			throw error;
		}
	}

	async login(
		email: string,
		password: string
	): Promise<auth.UserRecord | null> {
		return await auth().getUserByEmail(email);
	}
}
