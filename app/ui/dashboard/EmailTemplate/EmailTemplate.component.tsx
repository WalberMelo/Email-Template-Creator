import React from "react";

import { useEmailDataContext } from "@/context/EmailDataContext";

import { EmailTemplateProps } from "./EmailTemplate.interface";

const EmailTemplate: React.FC<EmailTemplateProps> = () => {
  const { emailData } = useEmailDataContext();

  return (
    <div className="max-w-2xl mx-auto">
      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-lg text-bold mb-2 flex items-center justify-center">
        Preview
      </p>
      <div className="text-black pl-4 pr-4">
        <p className="border-b-2 mb-2">
          <strong>To: </strong>
          {`${emailData?.email || "[Email]"}`}
        </p>
        <p className="border-b-2">
          <strong>Subject: </strong>
          {`${emailData?.subject}`}
        </p>
      </div>

      <div className="bg-white rounded-md shadow-md p-8 text-gray-700">
        {/* Header section */}
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/devwm/image/upload/v1702041211/Articles/MJML%20email/c9cuclgaag3razkqa8eg.png"
            alt="Company Logo"
            className="w-32 h-auto"
          />
        </div>
        <hr className="my-4 border-red-600" />

        {/* Content based on EmailData */}
        <p className="font-bold mb-4">
          Hola <strong>{emailData?.name || "[Person Name]"}</strong>
          {},
        </p>
        <p className="mb-2">
          Espero que todo vaya bien. He estado siguiendo tu trabajo en{" "}
          <strong>{emailData?.company || "[Company]"}</strong> y estoy
          impresionado por{" "}
          <strong>{emailData?.message || "[About the company]"}</strong>.
        </p>
        <p>
          Mi equipo y yo estamos trabajando en un proyecto de marketing
          emocionante y creemos que tu experiencia sería invaluable para
          nosotros. Nos encantaría si pudieras dedicar unos minutos para
          completar esta breve encuesta.
        </p>

        {/* Button */}
        <div className="display: flex justify-center mt-5 mb-5">
          <a
            href={emailData?.link}
            className="inline-block bg-teal-900 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Encuesta
          </a>
        </div>

        {/* Additional dynamic content */}
        <p className="py-4">
          Como agradecimiento, no solo tendrás la oportunidad de ganar{" "}
          <strong>{emailData?.gift || "[Gift to Offer]"}</strong>, sino que
          también estaríamos encantados de compartir los hallazgos clave del
          estudio contigo.
        </p>
        <p>
          El sorteo se realizará el día{" "}
          <strong>{emailData?.date || "[Draw date]"}</strong>, y nos pondremos
          en contacto con el ganador directamente.
        </p>

        {/* Signature */}
        <p className="py-4">
          Gracias por considerar nuestra petición. Estamos ansiosos por escuchar
          tu valiosa opinión.
          <br />
          <br />
          Saludos cordiales,
        </p>
      </div>

      {/* Footer section */}
      <div className="text-center mt-8 text-sm text-gray-500">
        Si tienes alguna pregunta con respecto a este correo electrónico o
        cualquier consulta relacionada, puedes contactar con nosotros a través
        de <a href="mailto:contact@weup.ai">contact@weup.ai</a>
        <br />
        &copy; WeUp, All Rights Reserved.
      </div>
    </div>
  );
};

export default EmailTemplate;
