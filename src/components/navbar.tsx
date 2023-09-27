import React from "react";

import { CgProfile } from "react-icons/cg";
import { PiShoppingCart, PiHeartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

import LOGO from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[8vh] bg-white flex md:flex-col-reverse md:h-auto md:justify-start items-center justify-between rounded-md shadow-md">
      <div className="w-2/5 md:w-full p-2">
        <ul className="flex flex-row justify-around">
          <li className="text-black">
            {/* <h1 className="font-bold cursor-pointer p-2"> */}
            <img
              src={LOGO}
              alt="shop logo."
              className="w-[50px] object-cover shadow-md cursor-pointer hover:scale-110"
            />
            {/* </h1> */}
          </li>
          <li className="text-black cursor-pointer my-auto hover:bg-[#F5F1CD] rounded-md p-2 hover:scale-110">
            Shop all
          </li>
          <li className="text-black cursor-pointer my-auto hover:bg-[#F5F1CD] rounded-md p-2 hover:scale-110">
            New arrivals
          </li>
          <li className="text-black cursor-pointer my-auto hover:bg-[#F5F1CD] rounded-md p-2 hover:scale-110">
            About
          </li>
        </ul>
      </div>
      <div className="w-2.5/5 p-2 md:w-full md:shadow-md flex items-center justify-around">
        <div className="w-[300px] h-10 rounded-md p-2 shadow-md flex items-center">
          <input
            type="text"
            placeholder="Search entire store here."
            className="w-[94%] mr-2"
          />
          <FiSearch size="26" />
        </div>

        <div className="flex justify-around w-[150px]">
          <PiHeartBold
            size="36"
            className="hover:bg-[#F5F1CD] rounded-full m-1 cursor-pointer h-[40px] w-[40px] hover:scale-110 p-1"
          />
          <PiShoppingCart
            size="26"
            className="hover:bg-[#F5F1CD] rounded-full m-1 cursor-pointer h-[40px] w-[40px] hover:scale-110 p-1"
          />
          <CgProfile
            size="26"
            className="hover:bg-[#F5F1CD] rounded-full m-1 cursor-pointer h-[40px] w-[40px] hover:scale-110 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
