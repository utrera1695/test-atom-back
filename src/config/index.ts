import * as dotenv from "dotenv";
import { FirebaseOptions } from "firebase/app";

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
const firebaseAccoutService = process.env.FIREBASE_SERVICE_ACCOUNT;

export const firebaseAdminSdkJson = firebaseAccoutService?.includes(".json")
	? firebaseAccoutService
	: JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "");

export const jwtSecret = process.env.JWT_SECRET || "secret";
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "1h";
