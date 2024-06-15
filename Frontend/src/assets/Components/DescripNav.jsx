import React from "react";
import NavigationComp from "./NavigationComp";

const DescripNav = () => {
  return (
    // this is the component that loads at your left on the screen in the buses page directly below the header of the buses page it contains thing like links
    <div className="w-80 h-fit sticky top-0 py-10 px-2 md:block hidden ">
      <h4 className="text-xs">On this page:</h4>
      <div>
        {/* this components here below represent the links you see hold control + click on them to see more (code) */}
        <NavigationComp />
        <NavigationComp />
        <NavigationComp />
        <NavigationComp />
      </div>
    </div>
  );
};

export default DescripNav;
