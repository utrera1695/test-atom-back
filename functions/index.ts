import * as functions from "firebase-functions";
import app from "../dist/app";

// Exporta tu Express app como función HTTPS
export const api = functions.https.onRequest(app);
