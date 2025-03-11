import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const requiredRole = location.state?.role;

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.email);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().role === requiredRole) {
          navigate(`/${requiredRole === "A" ? "chatbotA" : requiredRole === "B" ? "chatbotB" : "dashboard"}`);
        } else {
          alert("You do not have access to this feature.");
          auth.signOut();
          navigate("/");
        }
      }
    });
  }, [navigate, requiredRole]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
