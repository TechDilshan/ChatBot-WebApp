import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'; // Import Dialog components

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const requiredRole = location.state?.role;
  const [openAlert, setOpenAlert] = useState(false); // State for dialog box

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const [hasAlertShown, setHasAlertShown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.email);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().role === requiredRole) {
          navigate(`/${requiredRole === "A" ? "chatbotA" : requiredRole === "B" ? "chatbotB" : "dashboard"}`);
        } else if (!hasAlertShown) {
          setHasAlertShown(true);
          setOpenAlert(true); // Open the dialog
        }
      }
    });

    return () => unsubscribe();
  }, [navigate, requiredRole, hasAlertShown]);

  return (
    <div className="login-container">
      <img src="https://img.freepik.com/premium-psd/happy-robot-3d-ai-character-chat-bot-mascot-gpt-chatbot-icon-artificial-intelligence_95505-482.jpg" alt="Google Logo" className="login-image" />
      <h2 className="login-title">Login</h2>
      <button className="login-button" onClick={signInWithGoogle}>Sign in with Google</button>
      <Dialog open={openAlert} onClose={handleCloseAlert}>
        <DialogTitle>Access Denied</DialogTitle>
        <DialogContent>
          You do not have access to this feature.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert} autoFocus>
            OK
          </Button>
          <Button onClick={() => {
            auth.signOut();
            navigate("/");
            handleCloseAlert();
          }}>
            Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
