import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carshowcase from "./Banners"; // Import the Carshowcase component
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {/* Container to hold all link names */}
      {hoveredItem && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white py-4">
          <div className="flex justify-center space-x-4">
            {links.map((link) => (
              <p key={link.name} className="text-black text-sm font-medium">
                {link.name}
              </p>
            ))}
          </div>
        </div>
      )}

      {links.map((link) => (
        <div
          key={link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
          className="relative" // Ensure relative positioning for the container
        >
          <div className="px-3 text-left md:cursor-pointer group relative">
            <h1
              className="py-3 z-30 text-black flex justify-between items-center md:pr-0 pr-5 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <p>{link.name}</p>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {hoveredItem === link.name && (
              <div className="fixed top-0 left-0 w-full h-[90vh] bg-white z-10 flex border-b-4 border-gray-600 justify-center items-center transition-all duration-[200ms]">
                {link.name === "Home" && <Carshowcase />}
                {link.submenu && link.name !== "Home" && (
                  <div className="bg-white w-screen p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className="text-center">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        <ul>
                          {mysublinks.sublink.map((slink) => (
                            <li
                              className="text-sm text-gray-600 my-2.5"
                              key={slink.name}
                            >
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
//navbar 6/13/2024
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../Assests/logo.png";
import NavLinks from "./NavLinks";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaVimeoV,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="w-1/3 text-white text-sm font-family: Montserrat, cursive; flex items-center">
            <span
              className="hidden sm:inline"
              style={{ fontFamily: "Montserrat", fontSize: "16px" }}
            >
              WELCOME TO NESSCO INDIA
            </span>
            <span className="ml-2 hidden sm:inline">
              <FaVimeoV className="text-white hover:text-gray-800" />
            </span>
            <span className="ml-2 hidden sm:inline">
              <FaInstagram className="text-white hover:text-gray-800" />
            </span>
            <span className="ml-2 hidden sm:inline">
              <FaTwitter className="text-white hover:text-gray-800" />
            </span>
            <span className="ml-2 hidden sm:inline">
              <FaFacebook className="text-white hover:text-gray-800" />
            </span>
          </div>
          <div className="hidden border-t-2 border-b-2 text-white font-bold md:block">
            <img
              className="h-10 w-20 "
              src="https://www.nesscoindia.com/Assets/images/logo.webp"
              alt=""
              srcset=""
            />{" "}
          </div>
          <div className="w-1/3 flex justify-end items-center space-x-4">
            <FaMailchimp className="text-white hover:text-gray-800" />
            <p
              className="text-white hover:text-gray-800"
              style={{ fontFamily: "Montserrat", fontSize: "16px" }}
            >
              NesscoExample@gmail.com
            </p>
            <FaTwitter className="text-white hover:text-gray-800" />
            <FaFacebook className="text-white hover:text-gray-800" />
          </div>
        </div>
      </div>

      <div className="flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between">
          <span
            className="text-2xl md:text-3xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {open ? <FiX /> : <FiMenu />}
          </span>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        {/* Mobile nav */}
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
        <img alt="" className="md:cursor-pointer h-9" />
      </div>
    </nav>
  );
};

//navlinks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banners from "./Banners"; // Import the Banners component
import { links } from "./MyLinks";

const NavLinks2 = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of 500 milliseconds

    return () => clearTimeout(timeout);
  }, []);
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {links.map((link) => (
        <div
          key={link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-3 text-left md:cursor-pointer group relative">
            <h1
              className="py-3 z-30 text-black flex justify-between items-center md:pr-0 pr-5 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <p className="z-30">{link.name}</p>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {hoveredItem === link.name && (
              <div
                className="fixed top-0 left-0 w-full h-[80vh] bg-white z-10 flex border-b-4 border-gray-600 justify-center items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                  transition: "opacity 0.5s, transform 0.5s",
                }}
              >
                {link.name === "Home" && <Banners />}
                {link.submenu && link.name !== "Home" && (
                  <div className="bg-white w-screen p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className="text-center">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        <ul>
                          {mysublinks.sublink.map((slink) => (
                            <li
                              className="text-sm text-gray-600 my-2.5"
                              key={slink.name}
                            >
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

