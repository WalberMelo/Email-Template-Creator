"use client";

import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

import LoginForm from "../ui/login/LoginForm.component";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const firebaseUserKey = `firebase:authUser:${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}:[DEFAULT]`;
    const firebaseUserData = localStorage.getItem(firebaseUserKey);
    if (firebaseUserData) {
      console.log("Firebase user data found in local storage.");
      router.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Head>
        <title>WeUp - Email engine</title>
        <meta name="description" content="System to delivery custom emails" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col items-center  px-4">
        <Image
          data-testid="logo"
          priority
          width={120}
          height={120}
          src="https://res.cloudinary.com/devgrow/image/upload/v1702038276/weup/email_template/geeeenl6ddm554s2pjy8.png"
          alt="Company logo"
          className="pb-5"
        ></Image>
        <LoginForm />
      </main>
    </>
  );
}
