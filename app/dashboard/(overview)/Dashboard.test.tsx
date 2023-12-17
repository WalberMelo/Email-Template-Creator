import { render } from "@testing-library/react";
import React from "react";

import Dashboard from "./Dashboard.component";

describe("Dashboard component", () => {
  test("renders Dashboard with child components", () => {
    const { getByTestId } = render(<Dashboard />);

    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByTestId("logout-button")).toBeInTheDocument();
    expect(getByTestId("email-form")).toBeInTheDocument();
    expect(getByTestId("email-template")).toBeInTheDocument();
  });
});
