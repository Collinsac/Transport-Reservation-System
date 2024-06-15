import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/busLogo.png";

const Nav = () => {
  // this is a state  hook that will keep track of whether or not the  menu should be open or closed
  const [Display, setDisplay] = useState(true);
  useEffect(() => {
    // function to  handle the display of navbar on small screens
    window.innerWidth <= 768 ? setDisplay(false) : null;
  }, []);

  // function to  handle the display of navbar on small screens
  window.addEventListener("resize", () =>
    window.innerWidth >= 768 ? setDisplay(true) : ""
  );

  // function to click link and close menu for small devices like  mobile phones
  const Close = () => {
    window.innerWidth <= 768 ? setDisplay(false) : "";
  };

  return (
    // as you can see this is the nav bar  that will be displayed on all pages of the website including the landing page
    <div className="flex items-center max-w-[1350px] mx-auto md:px-5 text-gray-600 ">
      {/* here is the div that contains the logo */}
      <Link to={"/"} className="lg:flex-[1.3] w-52" onClick={Close}>
        <img src={logo} alt="Logo" className="w-[130px]" />
      </Link>
      <div
        className={`md:flex-[2] md:flex-row md:static md:bg-transparent z-50 flex-col flex md:justify-between md:items-center justify-between fixed top-0 bottom-0 bg-slate-100 right-0 w-[300px] ${
          Display ? "block" : "hidden"
        }`}
      >
        {/* middle div that containes the main menu */}
        <div className="md:flex md:border md:w-fit  p-2 md:rounded-3xl">
          <div
            className="md:hidden border-2 border-blue-400 w-fit p-2 rounded-md ml-auto"
            onClick={() => setDisplay(!Display)}
          >
            <i class="fa-solid fa-xmark fa-xl"></i>
          </div>

          <Link
            to="/bus"
            className="md:border-b-0 md:py-0 py-4 px-4 border-b-2 flex items-center gap-x-2"
            onClick={Close}
          >
            <i className="fa-solid fa-bus text-blue-500"></i>
            <p>Bus</p>
          </Link>
          <Link
            to="/train"
            className="md:border-l-2 md:border-b-0 md:py-0 py-4 px-4 border-b-2 flex items-center gap-x-2"
            onClick={Close}
          >
            <i className="fa-solid fa-train text-green-500"></i>
            <p>Train</p>
          </Link>
          <div className="md:border-l-2 md:border-b-0 md:py-0 py-4 px-4 border-b-2 flex items-center gap-x-2">
            <i className="fa-solid fa-earth-americas text-orange-500"></i>
            <p>Places</p>
          </div>
        </div>
        {/* right menu */}
        <div className="md:pb-0 md:justify-start pb-5 justify-center flex gap-5 ">
          <div>
            <p>English</p>
          </div>
          <div>
            <p>Help</p>
          </div>
          <div>
            <p>Sign in</p>
          </div>
        </div>
      </div>
      <div
        className="md:hidden border-2 border-blue-400 w-fit p-2 px-3 rounded-md mr-3 ml-auto"
        onClick={() => setDisplay(!Display)}
      >
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Nav;
