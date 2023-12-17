import { render, screen } from "@testing-library/react";

import LoginForm from "../ui/login/LoginForm.component";
import Home from "./Home";

import "@testing-library/jest-dom";

describe("Home component", () => {
  test("to have appropriate src Image", () => {
    const expectedSrc = expect.stringMatching(
      "https%3A%2F%2Fres.cloudinary.com%2Fdevgrow%2Fimage%2Fupload%2Fv1702038276%2Fweup%2Femail_template%2Fgeeeenl6ddm554s2pjy8.png&w=256&q=75"
    );
    render(<Home />);
    const image = screen.getByTestId("logo");
    expect(image).toHaveAttribute("src", expectedSrc);
  });

  test("render image with appropriate alt text", () => {
    render(<Home />);
    const image = screen.getByTestId("logo");
    expect(image).toHaveAttribute("alt", "Company logo");
  });

  //TODO: - Firebase auth/API key error
  // test("render Login component", () => {
  //   render(<LoginForm />);
  // });
});
