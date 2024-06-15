import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import back from "../img/busBack.png";
import trust from "../img/trust.svg";
import serving from "../img/serving.svg";
import customer from "../img/customer.svg";
import SearchForm from "./SearchForm";
import { useLocation } from "react-router-dom";
import Data from "../Data";
const Header = () => {
  const location = useLocation();
  const [Info, setInfo] = useState(null);

  useEffect(() => {
    location.pathname === "/"
      ? setInfo(Data.Header.Home)
      : location.pathname === "/bus"
      ? setInfo(Data.Header.Bus)
      : setInfo(Data.Header.Train);
  }, [location.pathname]);

  return (
    // this is the header of the landing page it contains the nav bar ...etc it is the the first thing you see when you vist the landing page
    <div
      style={{
        background: `url(${back})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen text-gray-600 pb-5"
    >
      {/* this is the nav of the landing page here. you can hold control and click to view its code  */}
      <Nav />
      {/* this div contains some titles as you can see the div below */}
      <div className="max-w-[1350px] mx-auto pt-10 px-3 sm:px-10">
        <h1 className="sm:text-6xl text-4xl font-semibold max-w-[700px]">
          {Info}
        </h1>
        <h2 className="md:mt-10 mt-5 font-semibold">
          Easily compare and book your next trip with Busbud
        </h2>
        {/*  */}

        {/* here below is the search form component hold control and click on it to see more details (code) */}
        <div className="lg:mt-28 mt-8 md:mt-16 ">
          <SearchForm />
        </div>

        {/*  */}
        {/* here is the glass-like div  */}
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg lg:flex gap-2 mt-12 ">
          <div className="flex-1 p-1 flex gap-2 text-sm">
            <img src={trust} alt="" />
            <p className="pt-1">
              Trusted by 65M+ travelers every year looking for bus and train
              tickets
            </p>
          </div>
          <div className="flex-1 p-1 flex gap-2 text-sm">
            <img src={serving} alt="" />
            <p className="pt-1">
              Serving 2M+ bus and train routes in more than 80 countries
            </p>
          </div>
          <div className="flex-1 p-1 flex gap-2 text-sm">
            <img src={customer} alt="" />
            <p className="pt-1">
              Dedicated customer service from booking to travel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
