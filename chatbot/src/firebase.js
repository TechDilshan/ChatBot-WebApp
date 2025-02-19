import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSS_cv_YILBfBbNwExmVVUEjemSkj_kaI",
    authDomain: "chatbot-ee1e0.firebaseapp.com",
    projectId: "chatbot-ee1e0",
    storageBucket: "chatbot-ee1e0.firebasestorage.app",
    messagingSenderId: "571234613539",
    appId: "1:571234613539:web:f9eb3f85a07bde019df496"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Google Sign-in & Firestore Role Handling
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider.setCustomParameters({
      prompt: 'select_account' // Force account selection
    }));
    const user = result.user;
    const userRef = doc(db, "users", user.email);
    const userSnap = await getDoc(userRef);

    // If user does not exist in Firestore, set a default role
    if (!userSnap.exists()) {
      await setDoc(userRef, { role: "A" }); // Default role (change if needed)
    }

    return user;
  } catch (error) {
    console.error("Google Sign-in Error:", error);
  }
};

const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("loggedEmail"); // Clear the logged email
    localStorage.clear(); // Clear any other stored data
};
  

export { auth, db, signInWithGoogle, logout };
