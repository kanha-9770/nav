// // // Home.js
// // import React, { useState } from "react";
// // import { FiSearch } from "react-icons/fi";
// // import { IoMdClose } from "react-icons/io";
// // import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// // const Home = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [selectedCountry, setSelectedCountry] = useState({
// //     name: "India",
// //     flag: "https://flagcdn.com/in.svg",
// //   });
// //   useGSAP(()=>{
// //     gsap.from('#useGsap',{
// //       yoyo:true,
// //       x:200,
// //       duration:0.5
// //     })
// //   },[isOpen])
// //   const countries = [
// //     { name: "India", flag: "https://flagcdn.com/in.svg" },
// //     { name: "United States", flag: "https://flagcdn.com/us.svg" },
// //     { name: "European Union", flag: "https://flagcdn.com/eu.svg" },
// //     { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
// //     { name: "Australia", flag: "https://flagcdn.com/au.svg" },
// //     { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
// //     // Add more countries as needed...
// //   ];

// //   const filteredCountries = countries.filter((country) =>
// //     country.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="relative inline-block text-left">
// //       <div className="flex items-center space-x-4">
// //         <button
// //           type="button"
// //           className="inline-flex h-full items-center w-full rounded-md text-sm font-medium ml-2 text-gray-700  focus:outline-none"
// //           id="menu-button"
// //           aria-expanded="true"
// //           aria-haspopup="true"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           <img
// //             src={selectedCountry.flag}
// //             alt={`${selectedCountry.name} flag`}
// //             className="h-full w-8 mr-1 rounded-full border-2 "
// //           />
// //           {selectedCountry.name}

// //         </button>
// //         <button
// //           type="button"
// //           className="inline-flex items-center border border-transparent text-sm font-medium rounded-md text-gray-700  focus:outline-none"
// //         >
// //           Contact
// //         </button>
// //       </div>
// //       {isOpen && (
// //         <div
// //           id="useGsap"
// //           className="origin-top-right border-t-4  absolute mt-2 w-80 rounded-md shadow-lg bg-white border border-gray-300 ring-1 ring-black ring-opacity-5"
// //           role="menu"
// //           aria-orientation="vertical"
// //           aria-labelledby="menu-button"
// //         >
// //           <div className="flex justify-between p-4 border-b border-gray-200">
// //             <span className="text-gray-700 text-sm">
// //               Choose a country or region to view content specific to your
// //               location and shop online.
// //             </span>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="text-gray-500 hover:text-gray-700"
// //             >
// //               <IoMdClose size={20} />
// //             </button>
// //           </div>
// //           <div className="relative p-2">
// //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //               <FiSearch className="text-black" />
// //             </div>
// //             <input
// //               type="text"
// //               className="w-full px-8 py-2 pl-10 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
// //               placeholder="Search"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //           <div className="max-h-60 overflow-y-auto py-1" role="none">
// //             {filteredCountries.map((country, index) => (
// //               <button
// //                 key={index}
// //                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
// //                 role="menuitem"
// //                 onClick={() => {
// //                   setSelectedCountry(country);
// //                   setIsOpen(false);
// //                   setSearchTerm("");
// //                 }}
// //               >
// //                 <img
// //                   src={country.flag}
// //                   alt={`${country.name} flag`}
// //                   className="w-6 h-4 mr-2 rounded-sm"
// //                 />
// //                 {country.name}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;
// // import React from "react";
// // import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// // import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// // import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// // import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// // import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// // import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// // import { IoChatboxEllipsesOutline } from "react-icons/io5";
// // import './styles.css';

// // const machines = [
// //   {
// //     src: paperCupMachine1,
// //     alt: "Paper Cup Machine",
// //     label: "Paper Cup Machine",
// //   },
// //   {
// //     src: paperCupMachine2,
// //     alt: "Paper Cup Machine",
// //     label: "Paper Cup Machine",
// //   },
// //   {
// //     src: flexoPrintingMachine,
// //     alt: "Flexo Printing Machine",
// //     label: "Flexo Printing Machine",
// //   },
// //   {
// //     src: paperCupMachine3,
// //     alt: "Paper Cup Machine",
// //     label: "Paper Cup Machine",
// //   },
// //   {
// //     src: dieCuttingMachine,
// //     alt: "Die Cutting Machine",
// //     label: "Die Cutting Machine",
// //   },
// // ];

