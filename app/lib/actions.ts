import { EmailFormProps } from "../ui/dashboard/EmailForm/EmailForm.interface";

export async function POST(props: EmailFormProps) {
  const res = await fetch("http://localhost:8080/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
  const data = await res.json();
  return data;
}
