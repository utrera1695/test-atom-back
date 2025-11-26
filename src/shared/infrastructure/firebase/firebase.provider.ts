import { initializeApp, App, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";
import { firebaseAdminSdkJson } from "../../../config";

class FirebaseProvider {
	private static app: App;

	static getApp() {
		if (!this.app) {
			this.app = initializeApp({
				credential: cert(firebaseAdminSdkJson as ServiceAccount),
			});
		}
		return this.app;
	}

	static firestore() {
		return getFirestore(this.getApp());
	}

	static auth() {
		return getAuth(this.getApp());
	}

	static storage() {
		return getStorage(this.getApp()).bucket();
	}
}

export default FirebaseProvider;