// // const Home = () => {
// //   return (
// //     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white">
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute inset-0 w-full h-full object-cover z-0"
// //       >
// //         <source src="bg.mp4" type="video/mp4" />
// //         <source src="bg.webm" type="video/webm" />
// //         <source src="bg.ogv" type="video/ogg" />
// //       </video>
// //       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
// //       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
// //         <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
// //           <span>Paper </span>
// //           <span className="flip-animate"><span data-hover="Cup Machine">Cup Machine</span></span>
// //         </h1>
// //         <p className="text-3xl md:text-5xl italic mt-4">
// //           <span>Manufacturing</span>
// //         </p>
// //         <button className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition duration-300 font-bold text-xl">
// //           Book Now
// //         </button>
// //       </div>
// //       <div className="absolute bottom-0 w-full flex justify-center space-x-4 p-6 bg-black bg-opacity-50 backdrop-blur-sm">
// //         {machines.map((machine, index) => (
// //           <div key={index} className="relative h-32 w-32 md:h-44 md:w-44 border-2 border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
// //             <img
// //               src={machine.src}
// //               alt={machine.alt}
// //               className="h-full w-full object-cover"
// //             />
// //             <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center">
// //               <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
// //         <IoChatboxEllipsesOutline />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Home;
// import React from "react";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import './styles.css';

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
//           <span>Sustainable </span>
//           <span className="text-gray-400">Development</span>
//           <br />
//           <span>Technology</span>
//           <br />
//           <span>Machinery</span>
//           <br />
//           <span>Engineering</span>
//         </h1>
//         <p className="text-3xl md:text-5xl italic mb-8">
//           Crafting the Future
//         </p>
//         <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//           Explore Now
//         </button>
//       </div>
//       <div className="absolute bottom-0 w-full flex justify-center space-x-6 p-6 bg-black bg-opacity-50 backdrop-blur-sm">
//         {machines.map((machine, index) => (
//           <div key={index} className="relative h-32 w-32 md:h-44 md:w-44 border-2 border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
//             <img
//               src={machine.src}
//               alt={machine.alt}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center">
//               <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
// import React from "react";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import './styles.css';

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
//           Crafting Your Future
//         </h1>
//         <p className="text-3xl md:text-5xl italic mb-8">
//           Precision. Innovation. Excellence.
//         </p>
//         <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//           Discover More
//         </button>
//       </div>
//       <div className="absolute bottom-0 w-full flex justify-center space-x-6 p-6 bg-black bg-opacity-50 backdrop-blur-sm">
//         {machines.map((machine, index) => (
//           <div key={index} className="relative h-32 w-32 md:h-44 md:w-44 border-2 border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
//             <img
//               src={machine.src}
//               alt={machine.alt}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center">
//               <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
// import React from "react";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import './styles.css';

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
//           <span>Paper </span>
//           <span className="flip-animate">
//             <span data-hover="Cup Machine">Cup Machine</span>
//           </span>
//         </h1>
//         <p className="text-3xl md:text-5xl italic mb-8">
//           Manufacturing
//         </p>
//         <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//           Book Now
//         </button>
//       </div>
//       <div className="absolute bottom-0 w-full flex justify-center space-x-6 p-6  bg-opacity-50 backdrop-blur-sm">
//         {machines.map((machine, index) => (
//           <div key={index} className="relative h-32 w-32 md:h-44 md:w-44 border-2 border-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
//             <img
//               src={machine.src}
//               alt={machine.alt}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center">
//               <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import './styles.css';

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const carouselRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (animationRef.current) animationRef.current.kill();
//     };
//   }, []);

//   const startAutoSlide = () => {
//     animationRef.current = gsap.to(carouselRef.current, {
//       xPercent: -100 * machines.length,
//       ease: "none",
//       duration: machines.length * 3, // Total duration for one complete cycle
//       scrollTrigger: {
//         trigger: carouselRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / machines.length,
//         end: () => `+=${carouselRef.current.scrollWidth}`,
//       },
//       modifiers: {
//         xPercent: (xPercent) => {
//           const index = machines.length;
//           return `${xPercent % 100}%`;
//         },
//       },
//       repeat: -1,
//     });
//   };

