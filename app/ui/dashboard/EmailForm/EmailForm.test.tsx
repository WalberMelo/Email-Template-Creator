import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { toast } from "react-toastify";

import { EmailForm } from "./EmailForm.component";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("@/context/EmailDataContext", () => ({
  useEmailDataContext: () => {
    const setEmailData = jest.fn();
    return {
      emailData: { email: "" },
      setEmailData,
    };
  },
}));

describe("EmailForm component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("handles successful form submission", async () => {
    const { getAllByTestId, getByTestId } = render(<EmailForm />);
    let submitButton = getByTestId("submit-form--btn");
    let inputs = getAllByTestId("form-input");
    let textArea = getByTestId("text-area");

    const mockResponse = { message: "Email sent successfully!" };
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Simulate user input in the form
    fireEvent.change(inputs[0], {
      target: { value: "test@example.com" },
    });

    fireEvent.change(inputs[1], {
      target: { value: "Tu Voz, Nuestra Inspiración: Gana con WeUp" },
    });
    fireEvent.change(inputs[2], {
      target: { value: "Walber Melo" },
    });
    fireEvent.change(inputs[3], {
      target: { value: "Example Inc." },
    });
    fireEvent.change(textArea, {
      target: { value: "la gran capacidad de crecimiento de la empresa" },
    });
    fireEvent.change(inputs[4], {
      target: { value: "un bonus de 50€" },
    });
    fireEvent.change(inputs[5], {
      target: { value: "15-12-2023" },
    });
    fireEvent.change(inputs[6], {
      target: {
        value:
          "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform",
      },
    });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8080/create",
        expect.anything()
      );
      expect(toast.success).toHaveBeenCalledWith(mockResponse.message);
    });
  });

  it("handles form submission with error response", async () => {
    const { getAllByTestId, getByTestId } = render(<EmailForm />);
    let submitButton = getByTestId("submit-form--btn");
    let inputs = getAllByTestId("form-input");
    let textArea = getByTestId("text-area");

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({ message: "Error sending email" }),
    });

    // Simulate user input in the form
    fireEvent.change(inputs[0], {
      target: { value: "test@example.com" },
    });

    fireEvent.change(inputs[1], {
      target: { value: "Tu Voz, Nuestra Inspiración: Gana con WeUp" },
    });
    fireEvent.change(inputs[2], {
      target: { value: "Walber Melo" },
    });
    fireEvent.change(inputs[3], {
      target: { value: "Example Inc." },
    });
    fireEvent.change(textArea, {
      target: { value: "la gran capacidad de crecimiento de la empresa" },
    });
    fireEvent.change(inputs[4], {
      target: { value: "un bonus de 50€" },
    });
    fireEvent.change(inputs[5], {
      target: { value: "15-12-2023" },
    });
    fireEvent.change(inputs[6], {
      target: {
        value:
          "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform",
      },
    });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8080/create",
        expect.anything()
      );
      expect(toast.error).toHaveBeenCalledWith("Error sending email");
    });
  });

  it("updates input field on change", () => {
    const { getByPlaceholderText } = render(<EmailForm />);

    // Simulate changing the email input
    const emailInput = getByPlaceholderText(
      "exampleinc@email.com"
    ) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: { name: "email", value: "newemail@example.com" },
    });

    // Check if the input's value is updated
    expect(emailInput.value).toBe("newemail@example.com");
  });
});
