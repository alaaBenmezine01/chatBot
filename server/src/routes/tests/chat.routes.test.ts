import request from "supertest";
import app from "../../app";

describe("POST /api/chat", () => {
  it("should return bot reply", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({ message: "Hello" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("reply");
  });
});