// Home.js
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    flag: "https://flagcdn.com/in.svg",
  });
  useGSAP(() => {
    gsap.from("#useGsap", {
      yoyo: true,
      x: 200,
      duration: 0.5,
    });
  }, [isOpen]);
  const countries = [
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
    { name: "European Union", flag: "https://flagcdn.com/eu.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    // Add more countries as needed...
  ];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="inline-flex h-full items-center w-full rounded-md text-sm font-medium ml-2 text-gray-700  focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
            className="h-full w-8 mr-1 rounded-full border-2 "
          />
          {selectedCountry.name}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center border border-transparent text-sm font-medium rounded-md text-gray-700  focus:outline-none"
        >
          <svg
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="17"
            data-v-d664a4b2=""
          >
            <path
              d="M3.73781 4.41602C3.45264 4.41602 3.17871 4.52945 2.97713 4.73103C2.77519 4.93262 2.66211 5.20655 2.66211 5.49171C2.66211 5.77688 2.77554 6.05046 2.97713 6.25239C3.17871 6.45397 3.45264 6.56741 3.73781 6.56741C4.02297 6.56741 4.29655 6.45397 4.49848 6.25239C4.70007 6.05046 4.8135 5.77688 4.8135 5.49171C4.8128 5.20655 4.69937 4.93332 4.49778 4.73174C4.2962 4.53015 4.02262 4.41672 3.73745 4.41602H3.73781ZM3.73781 6.17407C3.55659 6.17407 3.3831 6.10208 3.25527 5.97425C3.12744 5.84641 3.05544 5.67257 3.05544 5.49171C3.05544 5.31085 3.12744 5.13701 3.25527 5.00918C3.3831 4.88134 3.55694 4.80935 3.73781 4.80935C3.91867 4.80935 4.09216 4.88134 4.22034 5.00918C4.34817 5.13701 4.42017 5.31085 4.42017 5.49171C4.42298 5.67468 4.35204 5.85098 4.22385 5.98127C4.09567 6.11156 3.92042 6.18531 3.73781 6.18566V6.17372V6.17407Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.4"
            ></path>
            <path
              d="M7.54855 4.41637C7.26338 4.41707 6.99016 4.5305 6.78857 4.73244C6.58734 4.93437 6.47426 5.20795 6.47461 5.49312C6.47496 5.77828 6.58875 6.05186 6.79033 6.25309C6.99226 6.45468 7.26584 6.56776 7.55101 6.56741C7.83617 6.56741 8.10975 6.45397 8.31134 6.25204C8.51292 6.05046 8.626 5.77688 8.626 5.49171C8.6253 5.20619 8.51187 4.93262 8.30958 4.73103C8.10729 4.52945 7.83372 4.41602 7.5482 4.41602L7.54855 4.41637ZM7.54855 6.17443C7.36769 6.17407 7.1942 6.10173 7.06672 5.97355C6.93924 5.84536 6.86759 5.67187 6.86794 5.49066C6.86794 5.3098 6.94029 5.13631 7.06847 5.00882C7.19631 4.88099 7.37015 4.80935 7.55101 4.8097C7.73187 4.8097 7.90536 4.88169 8.03319 5.00988C8.16103 5.13771 8.23267 5.3112 8.23267 5.49206C8.23583 5.67538 8.16489 5.85238 8.03635 5.98303C7.90747 6.11367 7.73152 6.18672 7.5482 6.18637V6.17443H7.54855Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.4"
            ></path>
            <path
              d="M11.3618 4.41602C11.0767 4.41602 10.8031 4.52945 10.6012 4.73103C10.3996 4.93262 10.2861 5.20655 10.2861 5.49171C10.2861 5.77688 10.3996 6.05046 10.6012 6.25239C10.8031 6.45397 11.0767 6.56741 11.3618 6.56741C11.647 6.56741 11.9209 6.45397 12.1225 6.25239C12.3244 6.05046 12.4375 5.77688 12.4375 5.49171C12.4368 5.20655 12.3234 4.93332 12.1218 4.73174C11.9202 4.53015 11.647 4.41672 11.3618 4.41602ZM11.3618 6.17407C11.181 6.17407 11.0075 6.10208 10.8793 5.97425C10.7515 5.84641 10.6795 5.67257 10.6795 5.49171C10.6795 5.31085 10.7515 5.13701 10.8793 5.00918C11.0071 4.88134 11.181 4.80935 11.3618 4.80935C11.5427 4.80935 11.7165 4.88134 11.8444 5.00918C11.9722 5.13701 12.0442 5.31085 12.0442 5.49171C12.0467 5.67468 11.9761 5.85098 11.8479 5.98127C11.7197 6.11156 11.5448 6.18531 11.3618 6.18566V6.17372V6.17407Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.4"
            ></path>
            <path
              d="M14.8469 6.31386V2.38053C14.8469 2.01529 14.7018 1.66515 14.4437 1.40703C14.1856 1.1489 13.8351 1.00386 13.4702 1.00386H3.67832L3.28464 1H1.62667C1.26143 1 0.911292 1.14504 0.653167 1.40317C0.395042 1.66164 0.25 2.01143 0.25 2.37667V8.53619C0.25 8.90108 0.395042 9.25157 0.653167 9.50969C0.911292 9.76782 1.26143 9.91286 1.62667 9.91286H3.48517L4.16191 12.853C4.17842 12.924 4.23285 12.9802 4.30379 12.9984C4.31995 13.0005 4.33645 13.0005 4.35296 12.9984C4.40845 12.9984 4.46148 12.9749 4.49835 12.9334L7.25168 9.90689H13.4702C13.8351 9.90689 14.1856 9.76185 14.4437 9.50372C14.7018 9.2456 14.8469 8.89546 14.8469 8.53022V6.31386ZM14.4539 8.53619C14.4539 8.79713 14.3503 9.04718 14.1659 9.23155C13.9815 9.41593 13.7315 9.51953 13.4706 9.51953H7.16494C7.10945 9.51953 7.05677 9.54341 7.01955 9.5845L4.46288 12.3989L3.83355 9.67124C3.81283 9.57958 3.73065 9.51566 3.63688 9.51777H1.62667C1.36573 9.51777 1.11568 9.41417 0.931309 9.2298C0.746934 9.04542 0.643333 8.79537 0.643333 8.53444V2.37877C0.643333 2.11784 0.746934 1.86779 0.931309 1.68342C1.11568 1.49904 1.36573 1.39544 1.62667 1.39544H13.4699C13.7308 1.39544 13.9808 1.49904 14.1652 1.68342C14.3496 1.86779 14.4532 2.11819 14.4532 2.37877V8.53619H14.4539Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.4"
            ></path>
          </svg>
          Contact
        </button>
      </div>
      {isOpen && (
        <div
          id="useGsap"
          className="origin-top-right border-t-4 absolute mt-2 w-80 rounded-md shadow-lg bg-white border border-gray-300 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="flex justify-between p-4 border-b border-gray-200">
            <span className="text-gray-700 text-sm">
              Choose a country or region to view content specific to your
              location and shop online.
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          <div className="relative p-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-black" />
            </div>
            <input
              type="text"
              className="w-full px-8 py-2 pl-10 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="max-h-60 overflow-y-auto py-1" role="none">
            {filteredCountries.map((country, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                role="menuitem"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                  setSearchTerm("");
                }}
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-6 h-4 mr-2 rounded-sm"
                />
                {country.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
