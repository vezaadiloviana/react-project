import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../../Assets/img/logo-hr.png"
import { Link } from "react-router-dom";

const Sidebar = ({ theme }) => {
  const [open, setOpen] = useState(true);
  // const Menus = [
  //   { title: "Home", src: "ant-design:home-outlined", link: "/dashboard" },
  //   { title: "Product", src: "bx:box", link: "/product" },
  //   { title: "Reporting ", src: "ant-design:pie-chart-outlined", link: "/reporting",},
  //   { title: "Setting", src: "ant-design:setting-outlined", link: "/setting" },
  // ];
  // const [show, setShow] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleDropdownAway = () => {
    setOpenDropdown(false);
  };

  return (
    <div
      className={` ${open ? "w-64" : "w-20 "} bg-white shadow-xl rounded-r-xl h-screen p-5  pt-8 sticky top-0  duration-300`}>
      <div className={`absolute cursor-pointer -right-3 top-9 bg-white border-2 p-1 rounded-full  ${
          !open && "rotate"
        }`} onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
        </svg>
      </div>
      <div className="flex gap-x-4 items-center border-b-2 pb-5">
        <div className="pl-3">
            <img src={logo} className={` ${open ? "w-12" : "w-8 "}`} alt="" />
        </div>
        <div className={`${!open && "hidden"} origin-left duration-200`}>
          <h1
            className={`text-[#961127] origin-left font-bold text-lg duration-200 ${
              !open && "scale-0"}`}>
             Haha React
          </h1>
          <h1
            className={`text-[#E44E21] text-[10px] origin-left duration-200 ${
              !open && "scale-0"}`}>
            HR Integrated System
          </h1>
        </div>
      </div>
      <ul className="pt-4 overflow-y-auto">
        <li>
          <Link to="/home" className="flex rounded-md p-3 cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
            <Icon icon="ant-design:pie-chart-outlined" className="w-6 h-6" />
            <span className={`${!open && "hidden"} ml-4 origin-left duration-200 font-semibold`}>
              Dashboard
            </span>
          </Link>

          <div onClickAway={handleDropdownAway}>
            <button type="button" onClick={handleDropdown} className="flex rounded-md p-3 w-full cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
              <Icon icon="fluent:people-community-24-regular" className="w-6 h-6" />
              <span className={`${!open && "hidden"} ml-4 origin-left duration-200 font-semibold`}>
                Employee
              </span>
            </button>
            {openDropdown ? (
              <div> 
                <Link to="/employee-list" className="flex rounded-md p-3 cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
                  <span className={`${!open && "hidden"} ml-10 origin-left duration-200 font-semibold`}>
                    Employee List
                  </span>
                </Link>
                <Link to="/employee-status" className="flex rounded-md p-3 cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
                  <span className={`${!open && "hidden"} ml-10 origin-left duration-200 font-semibold`}>
                    Employee Status
                  </span>
                </Link>
              </div>
            ) : null}
          </div>

          <Link to="/home" className="flex rounded-md p-3 cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
            <Icon icon="healthicons:health-worker-form-outline" className="w-6 h-6" />
            <span className={`${!open && "hidden"} ml-4 origin-left duration-200 font-semibold`}>
              Job Management
            </span>
          </Link>

          <Link to="/home" className="flex rounded-md p-3 cursor-pointer hover:bg-[#E44E21] hover:text-white text-gray-600 text-sm items-center">
            <Icon icon="la:business-time" className="w-6 h-6" />
            <span className={`${!open && "hidden"} ml-4 origin-left duration-200 font-semibold`}>
              Work Shift
            </span>
          </Link>
        </li>
        {/* {Menus.map((Menu, index) => (
          <li key={index}>
            <Link
              className={`flex rounded-md p-3 cursor-pointer hover:bg-[#FFF0D7] text-gray-300 text-sm items-center`}
              to={Menu.link}
            >
              <Icon icon={`${Menu.src}`} className="w-6 h-6 text-[#D08C60]" />
              <span
                className={`${
                  !open && "hidden"
                } ml-4 origin-left duration-200 font-semibold text-[#D08C60]`}
              >
                {Menu.title}
              </span>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Sidebar;
