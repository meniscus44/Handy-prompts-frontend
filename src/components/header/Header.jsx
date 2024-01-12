import React from "react";
import SearchLogo from "../../assets/search-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderItem } from "./HeaderItem";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[105px] w-[100%] z-10 font-Finlandica border-b border-[#393954] bg-[#2a2b44] border-solid shadow-[#00000026] shadow-md overflow-hidden">
      <div className="h-[64px] flex items-center justify-between w-[100%] py-[8px] px-[16px] max-w-[1400px] m-auto">
        <ul className="inline-block list-none m-0 p-0">
          <li
            className=" flex items-center list-none mr-[16px] text-[14px] font-bold rounded-md py-[8px] px-[16px] pl-0 cursor-pointer transition-300 relative"
            onClick={() => navigate("/")}
          >
            <img
              src={require("../../assets/title_logo.webp")}
              alt="Title Logo"
              className="h-[24px] w-[24px] mr-[8px] relative"
            />
            <span className="text-[20px] font-bold font-Finlandica">
              HandyPrompts
            </span>
          </li>
        </ul>
        <div className="flex w-[100%] h-[32px] relative mx-[16px]">
          <input
            type="text"
            placeholder="Search Prompts"
            maxLength={100}
            className="rounded-l-md h-[32px] w-[100%] whitespace-nowrap relative m-0 decoration-none break-normal text-wrap  border-none outline-none cursor-text p-[8px] text-white bg-[#454566] text-[14px]"
          />
          <div className="rounded-r-md flex items-center justify-center h-[32px] w-[48px] p-0 opacity-[1] transition duration-300 bg-[#454566]">
            <img
              src={SearchLogo}
              alt="Search Icon"
              className=" cursor-pointer opacity-[0.8] transition duration-300 w-[24px] h-[24px] filter invert hover:opacity-[1]"
            />
          </div>
        </div>
        <ul className="flex items-center justify-evenly list-none m-0 p-0">
          <NavLink
            to={"/marketplace"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#454566] mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
                : "mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
            }
          >
            <li>Marketplace</li>
          </NavLink>
          <NavLink
            to={"/generate"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#454566] mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
                : "mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
            }
          >
            <li>Generate</li>
          </NavLink>
          <NavLink
            to={"/hire"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#454566] mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
                : "mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
            }
          >
            <li>Hire</li>
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#454566] mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
                : "mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
            }
          >
            <li>Login</li>
          </NavLink>
          <NavLink
            to={"/sell"}
            className={({ isActive }) =>
              isActive
                ? "bg-[#454566] mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
                : "mr-[16px] text-[14px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566]"
            }
          >
            <li>Sell</li>
          </NavLink>
        </ul>
      </div>
      <div className="pt-0 pr-[16px] pb-[8px] relative flex items-center justify-between w-[100%] m-auto">
        <ul className="list-none m-0 p-0 flex items-center justify-evenly w-[100%]">
          {HeaderItem.map((item, key) => {
            return (
              <li
                path={item.link}
                onClick={() => navigate(item.link)}
                className="mr-[16px] text-[12px] font-medium py-[8px] px-[16px] cursor-pointer transition duration-300 relative rounded-md hover:bg-[#454566] flex items-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="filter invert h-[16px] w-[16px] mr-[8px]"
                />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
