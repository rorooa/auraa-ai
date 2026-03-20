import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

if (typeof window !== "undefined") {
  if (getApps().length === 0) {
    if (apiKey) {
      app = initializeApp(firebaseConfig);
      console.log("Firebase initialized successfully.");
    } else {
      console.warn("Firebase API Key is missing. Check your environment variables (NEXT_PUBLIC_FIREBASE_API_KEY).");
    }
  } else {
    app = getApps()[0];
  }
}

export const auth = app ? getAuth(app) : null;
