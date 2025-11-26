import { auth } from "firebase-admin";

export class FirebaseAuthAdapter {
	async register(email: string, password: string): Promise<auth.UserRecord> {
		return await auth().createUser({
			email,
			password,
		});
	}

	async login(
		email: string,
		password: string
	): Promise<auth.UserRecord | null> {
		return await auth().getUserByEmail(email);
	}

	async logout(uid: string): Promise<void> {
		await auth().revokeRefreshTokens(uid);
	}

	async getUser(uid: string): Promise<auth.UserRecord | null> {
		try {
			return await auth().getUser(uid);
		} catch (error) {
			return null;
		}
	}

	async verifyToken(token: string): Promise<auth.DecodedIdToken> {
		return await auth().verifyIdToken(token);
	}
}
