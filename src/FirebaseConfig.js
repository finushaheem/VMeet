import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "F_API_KEY",

  authDomain: "F_AUTH_DOMAIN",

  projectId: "F_PROJECT_ID",

  storageBucket: "F_BUCKET_STORAGE",

  messagingSenderId: "F_MESSAGING_SENDER_ID",

  appId: "F_APP_ID",

  measurementId: "F_MEASUREMENT_ID",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
