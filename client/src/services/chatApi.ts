import { ChatResponse } from "../types/chat.types";

export const sendMessageToBot = async (
  message: string,
): Promise<ChatResponse> => {
  console.log("je test", message);
  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: ChatResponse = await response.json();
  return data;
};
