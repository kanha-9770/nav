"use client";
import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaVimeoV,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-screen relative shadow">
      <div className="bg-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            WELCOME TO MINNESOTA THEME
          </div>
          <div className="flex space-x-4">
            <FaVimeoV className="text-gray-600 hover:text-gray-800" />
            <FaInstagram className="text-gray-600 hover:text-gray-800" />
            <FaTwitter className="text-gray-600 hover:text-gray-800" />
            <FaFacebook className="text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
      <nav className="bg-inherit max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-wider">
                MINNESOTA
              </span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
                >
                  HOME
                </a>

                {activeDropdown === 1 && (
                  <div className="top-16 absolute z-10 w-[850px] shadow-lg">
                    <div className="mx-[-230px] bg-white grid grid-cols-5 gap-4 p-4">
                      <div>
                        <h3 className="font-semibold">BUSINESS</h3>
                        <ul className="mt-2 text-gray-700">
                          <li>Main Home</li>
                          <li>Business Home</li>
                          <li>SEO Home</li>
                          <li>Startup Home</li>
                          <li>Conference Home</li>
                          <li>App Home</li>
                          <li>Boxed Home</li>
                          <li>Marketing Home</li>
                          <li>Left Menu</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">RETAIL</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Medical Home</li>
                          <li>Restaurant Home</li>
                          <li>Construction Home</li>
                          <li>Wedding Home</li>
                          <li>Fitness Home</li>
                          <li>Beauty Salon</li>
                          <li>Pet Care Home</li>
                          <li>Tech Shop</li>
                          <li>Furniture Shop</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">CREATIVE</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Studio Home</li>
                          <li>Agency Home</li>
                          <li>Music Home</li>
                          <li>Design Home</li>
                          <li>Split Slider</li>
                          <li>Digital Home</li>
                          <li>Product Showcase</li>
                          <li>vCard</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">PORTFOLIO</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Portfolio Home</li>
                          <li>Portfolio Pinboard</li>
                          <li>Photography Portfolio</li>
                          <li>Portfolio Parallax</li>
                          <li>Designer Portfolio</li>
                          <li>Portfolio Gallery</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">BONUS</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Blog Home</li>
                          <li>Blog Masonry</li>
                          <li>Blog Pinboard</li>
                          <li>Boxed Blog</li>
                          <li>Full Screen Slider</li>
                          <li>Freelancer Home</li>
                          <li>Coming Soon</li>
                          <li>Maintenance Mode</li>
                          <li>Landing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
                >
                  PAGES
                </a>
                {activeDropdown === 2 && (
                  <div className="top-16 absolute z-10 w-[680px] shadow-lg">
                    <div className="mx-[-316px] bg-white grid grid-cols-5 gap-4 p-4">
                      <div>
                        <h3 className="font-semibold">BUSINESS</h3>
                        <ul className="mt-2 text-gray-700">
                          <li>Main Home</li>
                          <li>Business Home</li>
                          <li>SEO Home</li>
                          <li>Startup Home</li>
                          <li>Conference Home</li>
                          <li>App Home</li>
                          <li>Boxed Home</li>
                          <li>Marketing Home</li>
                          <li>Left Menu</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">RETAIL</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Medical Home</li>
                          <li>Restaurant Home</li>
                          <li>Construction Home</li>
                          <li>Wedding Home</li>
                          <li>Fitness Home</li>
                          <li>Beauty Salon</li>
                          <li>Pet Care Home</li>
                          <li>Tech Shop</li>
                          <li>Furniture Shop</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">CREATIVE</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Studio Home</li>
                          <li>Agency Home</li>
                          <li>Music Home</li>
                          <li>Design Home</li>
                          <li>Split Slider</li>
                          <li>Digital Home</li>
                          <li>Product Showcase</li>
                          <li>vCard</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">PORTFOLIO</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Portfolio Home</li>
                          <li>Portfolio Pinboard</li>
                          <li>Photography Portfolio</li>
                          <li>Portfolio Parallax</li>
                          <li>Designer Portfolio</li>
                          <li>Portfolio Gallery</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">BONUS</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Blog Home</li>
                          <li>Blog Masonry</li>
                          <li>Blog Pinboard</li>
                          <li>Boxed Blog</li>
                          <li>Full Screen Slider</li>
                          <li>Freelancer Home</li>
                          <li>Coming Soon</li>
                          <li>Maintenance Mode</li>
                          <li>Landing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
                >
                  Features
                </a>
                {activeDropdown === 3 && (
                  <div className="top-16 absolute z-10 w-[510px] shadow-lg">
                    <div className="mx-[-400px] bg-white grid grid-cols-5 gap-4 p-4">
                      <div>
                        <h3 className="font-semibold">BUSINESS</h3>
                        <ul className="mt-2 text-gray-700">
                          <li>Main Home</li>
                          <li>Business Home</li>
                          <li>SEO Home</li>
                          <li>Startup Home</li>
                          <li>Conference Home</li>
                          <li>App Home</li>
                          <li>Boxed Home</li>
                          <li>Marketing Home</li>
                          <li>Left Menu</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">RETAIL</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Medical Home</li>
                          <li>Restaurant Home</li>
                          <li>Construction Home</li>
                          <li>Wedding Home</li>
                          <li>Fitness Home</li>
                          <li>Beauty Salon</li>
                          <li>Pet Care Home</li>
                          <li>Tech Shop</li>
                          <li>Furniture Shop</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">CREATIVE</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Studio Home</li>
                          <li>Agency Home</li>
                          <li>Music Home</li>
                          <li>Design Home</li>
                          <li>Split Slider</li>
                          <li>Digital Home</li>
                          <li>Product Showcase</li>
                          <li>vCard</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold">PORTFOLIO</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Portfolio Home</li>
                          <li>Portfolio Pinboard</li>
                          <li>Photography Portfolio</li>
                          <li>Portfolio Parallax</li>
                          <li>Designer Portfolio</li>
                          <li>Portfolio Gallery</li>
                        </ul>
                      </div>
                     <div>
                        <h3 className="font-semibold">BONUS</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                          <li>Blog Home</li>
                          <li>Blog Masonry</li>
                          <li>Blog Pinboard</li>
                          <li>Boxed Blog</li>
                          <li>Full Screen Slider</li>
                          <li>Freelancer Home</li>
                          <li>Coming Soon</li>
                          <li>Maintenance Mode</li>
                          <li>Landing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              >
                ELEMENTS
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              >
                PORTFOLIO
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              >
                BLOG
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-50 text-sm font-medium"
              >
                SHOP
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:minnesota@example.com"
              className="text-gray-700 hover:text-gray-900"
            >
              MINNESOTA@EXAMPLE.COM
            </a>
            <FaShoppingCart className="text-gray-700 hover:text-gray-900" />
            <FaSearch className="text-gray-700 hover:text-gray-900" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