//   const handleMouseEnter = () => {
//     gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
//   };

//   const handleMouseLeave = () => {
//     gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
//   };

//   const handleVideoPlay = () => {
//     const videoElement = document.getElementById("background-video");
//     if (videoElement) {
//       videoElement.play();
//       setIsVideoPlaying(true);
//     }
//   };

//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
//       <video
//         id="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-4/4 object-cover z-0"
//         onCanPlay={() => setIsVideoPlaying(true)}
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       {!isVideoPlaying && (
//         <div
//           className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
//           onClick={handleVideoPlay}
//         >
//           <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//             Play Video
//           </button>
//         </div>
//       )}
//       <div className="absolute inset-0 bg-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           <span>Paper </span>
//           <span className="flip-animate">
//             <span data-hover="Cup Machine">Cup Machine</span>
//           </span>
//         </h1>
//         <p className="text-2xl md:text-3xl italic mb-8">
//           Manufacturing
//         </p>
//         <button className="pl-4 pr-4 p-1 text-black bg-white rounded-lg shadow-lg transition duration-300 font-semibold text-base">
//           Book Now
//         </button>
//       </div>
//       <div
//         className="absolute bottom-0 w-full flex items-center justify-center p-6 backdrop-blur-sm"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative overflow-hidden w-full mx-4 flex justify-center items-center">
//           <div
//             className="flex transition-transform duration-500"
//             ref={carouselRef}
//           >
//             {machines.map((machine, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-1/5 px-2"
//               >
//                 <div className="relative h-24 md:h-32 border-2 border-white rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
//                   <img
//                     src={machine.src}
//                     alt={machine.alt}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-80 flex items-center justify-center">
//                     <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const startAutoSlide = () => {
    animationRef.current = gsap.to(carouselRef.current, {
      xPercent: -100 * machines.length,
      ease: "none",
      duration: machines.length * 3, // Total duration for one complete cycle
      repeat: -1,
      modifiers: {
        xPercent: (xPercent) => {
          const index = machines.length;
          return `${xPercent % (index * 100)}%`;
        },
      },
    });
  };

  const handleMouseEnter = () => {
    gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
  };

  const handleMouseLeave = () => {
    gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
  };

  const handleVideoPlay = () => {
    const videoElement = document.getElementById("background-video");
    if (videoElement) {
      videoElement.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-4/4 object-cover z-0"
        onCanPlay={() => setIsVideoPlaying(true)}
      >
        <source src="bg.mp4" type="video/mp4" />
        <source src="bg.webm" type="video/webm" />
        <source src="bg.ogv" type="video/ogg" />
      </video>
      {!isVideoPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
          onClick={handleVideoPlay}
        >
          <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
            Play Video
          </button>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          <span>Paper </span>
          <span className="flip-animate">
            <span data-hover="Cup Machine">Cup Machine</span>
          </span>
        </h1>
        <p className="text-2xl md:text-3xl italic mb-8">
          Manufacturing
        </p>
        <button className="px-1 py-1 text-black bg-white rounded-full shadow-lg transition duration-300 font-bold text-base">
          Book Now
        </button>
      </div>
      <div
        className="absolute bottom-0 w-full flex items-center justify-center p-6 backdrop-blur-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden w-full mx-4 flex justify-center items-center">
          <div
            className="flex transition-transform duration-500"
            ref={carouselRef}
          >
            {machines.map((machine, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/5 px-2"
              >
                <div className="relative h-24 md:h-32 border-2 border-white rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
                  <img
                    src={machine.src}
                    alt={machine.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-80 flex items-center justify-center">
                    <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
                  </div>
                </div>
              </div>
            ))}
            {machines.map((machine, index) => (
              <div
                key={index + machines.length}
                className="flex-shrink-0 w-1/5 px-2"
              >
                <div className="relative h-24 md:h-32 border-2 border-white rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
                  <img
                    src={machine.src}
                    alt={machine.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-80 flex items-center justify-center">
                    <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
        <IoChatboxEllipsesOutline />
      </div>
    </section>
  );
};

export default Home;
