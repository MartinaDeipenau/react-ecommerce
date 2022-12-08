
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3s5UZPf0EYm2nEes2N_kUDWdREtkbE90",
  authDomain: "ecommerce-react-50e42.firebaseapp.com",
  projectId: "ecommerce-react-50e42",
  storageBucket: "ecommerce-react-50e42.appspot.com",
  messagingSenderId: "87918995361",
  appId: "1:87918995361:web:c7c0055eaad9da165f4de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

