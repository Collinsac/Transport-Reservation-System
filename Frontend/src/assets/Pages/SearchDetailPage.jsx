import React from "react";
import Nav from "../Components/Nav";
import SearchForm from "../Components/SearchForm";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
const SearchDetailPage = () => {
  return (
    <>
      <div className="bg-blue-100">
        <Nav />
        <div className="mx-auto max-w-[1300px] mt-4 text-gray-500 px-5 pb-10">
          <SearchForm />
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default SearchDetailPage;
