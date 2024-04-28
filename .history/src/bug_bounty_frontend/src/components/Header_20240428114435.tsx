import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6  ">
      <div className="flex items-center py-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          Bug Shield
        </a>
      </div>
    </div>
  );
};

export default Header;
