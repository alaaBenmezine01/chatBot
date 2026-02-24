import React, { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, padding: "8px" }}
      />
      <button onClick={handleSend} style={{ padding: "8px 12px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;