import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/avater.jpg";
import UserStore from "../../../store/UserStore";
const NavBar = () => {
  const navIslogin = [
    { name: "Home", to: "/" },
    { name: "product", to: "/Product" },
    { name: "contact", to: "/contacts" },
    { name: "Checkout", to: "/CheckoutPage" },
  ];

  const navnologin = [
    { name: "Home", to: "/" },
    { name: "contact", to: "/contacts" },
  ]

  const { islogin, LogOutRequest } = UserStore();
  

  return (
    <nav className="text- bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-decoration-none">
            Flowbite
          </span>
        </a>

        <div>
          <ul className=" bg-yellow-300 flex flex-col  font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 no-underline ">
            
            {islogin() ? (
              <>
              {navIslogin.map((item, i) => {
              return (
                <button key={item.name}>
                  <NavLink className="no-underline" to={item.to}>{item.name}</NavLink>
                </button>
              );
            })}
                <NavLink
                to="/"
                className="no-underline relative inline-flex items-center justify-start  px-3 py-2  overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-400  opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-400 opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Logout
                </span>
                <span className="absolute inset-0 border-2 border-yellow-300 rounded-full"></span>
              </NavLink>

                <NavLink to={"/Profile"}>
                  <img
                    src={logo}
                    width={28}
                    height={28}
                    className=" rounded-full py-1"
                    alt=""
                  />
                </NavLink>
            </>
            ) : (
              <>
               {navnologin.map((item, i) => {
              return (
                <button key={item.name}>
                  <NavLink className="no-underline" to={item.to}>{item.name}</NavLink>
                </button>
              );
            })}
              <NavLink
                to="/Login"
                className="no-underline relative inline-flex items-center justify-start  px-3 py-2  overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-400  opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-400 opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Login
                </span>
                <span className="absolute inset-0 border-2 border-yellow-300 rounded-full"></span>
              </NavLink>
              <NavLink
              to="/SignUp"
              className="no-underline relative inline-flex items-center justify-start  px-3 py-2  overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-400  opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-400 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              create account
              </span>
              <span className="absolute inset-0 border-2 border-yellow-300 rounded-full"></span>
            </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
