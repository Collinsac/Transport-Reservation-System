import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AgencyDashboard = () => {
  const [Menu, setMenu] = useState(false);

  const HandleDisplay = () => {
    setMenu(!Menu);
  };
  // this is the admin dashboard
  return (
    <div className="min-h-screen flex text-gray-800">
      <div
        className={`flex-1 ${
          Menu ? "max-w-[300px]" : "max-w-16"
        }  bg-blue-400 overflow-hidden`}
      >
        <div className="flex border-b py-[17px] px-6 items-center gap-6 text-xl font-medium">
          <i class="fa-solid fa-user-tie"></i>
          <p>Agency</p>
        </div>

        <div className="mt-6 ">
          <div className="flex py-[17px] items-center gap-2 text-base font-medium bg-gray-100">
            <div className=" w-16 h-10 flex items-center justify-center">
              <i class="fa-solid fa-gauge-high"></i>
            </div>

            <p className={`${Menu ? "block" : "hidden"}`}>Home</p>
          </div>

          <div className="flex py-[17px] items-center gap-2 text-base font-medium">
            <div className=" w-16 h-10 flex items-center justify-center">
              <i class="fa-solid fa-users"></i>
            </div>

            <p className={`${Menu ? "block" : "hidden"}`}>Users</p>
          </div>

          <div className="flex py-[17px] items-center gap-2 text-base font-medium">
            <div className=" w-16 h-10 flex items-center justify-center">
              <i class="fa-solid fa-calendar-check"></i>
            </div>

            <p className={`${Menu ? "block" : "hidden"}`}>Agnecy</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-100">
        <div className="bg-white shadow flex items-center p-5 gap-5">
          <i
            class="fa-solid fa-bars cursor-pointer"
            onClick={HandleDisplay}
          ></i>
          <p>Online Ticket Reservation System</p>
        </div>
        <div className="py-4 px-6">
          <div className="flex items-center justify-between">
            <p className="font-medium text-xl">Admin Dashboard</p>
            <button className="bg-blue-400 py-3 px-5 rounded-md text-white active:scale-95">Logout</button>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;
