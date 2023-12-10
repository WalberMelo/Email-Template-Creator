import React from "react";

import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="display:flex  mb-2 bg-gradient-to-r from-white to-red-500 ">
      <Image
        width={220}
        height={220}
        src="https://res.cloudinary.com/devgrow/image/upload/v1702038549/weup/email_template/xpcirhdm1immbv1k9lhe.png"
        alt="Company logo"
        className="ml-10"
      ></Image>
    </div>
  );
};

export default Header;
