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
        <AgentCard agentName="A" iconSrc="./bot.png" onClick={() => handleAgentClick("A")} />
        <AgentCard agentName="B" iconSrc="./innospace.jpg" onClick={() => handleAgentClick("B")} />
        <AgentCard agentName="Admin" iconSrc="./innospace.jpg" onClick={() => handleAgentClick("admin")} />
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
