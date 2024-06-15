import React from "react";
import { useNavigate } from "react-router-dom";

const SearchDetailPageComponentTwo = () => {
  const nagivate = useNavigate()
  const BtnSection = () => {
    return (
      <div className="flex gap-4 justify-end">
        <div className="text-right">
          <p className="text-xl "> $15.87</p>
          <p className="text-xs font-medium">1 adult, Essential</p>
        </div>
        <div>
          <button className="bg-orange-500 h-full py-3 px-8 rounded-lg text-lg font-medium text-white flex gap-2 items-center active:scale-95" onClick={()=>nagivate('/RegisterTrip')}>
            Continue
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-[1200px] mx-auto px-4 text-gray-600 mt-8">
      {/* first horizontal div */}
      <div className="md:flex justify-between items-center ">
        <div>
          <p className="text-xl font-medium">Review ticket options</p>
        </div>
        <BtnSection />
      </div>
      {/* second horizontal div */}

      <div className="my-8 md:flex gap-20">
        <div className="p-7 border rounded-3xl flex-1 h-fit my-2 shadow">
          <p className="text-lg mb-4 font-medium">Trip selection</p>
          <div className="flex gap-6">
            <p className="text-sm font-medium">6:30am</p>
            <div className="border-l-2 pl-4 relative pb-5">
              <i class="fa-solid fa-van-shuttle absolute -left-2.5 top-0 text-blue-500 bg-white"></i>
              <p className="text-[10px] font-medium">SAN DIEGO</p>
              <p className="text-sm">Old Town San Diego</p>
              <a
                href="http://google.com"
                className="text-blue-500 underline text-sm font-medium"
              >
                Map{" "}
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
              </a>
              <div className="flex text-xs items-center gap-4 font-medium mt-3 hover:bg-blue-100 w-fit rounded-md px-3 py-2 relative">
                <i class="fa-regular fa-clock absolute top-2/4 -translate-y-2/4 -left-[22.5px] bg-white py-1"></i>
                <p>2h 20m,1 stop</p>
                <i class="fa-solid fa-caret-down fa-xs"></i>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-6">
            <p className="text-sm font-medium">6:30am</p>
            <div className="border-l-2 pl-4 relative pb-5">
              <i class="fa-solid fa-location-dot absolute -left-[7px] py-1 top-0 text-blue-500 bg-white"></i>
              
              <p className="text-[10px] font-medium">SAN DIEGO</p>
              <p className="text-sm">Old Town San Diego</p>
              <a
                href="http://google.com"
                className="text-blue-500 underline text-sm font-medium"
              >
                Map{" "}
                <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
              </a>
             
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="p-7 border rounded-3xl flex-1 text-xs my-2 shadow">
          <p className="text-lg mb-4 font-medium">Flexibility and conditions</p>
          <p className="font-medium mb-3 mt-2">Refunds and Exchanges</p>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-hand-holding-dollar fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-arrow-right-arrow-left fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <p className="font-medium mb-3 mt-2">Boarding Requirements</p>

          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-van-shuttle fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-regular fa-envelope fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>

          <p className="font-medium mb-3 mt-2">Luggage</p>

          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-suitcase fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-suitcase fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-suitcase fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
          <div className="flex gap-2 items-center my-0.5">
            <i class="fa-solid fa-suitcase fa-xs"></i>
            <p>Refund up to 24 hr. before departure - 90% refund</p>
          </div>
        </div>
      </div>
      <BtnSection />
    </div>
  );
};

export default SearchDetailPageComponentTwo;
