import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import env from "@/pages/api/config";

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const firestore = getFirestore();
export default firestore;
