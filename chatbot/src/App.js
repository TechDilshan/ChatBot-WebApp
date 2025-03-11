import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Home from "./Home";
import Login from "./auth/Login";
import ChatbotA from "./components/ChatbotA";
import ChatbotB from "./components/ChatbotB";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbotA" element={<ChatbotA />} />
        <Route path="/chatbotB" element={<ChatbotB />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
