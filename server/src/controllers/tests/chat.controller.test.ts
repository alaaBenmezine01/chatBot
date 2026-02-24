import { handleChat } from "../chat.controller";

describe("Chat Controller", () => {
  it("should return reply", () => {
    const req: any = {
      body: { message: "Hello" },
    };

    const json = jest.fn();
    const res: any = { json };

    handleChat(req, res);

    expect(json).toHaveBeenCalledWith({
      reply: "Hello! How can I assist you today?",
    });
  });
});