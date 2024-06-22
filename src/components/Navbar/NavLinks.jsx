import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banners from "./Banners";
import { links } from "./MyLinks";
import Services from "./Service";
import Industries from "./Industries";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const NavLinks = ({ hoveredItem, isScrolled, setHoveredItem, open }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnternew = (linkName) => {
    setHeading(linkName);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHeading(null); // Clear the active link on mouse leave
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {links.map((link) => (
        <div
          key={link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          className=" text-left md:cursor-pointer group relative"
        >
          <div className="hidden md:flex ">
            <h7
              className={`z-30 flex justify-center items-center md:pr-0 pr-0 text-xs font-normal `}
              onMouseEnter={() => handleMouseEnternew(link.name)}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <p
                className={`flex item-center p-1 font-midium pl-4 pr-4 justify-center ${hoveredItem ? heading === link.name
                  ? "bg-black text-white rounded-full"
                  : "text-black" : "text-white"} text-base z-30 rounded-full`}
              >
                {link.name}
              </p>
            </h7>

            {hoveredItem === link.name && (
              <>
                <div
                  className={`fixed left-0  shadow-lg bg-white w-full rounded-b-xl  h-auto md:h-[65vh] z-10 top-14 flex justify-center items-center `}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    id="borderline"
                    className="absolute bg-white top-0  left-0 w-full "
                  ></div>

                  {link.name === "AboutUS" && <Services />}
                  {link.name === "Products" && <Banners />}
                  {link.name === "Industries" && <Industries />}
                  {link.submenu &&
                    link.name !== "AboutUS" &&
                    link.name !== "Products" &&
                    link.name !== "Industries" && (
                      <div className="bg-white shadow-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
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
              </>
            )}
          </div>
          {/* Mobile menus */}
          {open && (
            <div className="md:hidden w-full bg-inherit">
              <div
                className={`py-2 pl-4 border-b border-gray-300 text-black flex justify-between items-center`}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                <p className="text-lg">{link.name}</p>
                <span>{heading === link.name ? "-" : "+"}</span>
              </div>
              {heading === link.name && (
                <div className="pl-4 pb-2">
                  {link.name === "AboutUS" && <Banners />}
                  {link.name === "Services" && <Services />}
                  {link.name === "Industries" && <Industries />}
                  {link.submenu &&
                    link.name !== "AboutUS" &&
                    link.name !== "Services" &&
                    link.name !== "Industries" && (
                      <div>
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
          )}
        </div>
      ))}



    </>
  );
};

export default NavLinks;
