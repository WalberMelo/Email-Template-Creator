"use client";
import React from "react";

import ProtectedRoute from "@/app/ui/login/ProtectedRoute";
import { EmailDataProvider } from "@/context/EmailDataProvider";

import LogoutButton from "@/components/LogoutButton";
import { EmailForm } from "../ui/dashboard/EmailForm/EmailForm.component";
import EmailTemplate from "../ui/dashboard/EmailTemplate/EmailTemplate.component";
import Header from "../ui/header/Header.component";

export default function DashboardContent() {
  return (
    <ProtectedRoute>
      <main className="bg-white">
        <Header />
        <LogoutButton />
        <section className="grid grid-cols-2 gap-4 p-10">
          <EmailDataProvider>
            <EmailForm />
            <EmailTemplate />
          </EmailDataProvider>
        </section>
      </main>
    </ProtectedRoute>
  );
}
