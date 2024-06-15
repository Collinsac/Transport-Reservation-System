import React from "react";

const RegisterTripTwo = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex justify-between">
        <div>
          <input
            type="tel"
            className="flex-1 bg-gray-100 p-4 pl-6 rounded-md"
            placeholder="Number"
          />
        </div>
        <div className=" flex gap-2">
          <div className="h-10 w-10 rounded-full bg-orange-400"></div>
          <div className="h-10 w-10 rounded-full bg-orange-400"></div>
        </div>
      </div>
      <div className="p-10 bg-red-400 mt-10 rounded">warning !!!</div>
      <button className="bg-orange-500 mt-5  h-full py-3 px-8 rounded-lg text-lg font-medium text-white flex gap-2 items-center active:scale-95 justify-center">
        Print Ticket
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};

export default RegisterTripTwo;
