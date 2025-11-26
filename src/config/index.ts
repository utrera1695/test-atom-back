import * as dotenv from "dotenv";
import { FirebaseOptions } from "firebase/app";
import serviceAccount from "../../firebaseServiceAccount.json";

dotenv.config();

export const firebaseConfig: FirebaseOptions = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	appId: process.env.FIREBASE_APP_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
export const PORT = process.env.PORT || 3000;

const fixedPrivateKey = serviceAccount.private_key.replace(/\\n/g, "\n");

export const firebaseAdminSdkJson = {
	...serviceAccount,
	private_key: fixedPrivateKey,
};
