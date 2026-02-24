import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.listen(5000, () => {
  console.log("server running on port 5000");
});

export default app;
