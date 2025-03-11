import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
const provider = new GoogleAuthProvider();

// Google Sign-In
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Fetch role from Firestore
    const userRef = doc(db, "users", user.email);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().role;
    } else {
      alert("No role assigned. Contact Admin.");
      await signOut(auth);
      return null;
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

// Logout function
const logout = async () => {
  await signOut(auth);
  window.location.href = "/"; // Redirect to Home after logout
};
export { auth, db, signInWithGoogle, logout };
