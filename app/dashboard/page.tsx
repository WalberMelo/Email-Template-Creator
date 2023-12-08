"use client";

import { EmailDataProvider } from "@/context/EmailDataProvider";

import { EmailForm } from "../ui/dashboard/EmailForm/EmailForm.component";
import EmailTemplate from "../ui/dashboard/EmailTemplate/EmailTemplate.component";
import Header from "../ui/header/Header.component";

export default async function Dashboard() {
  return (
    <main className="bg-white">
      <Header />
      <section className="grid grid-cols-2 gap-4 p-10">
        <EmailDataProvider>
          <EmailForm />
          <EmailTemplate />
        </EmailDataProvider>
      </section>
    </main>
  );
}
