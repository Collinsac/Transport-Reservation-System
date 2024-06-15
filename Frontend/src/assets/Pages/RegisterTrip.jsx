import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";

const RegisterTrip = () => {
  return (
    <>
      <div className="bg-blue-100 pb-4 mb-10">
        <Nav />
      </div>

      <Outlet />
     
    </>
  );
};

export default RegisterTrip;
