import { Request, Response } from "express";
import { getBotResponse } from "../services/chat.service";

export const handleChat = (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  const reply = getBotResponse(message);
  res.json({ reply });
};
