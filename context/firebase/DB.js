import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJaaqzyhK3iNBkW-RBW73PamTDqiErNGs",
  authDomain: "eshop-68dca.firebaseapp.com",
  projectId: "eshop-68dca",
  storageBucket: "eshop-68dca.appspot.com",
  messagingSenderId: "1035158994074",
  appId: "1:1035158994074:web:9c43ec9669424e18afb323",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
