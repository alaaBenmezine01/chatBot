export interface Message {
  sender: "user" | "bot";
  text: string;
}

export interface ChatResponse {
  reply: string;
}