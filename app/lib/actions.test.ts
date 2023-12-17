import { POST } from "./actions";

describe("POST function", () => {
  beforeEach(() => {
    // Mock the global fetch function
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should make a POST request with correct data", async () => {
    const mockResponse = { success: true };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const emailFormProps = {
      email: "walber.melo@hotmail",
      subject: "Tu voz",
      name: "Walber Melo",
      company: "Smart AI",
      message: "great marketing achievement",
      link: "link",
      gift: "gift",
      date: "24/12/2023",
    };

    const result = await POST(emailFormProps);

    expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailFormProps),
    });

    expect(result).toEqual(mockResponse);
  });
});
