import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBZj4ViLvBOqOW0YnsyVPV2rUScoNG_Rys",
  authDomain: "ausus-af63e.firebaseapp.com",
  projectId: "ausus-af63e",
  storageBucket: "ausus-af63e.appspot.com",
  messagingSenderId: "867576651199",
  appId: "1:867576651199:web:6b61374d068ad91955150a"
};
const app = initializeApp(firebaseConfig) 
const auth = getAuth()
