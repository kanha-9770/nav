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
