import { Auth } from "firebase-admin/auth";
import FirebaseProvider from "../../../shared/infrastructure/firebase/firebase.provider";
import { auth } from "firebase-admin";
import { AuthRepository } from "../domain/repositories/auth.repository";
import { User } from "../domain/entities/user.entity";
import { EMAIL_ALEREADY_EXISTS } from "../../../utils/constants/firebase.errors";
import { TokenAdapter } from "../../../shared/infrastructure/auth/token.adapter";
import { LoginResponse } from "../application/dto/loginResponse.dto";
import { TOKEN_ACCESS, TOKEN_REFRESH } from "../../../utils/constants/token";

export class FirebaseAuthRepository implements AuthRepository {
	private firestore;
	private collectionName = "users";
	private tokenAdapter;

	constructor() {
		this.firestore = FirebaseProvider.firestore();
		this.tokenAdapter = new TokenAdapter();
	}

	/* Busca una coleccion por el email */
	private async existingEmail(email: string) {
		return await this.firestore
			.collection(this.collectionName)
			.where("email", "==", email)
			.get();
	}

	async register(data: User): Promise<any> {
		try {
			const existingEmail = await this.existingEmail(data.email);
			if (!existingEmail.empty) {
				throw { status: 409, message: "El email ya está registrado." };
			}

			await this.firestore
				.collection(this.collectionName)
				.doc(data.id)
				.set({ ...data });
			return data;
		} catch (error: any) {
			throw error;
		}
	}

	async login(email: string): Promise<LoginResponse> {
		const snapshot = await this.existingEmail(email);
		snapshot.docs.map((doc) => doc.data() as User)[0];

		if (!snapshot.docs.length) throw { status: 404, message: "User not found" };

		const token = this.tokenAdapter.createToken(snapshot.docs[0].id);
		return {
			token,
		};
	}
}
