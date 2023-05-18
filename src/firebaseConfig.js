import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD377p9_MzKb3x9tTDU-Zd_2720f-jZtXU",
  authDomain: "vue3-2023-20d33.firebaseapp.com",
  projectId: "vue3-2023-20d33",
  storageBucket: "vue3-2023-20d33.appspot.com",
  messagingSenderId: "585203536245",
  appId: "1:585203536245:web:fce5d6ace6998b343e433c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };