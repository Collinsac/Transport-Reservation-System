import React from "react";
import {  useNavigate } from "react-router-dom";

const ResgisterTripOne = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="max-w-[700px] rounded-lg shadow-md  border text-gray-800">
        <div className="p-4 border-b">
          <p className="font-medium ">Booking Information</p>
        </div>
        <div className="p-5">
          <div className="flex sm:flex-row flex-col gap-3 my-3">
            <input
              type="text"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Name"
            />
            <input
              type="tel"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Phone"
            />
          </div>
          {/*  */}
          <div className="flex sm:flex-row flex-col gap-3 my-3">
            <input
              type="text"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Route"
            />
            <input
              type="number"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Bus number"
            />
          </div>
          {/*  */}
          <div className="flex sm:flex-row flex-col gap-3 my-3">
            <input
              type="text"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Agency name"
            />
            <input
              type="text"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Departure date"
            />
          </div>
          {/*  */}
          <div className="flex sm:flex-row flex-col gap-3 my-3">
            <input
              type="text"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Departure time"
            />
            <input
              type="number"
              className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
              placeholder="Booking Timing"
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-orange-500 mt-5  h-full py-3 px-8 rounded-lg text-lg font-medium text-white flex gap-2 items-center active:scale-95 justify-center"
              onClick={() => navigate("/RegisterTrip/Payment")}
            >
              Confirm
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>

            {/*  */}
            <button className="bg-orange-500 mt-5  h-full py-3 px-8 rounded-lg text-lg font-medium text-white flex gap-2 items-center active:scale-95 justify-center" onClick={()=>navigate(-1)}>
              Update
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResgisterTripOne;
