import { auth } from "firebase-admin";
import FirebaseProvider from "./firebase.provider";
import { Auth } from "firebase-admin/auth";

export class FirebaseAuthAdapter {
	private auth: Auth;

	constructor() {
		this.auth = FirebaseProvider.auth();
	}

	async verifyToken(token: string): Promise<auth.DecodedIdToken> {
		return await this.auth.verifyIdToken(token);
	}
}
