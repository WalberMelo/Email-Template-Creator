import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { toast } from "react-toastify";

import { EmailForm } from "./EmailForm.component";
import { mockPost, useEmailDataContextMock } from "./EmailForm.mock";

describe("EmailForm component", () => {
  const { emailData, setEmailData } = useEmailDataContextMock();
  const { getAllByTestId, getByTestId } = render(<EmailForm />);
  const submitButton = getByTestId("submit-form--btn");

  it("handles successful form submission", async () => {
    const inputs = getAllByTestId("form-input");
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
    fireEvent.change(inputs[4], {
      target: { value: "la gran capacidad de crecimiento de la empresa" },
    });
    fireEvent.change(inputs[5], {
      target: { value: "un bonus de 50€" },
    });
    fireEvent.change(inputs[6], {
      target: { value: "15-12-2023" },
    });
    // fireEvent.change(inputs[7], {
    //   target: {
    //     value:
    //       "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform",
    //   },
    // });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        "Something went wrong on the server!"
      );
    });
  });

  it("calls handleOnchange function on input change", () => {
    const emailInput = getByTestId("email-input");

    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });

    expect(setEmailData).toHaveBeenCalledWith(
      expect.objectContaining({ email: "test@example.com" })
    );
  });
  it("handles form submission failure", async () => {
    mockPost({ message: "Error sending email!" });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalled();
      expect(toast.error).not.toHaveBeenCalled();
    });
  });
});
