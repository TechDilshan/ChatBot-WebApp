import React from "react";
import { useNavigate } from "react-router-dom";
import "./css.css";

const Home = () => {
  const navigate = useNavigate();

  const handleAgentClick = (role) => {
    navigate("/login", { state: { role } });
  };

  return (
    <div className="container">
      <h1>Agent Store</h1>
      <div className="agents-grid">
        <AgentCard agentName="Agent 1" iconSrc="https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632381.png" onClick={() => handleAgentClick("A")} />
        <AgentCard agentName="Agent 2" iconSrc="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png" onClick={() => handleAgentClick("B")} />
        <AgentCard agentName="Admin" iconSrc="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-3d-rpa-cute-robot-cartoon-sky-blue-gradients-color-chatbot-png-image_6093532.png" onClick={() => handleAgentClick("admin")} />
      </div>
    </div>
  );
};

const AgentCard = ({ agentName, iconSrc, onClick }) => (
  <div className="agent-card" onClick={onClick}>
    <img src={iconSrc} alt={`${agentName} Icon`} className="agent-icon" />
    <div className="agent-name">{agentName}</div>
  </div>
);

export default Home;
