import { useState } from "react";

function ChatBox({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input, user }),
    });
    const data = await response.json();
    setMessages([...messages, { role: "user", content: input }, { role: "ai", content: data.reply }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>💬 AI Assistant</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i} className={msg.role}>{msg.role === "user" ? "You: " : "AI: "}{msg.content}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;
