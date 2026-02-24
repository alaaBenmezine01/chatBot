const response = [
  {
    keywords: ["price", "cost", "pricing"],
    response: "Our pricing starts at $9.99/month",
  },
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! How can I assist you today?",
  },
  {
    keywords: ["help", "support"],
    response: "I'm here to help. What can I do for you?",
  },
  {
    keywords: ["features", "services"],
    response:
      "We offer various features including cloud storage, real-time sync, and 24/7 support",
  },
];
export const getBotResponse = (message: string): string => {
  const userMessage = message.toLowerCase();
  const match = response.find((item) =>
    item.keywords.some((keyword) => userMessage.includes(keyword)),
  );
  return match ? match.response : "Sorry,I didn't understand that.";
};
