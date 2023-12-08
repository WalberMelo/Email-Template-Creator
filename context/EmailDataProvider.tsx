"use client";
import React, { ReactNode, useState } from "react";

import { EmailDataProps } from "@/app/ui/dashboard/EmailTemplate/EmailTemplate.component";
import { EmailDataContext, initialEmailData } from "./EmailDataContext";

export const EmailDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [emailData, setEmailData] = useState<EmailDataProps>(initialEmailData);

  return (
    <EmailDataContext.Provider value={{ emailData, setEmailData }}>
      {children}
    </EmailDataContext.Provider>
  );
};
