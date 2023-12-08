"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { POST } from "@/api/actions";
import { useEmailDataContext } from "@/context/EmailDataContext";

import { FormInput } from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";

export const EmailForm = () => {
  const { emailData, setEmailData } = useEmailDataContext();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  //TODO: Check toast ERROR
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const response = await POST(emailData);

      if (response.message === "Email sent successfully!") {
        setEmailSent(true);
        toast.success(`${response.message}`);
        form.reset();
      }
      {
        toast.error(`${response.message}`);
        console.log(response.message);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(`${e.message}`);
      }
    }
  };

  const handleOnchange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  return (
    <form
      method="post"
      className="bg-red-100 rounded-md shadow-md p-4  text-gray-700"
      onSubmit={handleSubmit}
    >
      {emailSent && <Toaster />}
      <h2 className="text-2xl font-bold">Email Template Generator</h2>
      {/*  Email */}
      <FormInput
        label="Email"
        placeholder="exampleinc@email.com"
        onChange={handleOnchange}
        type="email"
        name="email"
        required
      />

      {/*  Subject */}
      <FormInput
        label="Subject"
        value="Tu Voz, Nuestra Inspiración: Gana con WeUp"
        onChange={handleOnchange}
        type="text"
        name="subject"
        required
      />

      {/*  Name */}
      <FormInput
        label=" Person Name"
        placeholder="John Doe"
        onChange={handleOnchange}
        type="text"
        name="name"
        required
      />

      {/*  Company */}
      <FormInput
        label="Company"
        placeholder="Example Inc."
        onChange={handleOnchange}
        type="text"
        name="company"
        required
      />

      {/*  Message */}
      <FormInput
        label="About the company"
        placeholder="la gran capacidad de crecimiento de la empresa"
        type="textarea"
        onChange={handleOnchange}
        name="message"
        required
      />

      {/*  gift */}
      <FormInput
        label=" Gift to offer"
        type="text"
        onChange={handleOnchange}
        name="gift"
        placeholder="un bonus de 50€"
        required
      />

      {/*  date */}
      <FormInput
        label="Draw date"
        type="date"
        onChange={handleOnchange}
        name="date"
        required
      />

      {/*  link survey */}
      <FormInput
        value="https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform"
        label="Survey Link"
        type="text"
        onChange={handleOnchange}
        name="link"
        required
      />

      {/*  Button */}
      <div className="mt-4 flex justify-between pt-6">
        <SubmitButton />
      </div>
    </form>
  );
};
