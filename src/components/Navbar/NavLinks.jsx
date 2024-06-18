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
  // useGSAP(() => {
  //   gsap.to("#borderline", {
  //     yoyo: true,
  //     x: 100,
  //     duration: 0.5,
  //   });
  // },[hoveredItem,isScrolled]);
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
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
          onMouseLeave={handleMouseLeave}
          className="px-3 text-left md:cursor-pointer group relative"
        >
          <div className="hidden md:flex ">
            <h1
              className="py-3 z-30 text-black flex justify-center items-center md:pr-0 pr-5  text-sm font-medium"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <p
                className={`border-b-l border-transparent text-lg z-30 hover:border-[#483d73] hover:border-b-2 ${
                  !isScrolled && hoveredItem ? "transform -translate-y-10" : ""
                }`}
              >
                {link.name}
              </p>
            </h1>

            {hoveredItem === link.name && (
              <>
                <div
                  className={`fixed left-0 bg-white w-full top-20 md:top-0 h-auto md:h-[80vh] z-10 flex border-b-4 border-gray-600 justify-center items-center`}
                >
                  <div
                    id="borderline"
                    className="absolute top-0 left-0 w-full h-[10vh] border-b-2 border-gray-200 bg-slate-100"
                  ></div>

                  {link.name === "Home" && <Banners />}
                  {link.name === "Services" && <Services />}
                  {link.name === "Industries" && <Industries />}
                  {link.submenu &&
                    link.name !== "Home" &&
                    link.name !== "Services" &&
                    link.name !== "Industries" && (
                      <div className="bg-white w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  {link.name === "Home" && <Banners />}
                  {link.name === "Services" && <Services />}
                  {link.name === "Industries" && <Industries />}
                  {link.submenu &&
                    link.name !== "Home" &&
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

      {hoveredItem && (
        <div className="md:fixed md:top-[80vh] md:left-0 w-full md:h-[20vh] bg-white bg-opacity-0 backdrop-blur-md border-b-4 border-gray-600"></div>
      )}
    </>
  );
};

export default NavLinks;
