import React, { createContext, useContext } from "react";

import { EmailDataProps } from "@/app/ui/dashboard/EmailTemplate/EmailTemplate.component";

interface EmailDataContextProps {
  emailData: EmailDataProps;
  setEmailData: React.Dispatch<React.SetStateAction<EmailDataProps>>;
}

export const initialEmailData: EmailDataProps = {
  email: "",
  subject: "Tu Voz, Nuestra Inspiración: Gana con WeUp",
  name: "",
  company: "",
  message: "",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform",
  gift: "",
  date: "",
};

export const EmailDataContext = createContext<EmailDataContextProps>({
  emailData: initialEmailData,
  setEmailData: () => {},
});

export const useEmailDataContext = () => useContext(EmailDataContext);
