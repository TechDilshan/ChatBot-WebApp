import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) navigate("/");
    });
  }, [navigate]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
