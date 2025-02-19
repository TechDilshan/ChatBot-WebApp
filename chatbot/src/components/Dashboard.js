import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [src, setSrc] = React.useState("");

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={() => setSrc("https://example.com")}>Chatbot A</button>
      <button onClick={() => setSrc("https://dynac.lk")}>Chatbot B</button>
      {src && <iframe src={src} width="100%" height="500px" title="Chatbot Frame" />}
    </div>
  );
};

export default Dashboard;
