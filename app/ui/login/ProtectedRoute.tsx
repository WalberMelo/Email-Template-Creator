"use client";
import React, { useEffect } from "react";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const firebaseUserKey = `firebase:authUser:${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}:[DEFAULT]`;
    const firebaseUserData = localStorage.getItem(firebaseUserKey);
    console.log(firebaseUserData);

    if (!user.uid || !firebaseUserData) {
      router.push("/");
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
