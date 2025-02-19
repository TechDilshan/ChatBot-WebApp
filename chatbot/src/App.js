import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db, signInWithGoogle, logout } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import ChatbotA from "./components/ChatbotA";
import ChatbotB from "./components/ChatbotB";
import Dashboard from "./components/Dashboard";
import Login from "./auth/Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async (user) => {
      if (!user) return;

      const userRef = doc(db, "users", user.email);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setRole(userSnap.data().role);
      } else {
        setRole(""); // No role assigned
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchUserRole(user);
      } else {
        setRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logout();
    await auth.signOut();
    setUser(null);
    setRole(""); // Clear role after logout
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute user={user}>
              {role === "A" && <ChatbotA />}
              {role === "B" && <ChatbotB />}
              {role === "admin" && <Dashboard />}
            </PrivateRoute>
          }
        />
      </Routes>
      {user && <button onClick={handleLogout}>Logout</button>}
    </Router>
  );
};

export default App;
