import React from "react";
import DescripNav from "./DescripNav";
import DescriptionContent from "./DescriptionContent";

const DescripSection = () => {
  return (
    // this is the container directly below the buses page header that cantains two parts
    <div className="flex gap-20 max-w-[1300px] md:px-10 px-5 mx-auto text-gray-500">
      <DescripNav />
      <DescriptionContent />
    </div>
  );
};

export default DescripSection;
