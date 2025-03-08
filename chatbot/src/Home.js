import React from 'react';
import { Link } from 'react-router-dom';
import './css.css';


const Home = () => {
  return (
    <div className="container">
      <h1>Agent Store</h1>
      <div className="agents-grid">
        <AgentCard 
          agentName="test-aisle-web"
          iconSrc="./bot.png"
          link="/"
          state={{ requestedPath: "/test-aisle-web" }}
        />
        <AgentCard 
          agentName="InnoSPACE Assistant"
          iconSrc="./innospace.jpg"
          link="/"
          state={{ requestedPath: "/innospace" }}
        />
        <AgentCard 
          agentName="Recruitment Agent"
          iconSrc="./innospace.jpg"
          link="/"
          external
        />
      </div>
    </div>
  );
};

function AgentCard({ agentName, iconSrc, link, external = false, state }) {
    return (
      <div className="agent-card">
        {external ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={iconSrc} alt={`${agentName} Icon`} className="agent-icon" />
            <div className="agent-name">{agentName}</div>
          </a>
        ) : (
          <Link to={link} state={state}>
            <img src={iconSrc} alt={`${agentName} Icon`} className="agent-icon" />
            <div className="agent-name">{agentName}</div>
          </Link>
        )}
      </div>
    );
}

export default Home;