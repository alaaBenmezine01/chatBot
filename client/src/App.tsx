import React, { useState } from "react";
import { Message } from "./types/chat.types";
import { sendMessageToBot } from "./services/chatApi";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    const userMessage: Message = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    try {
      const response = await sendMessageToBot(text);
      const botMessage: Message = { sender: "bot", text: response.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        sender: "bot",
        text: "Error: unable to reach server.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Support Chatbot</h2>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
      {loading && <p>Bot is typing...</p>}
    </div>
  );
};

export default App;