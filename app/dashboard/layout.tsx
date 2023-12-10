"use client";
import React, { ReactNode } from "react";

import { AuthContextProvider } from "@/context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
