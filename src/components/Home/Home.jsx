// // Home.js
// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoMdClose } from "react-icons/io";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState({
//     name: "India",
//     flag: "https://flagcdn.com/in.svg",
//   });
//   useGSAP(()=>{
//     gsap.from('#useGsap',{
//       yoyo:true,
//       x:200,
//       duration:0.5
//     })
//   },[isOpen])
//   const countries = [
//     { name: "India", flag: "https://flagcdn.com/in.svg" },
//     { name: "United States", flag: "https://flagcdn.com/us.svg" },
//     { name: "European Union", flag: "https://flagcdn.com/eu.svg" },
//     { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
//     { name: "Australia", flag: "https://flagcdn.com/au.svg" },
//     { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
//     // Add more countries as needed...
//   ];

//   const filteredCountries = countries.filter((country) =>
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative inline-block text-left">
//       <div className="flex items-center space-x-4">
//         <button
//           type="button"
//           className="inline-flex h-full items-center w-full rounded-md text-sm font-medium ml-2 text-gray-700  focus:outline-none"
//           id="menu-button"
//           aria-expanded="true"
//           aria-haspopup="true"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <img
//             src={selectedCountry.flag}
//             alt={`${selectedCountry.name} flag`}
//             className="h-full w-8 mr-1 rounded-full border-2 "
//           />
//           {selectedCountry.name}
       
//         </button>
//         <button
//           type="button"
//           className="inline-flex items-center border border-transparent text-sm font-medium rounded-md text-gray-700  focus:outline-none"
//         >
//           Contact
//         </button>
//       </div>
//       {isOpen && (
//         <div
//           id="useGsap"
//           className="origin-top-right border-t-4  absolute mt-2 w-80 rounded-md shadow-lg bg-white border border-gray-300 ring-1 ring-black ring-opacity-5"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//         >
//           <div className="flex justify-between p-4 border-b border-gray-200">
//             <span className="text-gray-700 text-sm">
//               Choose a country or region to view content specific to your
//               location and shop online.
//             </span>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <IoMdClose size={20} />
//             </button>
//           </div>
//           <div className="relative p-2">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FiSearch className="text-black" />
//             </div>
//             <input
//               type="text"
//               className="w-full px-8 py-2 pl-10 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="max-h-60 overflow-y-auto py-1" role="none">
//             {filteredCountries.map((country, index) => (
//               <button
//                 key={index}
//                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                 role="menuitem"
//                 onClick={() => {
//                   setSelectedCountry(country);
//                   setIsOpen(false);
//                   setSearchTerm("");
//                 }}
//               >
//                 <img
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   className="w-6 h-4 mr-2 rounded-sm"
//                 />
//                 {country.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
import React from "react";
import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import './styles.css';

const machines = [
  {
    src: paperCupMachine1,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: paperCupMachine2,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: flexoPrintingMachine,
    alt: "Flexo Printing Machine",
    label: "Flexo Printing Machine",
  },
  {
    src: paperCupMachine3,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: dieCuttingMachine,
    alt: "Die Cutting Machine",
    label: "Die Cutting Machine",
  },
];

const Home = () => {
  return (
    <section
      className="relative h-screen w-screen overflow-hidden z-[-1] bg-cover bg-center "
    >
       <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-10">
        <h1 className=" text-6xl font-bold">
          <span>Paper </span>
          <span className="flip-animate"><span data-hover="Cup Machine">Cup  Machine</span></span>
        </h1>
        <p className="text-5xl italic mt-2">
          <span>Manufacturing</span>
        </p>
        <button className="mt-6 px-4 py-2 bg-white text-black rounded-lg font-bold">
          Book Now
        </button>
      </div>
      <div className="absolute bottom-0 flex justify-center space-x-4 p-4 w-full">
        {machines.map((machine, index) => (
          <div key={index} className="relative h-28 w-44">
            <img
              src={machine.src}
              alt={machine.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-3/4 bg-gray-400 bg-opacity-50"></div>
            <div className="absolute bottom-0 w-full mt-8 text-white text-center p-1">
              {machine.label}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute font-bold text-4xl rounded-full border-2 border-black p-3 bottom-4 right-4">
        <IoChatboxEllipsesOutline />
      </div>
    </section>
  );
};

export default Home;
