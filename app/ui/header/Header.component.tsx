import React from "react";

import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="display:flex  mb-2 bg-gradient-to-r from-white to-red-500 ">
      <Image
        width={220}
        height={220}
        src="https://res.cloudinary.com/devwm/image/upload/v1702041217/Articles/MJML%20email/tmgqcttn1k2aot222stb.png"
        alt="Company logo"
        className="ml-10"
      ></Image>
    </div>
  );
};

export default Header;
