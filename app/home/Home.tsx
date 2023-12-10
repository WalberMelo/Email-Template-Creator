"use client";

import Head from "next/head";
import Image from "next/image";

import LoginForm from "../ui/login/LoginForm.component";

export default function Home() {
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
