import React, { useState } from "react";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./utils/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const toggleNavigation = () => {
    openNavigation ? setOpenNavigation(false) : setOpenNavigation(true);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }  `}
    >
      <div className="flex  items-center py-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] font-extrabold xl:mr-8" href="#hero">
          BugShield
        </a>
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div
            className={`relative z-2 flex ${
              openNavigation && "gap-[5rem] mt-4 w-full"
            } flex-col items-center justify-center m-auto lg:flex-row`}
          >
            {navigation.map((item) => (
              <a
                className={`block relative font-code text-sm lg:font-semibold  text-color-7 hover:text-n-1 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6  lg:mr-0.25 lg:text-xs ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 `}
                key={item.id}
                href={item.url}
                onClick={() => handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-color-7 transistion-colors hover:text-n-1 lg:block"
        >
          Login
        </a>
        <Button className="hidden lg:flex " href="#login" white="">
          Sign in
        </Button>

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
