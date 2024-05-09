import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  const menus = [
    { name: "Home", link: "/home", icon: MdDashboard },
    {
      name: "Bounties",
      link: "",
      icon: MdVideogameAsset,
      subMenu: [
        { name: "Prepaid", link: "/prepaid-tournament" },
        { name: "CrowdFunded", link: "/active-tournament" },
      ],
    },
    {
      name: "Teams",
      link: "/",
      icon: HiChatBubbleOvalLeft,
    },
  ];

  return (
    <aside
      className={` hidden lg:top-16 lg:h-[calc(100vh-theme(space.16))] lg:flex flex-col  ${
        open ? "w-60" : "w-[4.5rem]"
      } left-0 border-y-[transparent] border-l-[transparent]  border-r-white/10 border border-solid transition-[width,transform] duration-300 ease-in-out  fixed top-0 h-full `}
    >
      <div className="py-3 flex justify-end ">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer text-primary-second"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-8 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <div key={i} className="group">
            <div
              className="flex items-center  cursor-pointer text-sm gap-3.5 font-medium p-2 hover:bg-white/10 rounded-md"
              onClick={() => {
                !menu.subMenu
                  ? navigate(`${menu.link}`)
                  : setOpenSubMenu(!openSubMenu);
              }}
            >
              <div
                className={`${!open ? "ml-[1rem]" : "ml-[1.5rem]"}`}
                onClick={() => setOpen(!open)}
              >
                {React.createElement(menu.icon, {
                  size: "20",
                  color: "#fff",
                })}
              </div>
              <h3
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`text-[#fff]  whitespace-pre ${
                  !open && "opacity-0 translate-x-10 overflow-hidden "
                } duration-300`}
              >
                {menu.name}
              </h3>
              <h3
                style={{ color: "#fff" }}
                className={` ${
                  open && "hidden "
                } absolute  bg-white/10 font-semibold whitespace-pre text-[#ffffff], rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-[6rem] group-hover:duration-300 group-hover:w-fit `}
              >
                {menu.name}
              </h3>
              {menu.subMenu && (
                <FaAngleDown
                  className={`flex justify-end text-white ${
                    openSubMenu && "rotate-180"
                  } `}
                />
              )}
            </div>
            {menu.subMenu && openSubMenu && open && (
              <ul className="flex flex-col ml-[3rem] z-50  rounded-md ">
                {menu.subMenu.map((value, index) => (
                  <NavLink
                    to={value.link}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "my-2 hover:bg-[#bfa9c27e] z-50 rounded-md p-2  text-white text-sm flex font-bold  items-center"
                        : "my-2 hover:bg-[#bfa9c27e] z-50 rounded-md p-2 text-white text-sm flex font-bold items-center"
                    }
                  >
                    {value.name}
                  </NavLink>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
