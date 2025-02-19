import React from "react";
import '../css.css';

const Dashboard = () => {
  const [src, setSrc] = React.useState("");

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button className="button-margin" onClick={() => setSrc("https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_testAisleWeb/webchat?__version__=2")}>Chatbot A</button>
      <button className="button-margin" onClick={() => setSrc("https://copilotstudio.microsoft.com/environments/Default-534253fc-dfb6-462f-b5ca-cbe81939f5ee/bots/crad5_innoSpaceAssistant/webchat?__version__=2")}>Chatbot B</button>
      {src && <iframe src={src} width="100%" height="500px" title="Chatbot Frame" />}
    </div>
  );
};

export default Dashboard;
