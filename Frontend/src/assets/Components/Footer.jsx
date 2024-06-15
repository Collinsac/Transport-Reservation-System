import React from "react";

const Footer = () => {
  return (
    // this is the footer
    <div className="md:py-8 py-5 px-4 border-t  mt-20">
        <div className="md:flex max-w-[1300px] mx-auto  items-center">
        <p className="flex-1 text-blue-400 text-xs font-light">© 2024 Busbud Inc., All rights reserved</p>
        <div className="flex-1 flex md:justify-center gap-4 text-xs font-medium text-gray-500 items-center">
          <p>Terms of use</p>
          <p>Privacy</p>
          <p>Refund policy</p>
        </div>
        <div className="flex-1 "></div>
      </div>
    </div>
  );
};

export default Footer;
