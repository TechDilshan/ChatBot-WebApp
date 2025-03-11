import React from "react";
import '../css.css';
import { logout } from "../firebase";
import { FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [src, setSrc] = React.useState("");

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Admin Dashboard</h2>
      <button 
        className="chatbot-button" 
        onClick={() => setSrc("https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_testAisleWeb/webchat?__version__=2")}
      >
        Chatbot A
      </button>
      <button 
        className="chatbot-button" 
        onClick={() => setSrc("https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_innoSpaceAssistant/webchat?__version__=2")}
      >
        Chatbot B
      </button>

      <button 
        className="logout-btn" 
        onClick={logout}
      >
        <FaSignOutAlt className="icon" /> Log Out
      </button>
     
      {src && <iframe className="chatbot-iframe" src={src} width="100%" height="500px" title="Chatbot Frame" />}
    </div>
  );
};

export default Dashboard;
