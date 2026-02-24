import React from "react";
import { Message } from "../types/chat.types";

interface Props {
  message: Message;
}

const MessageBubble: React.FC<Props> = ({ message }) => {
  const isUser = message.sender === "user";
  return (
    <div
      style={{
        textAlign: isUser ? "right" : "left",
        margin: "5px 0",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "15px",
          backgroundColor: isUser ? "#007bff" : "#e5e5ea",
          color: isUser ? "white" : "black",
          maxWidth: "60%",
        }}
      >
        {message.text}
      </span>
    </div>
  );
};

export default MessageBubble;