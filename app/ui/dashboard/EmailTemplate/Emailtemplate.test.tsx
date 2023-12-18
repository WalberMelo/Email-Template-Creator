import { render } from "@testing-library/react";

import {
  EmailDataContextProps,
  useEmailDataContext,
} from "@/context/EmailDataContext";

import EmailTemplate from "./EmailTemplate.component";
import { mockEmailData } from "./EmailTemplate.mock";

jest.mock("@/context/EmailDataContext", () => ({
  useEmailDataContext: jest.fn(),
}));

describe("Email template component", () => {
  it("renders with provided email data", () => {
    // Setup mock return value
    (useEmailDataContext as jest.Mock<EmailDataContextProps>).mockReturnValue({
      emailData: mockEmailData,
      setEmailData: jest.fn(),
    });

    const { getByText } = render(<EmailTemplate />);

    // Assertions to check if the text is rendered
    expect(
      getByText(/Tu Voz, Nuestra Inspiración: Gana con WeUp/)
    ).toBeInTheDocument();
    expect(getByText(/Walber Melo/)).toBeInTheDocument();
    expect(getByText(/Atos/)).toBeInTheDocument();
    expect(getByText(/gran capacidad motivacional/)).toBeInTheDocument();
    expect(getByText(/un mobile/)).toBeInTheDocument();
    expect(getByText(/12-01-2023/)).toBeInTheDocument();
    expect(getByText("walber.melo@gmail")).toBeInTheDocument();
  });

  it("render default values when email data is missing", () => {
    // Setup mock return value
    (useEmailDataContext as jest.Mock<EmailDataContextProps>).mockReturnValue({
      emailData: {
        email: "",
        subject: "Tu Voz, Nuestra Inspiración: Gana con WeUp",
        name: "",
        company: "",
        message: "",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform",
        gift: "",
        date: "",
      },
      setEmailData: jest.fn(),
    });

    const { getByText } = render(<EmailTemplate />);

    // Assertions to check if the text is rendered
    expect(
      getByText("Tu Voz, Nuestra Inspiración: Gana con WeUp")
    ).toBeInTheDocument();
    expect(getByText("[Person Name]")).toBeInTheDocument();
    expect(getByText("[Company]")).toBeInTheDocument();
    expect(getByText("[About the company]")).toBeInTheDocument();
    expect(getByText("[Gift to Offer]")).toBeInTheDocument();
    expect(getByText("[Draw date]")).toBeInTheDocument();
    expect(getByText("[Email]")).toBeInTheDocument();
  });
});
