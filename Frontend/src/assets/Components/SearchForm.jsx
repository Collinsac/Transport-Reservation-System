import React from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigation = useNavigate();
  const submitData = () => {
    navigation("/searchDetails/1");
    toast.success("Search success");
  };
  return (
    // this is the component that contains form used to search if a trip is available or not  and a glass-like div below the form. it is found in the header of the landing page
    <>
      {/* here is the actual form itself */}
      <div className="lg:bg-white lg:flex lg:overflow-hidden lg:shadow-md lg:rounded-md  items-center gap-x-2">
        <div className="lg:bg-transparent lg:rounded-none lg:shadow-none lg:my-0 sm:static relative rounded-md shadow-md my-2 bg-white flex-[2] p-2 sm:flex items-center gap-x-2">
          <div className="flex-1 rounded-md border border-transparent hover:border-gray-200 p-0.5">
            <p className="text-[10px]">ORIGIN</p>
            <input
              type="text"
              className="w-full mt-0.5 outline-none py-1 px-2"
            />
          </div>
          <div className="sm:static sm:top-0 sm:translate-y-0 p-0.5 bg-white rotate-45 w-7 h-7 flex items-center absolute top-2/4 -translate-y-2/4 right-8 justify-center rounded-md border">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
          <div className="sm:border-none border-t mt-0.5 pt-0.5 flex-1">
            <div className="flex-1 rounded-md border border-transparent hover:border-gray-200 p-0.5">
              <p className="text-[10px]">DESTINATION</p>
              <input
                type="text"
                className="w-full mt-0.5 outline-none py-1 px-2"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="lg:bg-transparent lg:border-l lg:shadow-none lg:rounded-none lg:my-0 bg-white shadow-md rounded-md my-2 flex-1 flex p-2 gap-x-2 max-[414px]:block ">
          <div className="flex-1">
            <p className="text-[10px]">DATE</p>
            <input
              type="date"
              className="w-full min-w-[0px] mt-0.5 outline-none py-1 px-2 text-base font-serif font-medium"
            />
          </div>
          <div className="flex-1 border-l min-[414px]:pl-2 max-[414px]:border-l-0 max-[414px]:border-t">
            <p className="text-[10px]">RETURN DATE</p>
            <input
              type="date"
              className="w-full min-w-[0px] mt-0.5 outline-none py-1 px-2 text-base font-serif font-medium"
            />
          </div>
        </div>
        {/*  */}
        <div className="lg:bg-transparent lg:rounded-none lg:shadow-none lg:my-0 bg-white rounded-md shadow-md my-2 flex-1 p-2 border-l">
          <div className="rounded-md border border-transparent hover:border-gray-200 p-0.5">
            <p className="text-[10px]">PASSANGERS</p>
            <input
              type="number"
              className="w-full mt-0.5 outline-none py-1 px-2"
            />
          </div>
        </div>
        <button
          className="lg:w-fit lg:rounded-none lg:py-0 bg-blue-500 text-white text-base font-medium self-stretch px-10 py-4 active:scale-95 w-full rounded-md"
          onClick={submitData}
        >
          Search
        </button>
      </div>
      {/*  */}
    </>
  );
};

export default SearchForm;
