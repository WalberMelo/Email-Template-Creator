"use client";
import { AuthContextProvider } from "@/context/AuthContext";

import Home from "./home/Home";

export default function App() {
  return (
    <AuthContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-white to-red-400 ">
        <Home />
      </main>
    </AuthContextProvider>
  );
}
