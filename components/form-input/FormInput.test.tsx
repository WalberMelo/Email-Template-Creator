import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { FormInput } from "./FormInput.component";

describe("FormInput component", () => {
  it("renders input field with given props", () => {
    const mockChange = jest.fn();
    const { getByTestId } = render(
      <FormInput
        label="Test Label"
        type="text"
        name="testInput"
        required={true}
        onChange={mockChange}
      />
    );

    const inputElement = getByTestId("form-input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Test Value" } });

    expect(inputElement.value).toBe("Test Value");
    expect(inputElement.type).toBe("text");
    expect(inputElement.name).toBe("testInput");
    expect(inputElement.required).toBe(true);

    // Check if the onChange function was called
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  // it("renders textarea field with given props", () => {
  //   const mockChange = jest.fn();
  //   const { getByLabelText } = render(
  //     <FormInput
  //       label="Test Label"
  //       type="textarea"
  //       name="testTextarea"
  //       required={true}
  //       onChange={mockChange}
  //     />
  //   );

  //   const textareaElement = getByLabelText("Test Label") as HTMLTextAreaElement;

  //   fireEvent.change(textareaElement, {
  //     target: { value: "Test Textarea Value" },
  //   });

  //   expect(textareaElement).toBeInTheDocument();
  //   expect(textareaElement.value).toBe("Test Textarea Value");
  //   expect(textareaElement.tagName).toBe("TEXTAREA");
  //   expect(textareaElement.name).toBe("testTextarea");
  //   expect(textareaElement.required).toBe(true);

  //   // Check if the onChange function was called
  //   expect(mockChange).toHaveBeenCalledTimes(1);
  // });
});
