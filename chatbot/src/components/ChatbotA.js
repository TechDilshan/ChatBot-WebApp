import React from "react";
import '../css.css';
import { logout } from "../firebase";

const ChatbotA = () => {
  return (
    <>
      <h1>Chatbot A</h1>
      <button className="logout-button" onClick={logout}>Logout</button>
      <iframe src="https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_testAisleWeb/webchat?__version__=2" width="100%" height="500" title="Dynac LK"></iframe>
    </>
  );
};

export default ChatbotA;
