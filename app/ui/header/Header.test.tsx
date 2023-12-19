import { render } from "@testing-library/react";
import React from "react";

import Header from "./Header.component";

// Mock Next.js Image Component
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next.js Image stub"; // This is a simple placeholder
  },
}));

describe("Header component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });
});
