import { initializeApp } from "firebase/app";
import { getAuth } from " firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHmYl0eBXhaG-CEBu05RkX8OsMmpHpQow",
  authDomain: "vue-authentication-27154.firebaseapp.com",
  projectId: "vue-authentication-27154",
  storageBucket: "vue-authentication-27154.appspot.com",
  messagingSenderId: "234220491880",
  appId: "1:234220491880:web:1b626e154f70aecdd057dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
