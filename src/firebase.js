import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
  
const firebaseConfig = {
    apiKey: "AIzaSyCj7WaGG8dyFxNM6XUJLdtmv_iUofxqKNo",
    authDomain: "vmeet-16eee.firebaseapp.com",
    projectId: "vmeet-16eee",
    storageBucket: "vmeet-16eee.appspot.com",
    messagingSenderId: "15789307864",
    appId: "1:15789307864:web:0874a60f1345e45653a4ad"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)