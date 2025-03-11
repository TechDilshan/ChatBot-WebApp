import React from "react";
import '../css.css';
import { logout } from "../firebase";
import { FaSignOutAlt } from 'react-icons/fa';

const ChatbotB = () => {
    return (
        <>
          <div className="chatbot-container">
            <h1 className="chatbot-title">Chatbot B</h1>
              <button className="logout-button" onClick={logout}>
                <FaSignOutAlt className="icon" /> Log Out
              </button>
              <iframe className="chatbot-iframe" src="https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_innoSpaceAssistant/webchat?__version__=2" title="Dynac LK"></iframe>
          </div>
        </>
      );
};

export default ChatbotB;
