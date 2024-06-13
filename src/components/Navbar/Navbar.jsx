import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between">
          <span className="text-2xl md:text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
            {open ? <FiX /> : <FiMenu />}
          </span>
          <span className="hidden md:block">Nessco India</span>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
          <li>
            <Link href="/login" className="py-7 px-3 inline-block">
              Login
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <div
          className={`
            md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <span className="text-3xl cursor-pointer absolute top-4 right-4" onClick={toggleMenu}>
            <FiX />
          </span>
          <ul className="text-center">
            <NavLinks />
            <li>
              <Link href="/login" className="py-7 px-3 inline-block">
                Login
              </Link>
            </li>
          </ul>
        </div>
        {/* <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
