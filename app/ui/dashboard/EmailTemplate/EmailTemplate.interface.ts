interface EmailDataProps {
  email: string;
  subject: string;
  name: string;
  company: string;
  message: string;
  link: string;
  gift: string;
  date: string;
}

export interface EmailTemplateProps {
  emailData?: EmailDataProps;
}
