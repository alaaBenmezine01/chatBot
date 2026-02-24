import { getBotResponse } from "../chat.service";

describe("Chat Service", () => {
  it("should return bot response", () => {
    const result = getBotResponse("Hello");

    expect(result).toBe("Hello! How can I assist you today?");
  });
});