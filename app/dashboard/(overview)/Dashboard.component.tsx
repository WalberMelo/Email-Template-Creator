"use client";
import React from "react";

import { EmailDataProvider } from "@/context/EmailDataProvider";
import ProtectedRoute from "@/ui/login/ProtectedRoute";

import LogoutButton from "@/components/logout-button/LogoutButton.component";
import { EmailForm } from "../../ui/dashboard/EmailForm/EmailForm.component";
import EmailTemplate from "../../ui/dashboard/EmailTemplate/EmailTemplate.component";
import Header from "../../ui/header/Header.component";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <main className="bg-white">
        <Header data-testid="header" />
        <LogoutButton data-testid="logout-button" />
        <section className="grid grid-cols-2 gap-4 p-10">
          <EmailDataProvider>
            <EmailForm data-testid="email-form" />
            <EmailTemplate data-testid="email-template" />
          </EmailDataProvider>
        </section>
      </main>
    </ProtectedRoute>
  );
}
