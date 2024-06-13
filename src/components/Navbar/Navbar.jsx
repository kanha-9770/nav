import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className=" bg-white fixed top-0 w-full z-50">
      <div className="flex items-center font-medium justify-around">
        <span
          className="bg-gray-500 text-2xl md:text-3xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {open ? <FiX /> : <FiMenu />}
        </span>
        <span className="w-1/3 md:flex justify-center z-30 hidden md:block">
          <Link to={"/"}>
            <img
              className="h-16 w-30"
              src="https://www.nesscoindia.com/Assets/images/logo.webp"
              alt=""
              srcSet=""
            />
          </Link>
        </span>
        <ul className="w-full md:flex items-stretch	 hidden uppercase justify-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <span className="w-1/3 md:flex justify-center">
          <motion.button
            className="bg-[#483d73] hover:bg-red-500 text-white text-lg flex items-center justify-center  rounded-md z-30"
            initial={{ opacity: 0, x: 100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation to play when component mounts
            transition={{ duration: 0.9 }} // Animation duration
            whileHover={{ x: -5 }} // Move the whole container a bit to the left on hover
          >
            <motion.span
              initial={{ x: -100 }} // Initial text position outside the view on the left
              animate={{ x: 0 }} // Animation to move text to the initial position
              transition={{ duration: 0.3 }} // Animation duration
              className="p-2"
            >
              Inquire Now !
            </motion.span>
            <FiArrowRight className="ml-2" />
          </motion.button>
        </span>
      </div>
      <div
        className={`
            md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            transition-transform duration-300 transform ${
              open ? "translate-x-0" : "translate-x-full"
            }
          `}
      >
        <span
          className="text-3xl cursor-pointer absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <FiX />
        </span>
        <ul className="text-center">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
