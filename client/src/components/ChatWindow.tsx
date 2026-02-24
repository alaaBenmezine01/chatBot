import React from "react";
import { Message } from "../types/chat.types";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
}

const ChatWindow: React.FC<Props> = ({ messages }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        height: 400,
        overflowY: "auto",
        padding: 10,
        marginBottom: 10,
      }}
    >
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatWindow;