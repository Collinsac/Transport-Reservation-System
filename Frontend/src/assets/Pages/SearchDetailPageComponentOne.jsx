import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data";

const SearchDetailPageComponentOne = () => {
  const PlaceCard = () => {
    return (
      <Link to={"/searchDetails/1/douala"}>
        <div className="sm:p-5 p-3 border rounded-3xl my-2 shadow-md cursor-pointer">
          <div className="sm:flex justify-between sm:mb-8 mb-4 relative">
            <div className="text-xs flex-1">
              <p className="font-light">OPERATED BY</p>
              <p className="font-semibold mt-1">Royal Link Trans</p>
            </div>

            <div className="flex justify-between flex-[1.5] gap-x-5 sm:mt-0 mt-3">
              <div>
                <p className="sm:text-2xl sm:font-normal font-medium">7:00am</p>
                <p className="text-sm">Aliosu (ABC)</p>
                <p className="text-xs font-medium">PORT HARCOURT</p>
              </div>
              <div>
                <i class="fa-sharp fa-solid fa-arrow-right-long text-2xl"></i>
              </div>
              <div>
                <p className="sm:text-2xl sm:font-normal font-medium">5:00pm</p>
                <p className="text-sm">Douala</p>
                <p className="text-xs font-medium">IBADAN</p>
              </div>
            </div>

            <div className="flex gap-2 flex-1 justify-end sm:static absolute top-0 right-0">
              <i class="fa-solid fa-wifi"></i>
              <i class="fa-solid fa-person"></i>
              <i class="fa-solid fa-plug"></i>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <i class="fa-solid fa-bus-simple"></i>
                <p className="text-sm">Shuttle</p>
              </div>
              <div className="flex gap-2 items-center">
                <i class="fa-solid fa-clock"></i>
                <p className="text-sm">10h</p>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 p-1.5 px-5 rounded-3xl flex gap-3 items-center text-white active:scale-95">
                <p className="sm:text-base text-sm font-medium">$16</p>
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  const DateCards = (props) => {
    return (
      <div className="flex-1 p-2 hover:bg-white rounded-t-xl before:bottom-0 after:-bottom-0 relative bf cursor-pointer ">
        <div className="flex items-center flex-col justify-center border h-full rounded-xl p-3 text-gray-500">
          <p className="text-xs font-medium">{props.day}</p>
          <p>{ props.num? props.num :"_"}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-blue-100">
        <div className="mx-auto max-w-[1300px] text-gray-500 px-5">
          <div className="md:px-10 px-5  flex md:overflow-visible overflow-scroll no-scroll">
            {Data.Date.map((item, index) => {
              return <DateCards {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="border-b p-4">
        <div className="max-w-[1200px] mx-auto p-1 flex justify-between items-center text-gray-600">
          <div>
            <p className="text-[10px] font-medium">SELECT YOUR TRIP</p>
            <p className="font-semibold">3 results</p>
          </div>
          <div className="md:flex gap-4 hidden items-center text-sm">
            <p className="text-[10px] font-medium">SORT BY</p>
            <p>Cheapest</p>
            <p>Fastest</p>
            <p>Earliest</p>
            <p>Latest</p>
          </div>
        </div>
      </div>
      <div className="py-5 flex bg-re-600 max-w-[1200px] mx-auto gap-10 text-gray-600">
        <div className="p-8 bg-orang-500 flex-1 lg:max-w-[400px] max-w-[200px] hidden md:block">
          {/*  */}

          <div className="border-b py-4">
            <p className="font-medium text-xs uppercase">Quick filters</p>
            <div className="mt-4 ml-2">
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
              {/*  */}
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
              {/*  */}
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="border-b py-4">
            <p className="font-medium text-xs uppercase mt-3">Departure Time</p>
            <div className="mt-4 ml-2">
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
              {/*  */}
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
              {/*  */}
              <div className="flex gap-1 text-sm my-1">
                <input type="checkbox" />
                <p>E-ticket only (3)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-8 p-4 bg-blu-500 flex-1 text-gray-500">
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>
    </div>
  );
};

export default SearchDetailPageComponentOne;
