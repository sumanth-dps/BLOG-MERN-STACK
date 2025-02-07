import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn("VITE_FIREBASE_API"),
  // authDomain: "yt-mern-blog.firebaseapp.com",
  // projectId: "yt-mern-blog",
  // storageBucket: "yt-mern-blog.firebasestorage.app",
  // messagingSenderId: "150248092393",
  // appId: "1:150248092393:web:34bc9843d732ee4be7f678"
  authDomain: "mern-blog-projectt.firebaseapp.com",
  projectId: "mern-blog-projectt",
  storageBucket: "mern-blog-projectt.firebasestorage.app",
  messagingSenderId: "154535247102",
  appId: "1:154535247102:web:b4c337b983c6633fb4f9af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
