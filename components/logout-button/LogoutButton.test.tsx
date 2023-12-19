import { fireEvent, render } from "@testing-library/react";
import React from "react";

import * as AuthContext from "@/context/AuthContext";
import * as NextRouter from "next/router";

import LogoutButton from "./LogoutButton.component";

import "@testing-library/jest-dom";

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({
    // Mock other Firebase auth functions as needed
  })),
  // Add other Firebase auth exports you use
}));

describe("LogoutButton component", () => {
  it("calls logOut and redirects to the home page on click", () => {
    // Mock useAuth hook
    const logOutMock = jest.fn();
    jest.spyOn(AuthContext, "useAuth").mockReturnValue({ logOut: logOutMock });

    // Simplified mock useRouter hook
    const pushMock = jest.fn();
    jest.spyOn(NextRouter, "useRouter").mockReturnValue({
      push: pushMock,
      route: "",
      pathname: "",
      query: {},
      asPath: "",
      isFallback: false,
      basePath: "",
      isLocaleDomain: false,
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isReady: false,
      isPreview: false,
    });

    // Render the component
    const { getByText } = render(<LogoutButton />);

    // Simulate button click
    fireEvent.click(getByText("Logout"));

    // Assert logOut and push were called
    expect(logOutMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
