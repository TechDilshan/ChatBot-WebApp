import React, { useEffect } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../css.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
