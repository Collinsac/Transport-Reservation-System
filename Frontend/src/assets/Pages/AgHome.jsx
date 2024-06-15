import React from "react";

const AgHome = () => {
  const Card = () => {
    return (
      <div className="bg-white flex rounded-md overflow-hidden shadow-md">
        <div className="p-1 bg-blue-400"></div>
        <div className="flex-1 p-3">
            <div className="flex justify-between">
                <div className="bg-blue-400 px-4 py-2 rounded text-white">Bookings</div>
                <div className="p-1 bg-red-500 h-fit"></div>
            </div>
            <p className="font-semibold my-3">Total Bookings</p>
            <p>8</p>
            <p className="text-blue-400 text-right text-sm mt-4">View more</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 my-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AgHome;
