import { useState } from "react";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";
import "./styles/app.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} />
      <div className="main-container">
        {user ? (
          <ChatBox user={user} />
        ) : (
          <p style={{ textAlign: "center" }}>Please login to use AI Assistant</p>
        )}
      </div>
    </div>
  );
}

export default App;
