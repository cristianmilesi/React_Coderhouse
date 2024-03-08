// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlRCTP3hcjZq32_GVob58_3dSlm96R0f0",
  authDomain: "projectreactcoder.firebaseapp.com",
  projectId: "projectreactcoder",
  storageBucket: "projectreactcoder.appspot.com",
  messagingSenderId: "816677213303",
  appId: "1:816677213303:web:4bf8fdd3cbee057464e272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
