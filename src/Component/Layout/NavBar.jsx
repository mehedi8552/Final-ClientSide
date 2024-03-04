import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../assets/avater.jpg";
import UserStore from "../../../store/UserStore";
import { useNavigate } from "react-router-dom";

const NavBar2 = () => {
  const navigate = useNavigate();
  const navIslogin = [
    { name: "Home", to: "/" },
    { name: "product", to: "/Product" },
    { name: "contact", to: "/contacts" },
    { name: "Checkout", to: "/CheckoutPage" },
  ];

  const navnologin = [
    { name: "Home", to: "/" },
    { name: "contact", to: "/contacts" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const { islogin, LogOutRequest } = UserStore();

  const logout = async ()=>{
    await LogOutRequest();
    navigate("/");
  }
  return (
    <nav className="bg-green-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-10 ml-10 rounded-full cursor-pointer"
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex-shrink-0 flex items-center p-3">
              <ul className="flex items-center justify-end space-x-3 ">
                
                {islogin() ? (
                  <>
                  <input
                  className=" focus:outline-none rounded-sm w-40 h-8"
                  placeholder=" Search"
                  type="text"
                />
                    {navIslogin.map((item, i) => {
                       return(
                        <button key={item.name}>
                        <NavLink className="no-underline text-white hover:text-yellow-400" to={item.to}>{item.name}</NavLink>
                             </button>
                       )  
                    })}
                    <NavLink
                      to="/"
                      onClick={logout}
                      className="no-underline text-white hover:text-black px-2 py-1 bg-red-600 rounded-md  hover:bg-orange-600 "
                    >
                        Logout
                    </NavLink>

                    <NavLink to={"/Profile"}>
                      <img
                        src={logo}
                        className=" rounded-full py-1 h-10 w-10"
                        alt=""
                      />
                    </NavLink>
                  </>
                ) : (
                  <>
                  <input
                  className="focus:outline-none rounded-sm w-40 h-8"
                  placeholder=" Search"
                  type="text"
                />
                    {
                    navnologin.map((item, i) => {
                     return(
                      <button key={item.name}>
                      <NavLink className="no-underline text-white hover:text-yellow-400" to={item.to}>{item.name}</NavLink>
                           </button>
                     )  

                    })
                    }
                    <NavLink
                to="/Login"
                className="no-underline text-white  px-2 py-1 bg-red-600 rounded-md   "
              >
                  Login
              </NavLink>
              <NavLink
              to="/SignUp"
              className=" no-underline text-white px-2 py-1 bg-red-600 rounded-md   "
            >
              Sign Up
            </NavLink>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              {
                islogin()?(
                  <>
                  {
                    navIslogin.map((item,i)=>{
                      return(
                        <NavLink
                          key={i}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                      >
                        {item.name}
                      </NavLink>
                      )
                    })
                  }
                  </>
                ):(
                  <>
                  {
                    navnologin.map((item,i)=>{
                      return(
                        <NavLink
                          key={i}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
                      >
                        {item.name}
                      </NavLink>
                      )
                    })
                  }
                  </>
                )
              }

             </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default NavBar2;
