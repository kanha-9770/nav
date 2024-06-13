import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banners from "./Banners";
import { links } from "./MyLinks";
import Services from "./Service";
import Industries from "./Industries";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

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
              className="py-3 z-30 text-black flex justify-between items-center md:pr-0 pr-5 border-b-2 border-transparent hover:border-[#483d73] text-sm font-medium"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <p className="border-b-l border-transparent text-lg z-30 hover:border-[#483d73] hover:border-b-2">
                {link.name}
              </p>
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
                {link.name === "Services" && <Services />}
                {link.name === "Industries" && <Industries />}
                {link.submenu &&
                  link.name !== "Home" &&
                  link.name !== "Services" &&
                  link.name !== "Industries" && (
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
      {hoveredItem && (
        <div className="fixed top-[80vh] left-0 w-full h-[20vh] bg-white bg-opacity-0 backdrop-blur-md"></div>
      )}
    </>
  );
};

export default NavLinks;
