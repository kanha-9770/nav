// // import React, { useState, useEffect } from "react";
// // import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
// // import {
// //   FaTwitter,
// //   FaFacebook,
// //   FaInstagram,
// //   FaVimeoV,
// //   FaMailchimp,
// // } from "react-icons/fa";
// // import { motion, useAnimation, AnimatePresence } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import NavLinks from "./NavLinks";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const controls = useAnimation();
// //   const [hoveredItem, setHoveredItem] = useState(null);

// //   const toggleMenu = () => {
// //     setOpen(!open);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setIsScrolled(true);
// //         controls.start({
// //           height: "60px",
// //           backgroundColor: "rgba(72, 61, 115, 0.95)",
// //           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //           transition: { duration: 0.5 },
// //         });
// //       } else {
// //         setIsScrolled(false);
// //         controls.start({
// //           height: "100px",
// //           backgroundColor: "transparent",
// //           boxShadow: "none",
// //           transition: { duration: 0.5 },
// //         });
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [controls]);

// //   return (
// //     <motion.nav
// //       className="fixed top-0 w-full z-50"
// //       animate={controls}
// //       initial={{
// //         height: "100px",
// //         backgroundColor: "transparent",
// //         boxShadow: "none",
// //       }}
// //     >
// //       <div className={`py-2 ${isScrolled ? "hidden" : "block"} bg-[#a9a4d6]`}>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
// //           <div className="w-1/3 text-sm flex items-center">
// //             <span
// //               className="hidden sm:inline text-gray-700"
// //               style={{ fontFamily: "Montserrat", fontSize: "16px" }}
// //             >
// //               WELCOME TO NESSCO INDIA
// //             </span>
// //             <span className="ml-2 hidden sm:inline">
// //               <FaVimeoV className="text-gray-700 hover:text-gray-800" />
// //             </span>
// //             <span className="ml-2 hidden sm:inline">
// //               <FaInstagram className="text-gray-700 hover:text-gray-800" />
// //             </span>
// //             <span className="ml-2 hidden sm:inline">
// //               <FaTwitter className="text-gray-700 hover:text-gray-800" />
// //             </span>
// //             <span className="ml-2 hidden sm:inline">
// //               <FaFacebook className="text-gray-700 hover:text-gray-800" />
// //             </span>
// //           </div>
// //           <div className="hidden  z-50  text-gray-700 font-bold md:block">
// //             <img
// //               className=" h-10 w-20"
// //               src="https://www.nesscoindia.com/Assets/images/logo.webp"
// //               alt="Logo"
// //             />
// //           </div>
// //           <div className="w-1/3 flex justify-end items-center space-x-4">
// //             <FaMailchimp className="text-gray-700 hover:text-gray-800" />
// //             <p
// //               className="text-gray-700 hover:text-gray-800"
// //               style={{ fontFamily: "Montserrat", fontSize: "16px" }}
// //             >
// //               NesscoExample@gmail.com
// //             </p>
// //             <FaTwitter className="text-gray-700 hover:text-gray-800" />
// //             <FaFacebook className="text-gray-700 hover:text-gray-800" />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="bg-white">
// //         <div className="flex items-center font-medium justify-around py-2 md:py-0">
// //           <div className="p-5 md:w-auto w-full flex justify-between">
// //             <span
// //               className="text-2xl md:text-3xl cursor-pointer md:hidden"
// //               onClick={toggleMenu}
// //             >
// //               {open ? <FiX /> : <FiMenu />}
// //             </span>
// //           </div>
// //           <span className={`w-1/3 z-50 md:flex hidden justify-center`}>
// //             <Link to={"/"}>
// //               <img
// //                 className={`h-16 w-30  ${isScrolled ? "block" : "hidden"}`}
// //                 src="https://www.nesscoindia.com/Assets/images/logo.webp"
// //                 alt="Logo"
// //               />
// //             </Link>
// //           </span>
// //           <ul
// //             className={`md:flex hidden uppercase items-center gap-8 font-[Poppins] ${
// //               hoveredItem ? "top-0" : ""
// //             }`}
// //           >
// //             <NavLinks
// //               hoveredItem={hoveredItem}
// //               setHoveredItem={setHoveredItem}
// //             />
// //           </ul>
// //           <span className="w-1/3 md:flex justify-center">
// //             <motion.button
// //               className="bg-[#483d73] hover:bg-red-500 text-white text-lg flex items-center justify-center rounded-md hidden"
// //               initial={{ opacity: 0, x: 100 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.9 }}
// //               whileHover={{ x: -5 }}
// //             >
// //               <motion.span
// //                 initial={{ x: -100 }}
// //                 animate={{ x: 0 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="p-0 md:p-2"
// //               >
// //                 Inquire Now!
// //               </motion.span>
// //               <FiArrowRight className="ml-2" />
// //             </motion.button>
// //           </span>
// //         </div>
// //         {/* Mobile nav */}
// //         <div
// //           className={`md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 transition-transform duration-300 transform ${
// //             open ? "translate-x-0" : "translate-x-full"
// //           }`}
// //         >
// //           <span
// //             className="text-3xl cursor-pointer absolute top-4 right-4"
// //             onClick={toggleMenu}
// //           >
// //             <FiX />
// //           </span>
// //           <ul className="text-center">
// //             <NavLinks
// //               hoveredItem={hoveredItem}
// //               setHoveredItem={setHoveredItem}
// //             />
// //           </ul>
// //         </div>
// //       </div>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// // 14/6/2024
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { FaTwitter, FaFacebook, FaMailchimp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Home from "../Home/Home";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        controls.start({
          height: "60px",
          backgroundColor: "rgba(72, 61, 115, 0.95)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.5 },
        });
      } else {
        setIsScrolled(false);
        controls.start({
          height: "100px",
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      animate={controls}
      initial={{
        height: "100px",
        boxShadow: "none",
      }}
    >
      <div
        className={`py-2 hidden bg-slate-200  ${
          !isScrolled ? "md:block" : isScrolled ? "hidden" : "block"
        } `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:flex justify-between items-center">
          <div className="w-1/3 text-sm flex items-center">
            <Home />
          </div>
          <div className="hidden text-gray-700 font-bold md:block"></div>
          <div className="w-1/3 flex justify-end items-center space-x-4">
            <FaMailchimp className="text-gray-700 hover:text-gray-800" />
            <p
              className="text-gray-700 hidden hover:text-gray-800"
              style={{ fontFamily: "Montserrat", fontSize: "16px" }}
            >
              NesscoExample@gmail.com
            </p>
            <FaTwitter className="text-gray-700 hover:text-gray-800" />
            <FaFacebook className="text-gray-700 hover:text-gray-800" />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 bg-slate-100">
        <div className="flex items-center font-medium justify-center py-2 md:py-1">
          <div className="p-5 md:w-auto w-full flex justify-between">
            <span
              className="z-30 bg-white text-2xl md:text-3xl cursor-pointer md:hidden"
              onClick={toggleMenu}
            >
              {open ? <FiX /> : <FiMenu />}
            </span>
          </div>
          <span
            className={`w-1/4 z-50 md:flex hidden justify-start items-center`}
          >
            <Link to={"/"}>
              <img
                className={`h-12 w-30 ${
                  isScrolled || hoveredItem
                    ? !isScrolled && hoveredItem
                      ? "transform -translate-y-10 block"
                      : "block"
                    : "hidden"
                }`}
                src="https://www.nesscoindia.com/Assets/images/logo.webp"
                alt="Logo"
              />
            </Link>
          </span>
          <ul className="w-3/4 z-40  md:flex hidden uppercase justify-center items-center gap-8 font-[Poppins] relative">
            <NavLinks
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              isScrolled={isScrolled}
            />
          </ul>
          <span className="w-1/3 md:flex justify-center">
            <motion.button
              className="bg-[#483d73] hover:bg-red-500 text-white text-lg flex items-center justify-center rounded-md hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              whileHover={{ x: -5 }}
            >
              <motion.span
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-0 md:p-2"
              >
                Inquire Now!
              </motion.span>
              <FiArrowRight className="ml-2" />
            </motion.button>
          </span>
        </div>
        {/* Mobile nav */}
        <div
          className={`md:hidden fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="bg-white border-t-4 border-black h-screen text-center">
            <NavLinks
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              isScrolled={isScrolled}
              open={open}
              setOpen={setOpen}
            />
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

// Navbar.js
// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
// import { FaTwitter, FaFacebook, FaInstagram, FaVimeoV, FaMailchimp } from "react-icons/fa";
// import { motion, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import Home from "../Home/Home";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const controls = useAnimation();
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//         controls.start({
//           height: "60px",
//           backgroundColor: "rgba(72, 61, 115, 0.95)",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transition: { duration: 0.5 },
//         });
//       } else {
//         setIsScrolled(false);
//         controls.start({
//           height: "100px",
//           backgroundColor: "transparent",
//           boxShadow: "none",
//           transition: { duration: 0.5 },
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [controls]);

//   return (
//     <motion.nav
//       className="fixed top-0 w-full z-50"
//       animate={controls}
//       initial={{
//         height: "100px",
//         boxShadow: "none",
//       }}
//     >
//       <div className={`hidden bg-[rgb(242 242 242 )] ${!isScrolled ? "md:block" : isScrolled ? "hidden" : "block"}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:flex justify-between items-center">
//           <div className="w-1/3 text-sm flex items-center">
//             <span className="sm:inline text-gray-700" style={{ fontFamily: "Montserrat", fontSize: "14px" }}>
//               <Home />
//             </span>
//           </div>
//           <div className="hidden text-gray-700 font-bold md:block">
//             <img
//               className="h-10 w-20"
//               src="https://www.nesscoindia.com/Assets/images/logo.webp"
//               alt="Logo"
//             />
//           </div>
//           <div className="w-1/3 flex justify-end items-center space-x-4">
//             <FaMailchimp className="text-gray-700 hover:text-gray-800" />
//             <p className="text-gray-700 hidden hover:text-gray-800" style={{ fontFamily: "Montserrat", fontSize: "16px" }}>
//               NesscoExample@gmail.com
//             </p>
//             <FaTwitter className="text-gray-700 hover:text-gray-800" />
//             <FaFacebook className="text-gray-700 hover:text-gray-800" />
//           </div>
//         </div>
//       </div>
//       <div className="bg-white">
//         <div className="flex items-center font-medium justify-around py-2 md:py-0">
//           <div className="p-5 md:w-auto w-full flex justify-between">
//             <span className="z-30 bg:white text-2xl md:text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
//               {open ? <FiX /> : <FiMenu />}
//             </span>
//           </div>
//           <span className={`w-1/3 z-50 md:flex hidden justify-center`}>
//             <Link to={"/"}>
//               <img
//                 className={`h-16 w-30 ${isScrolled || hoveredItem ? (!isScrolled && hoveredItem ? "transform -translate-y-14 block" : "block") : "hidden"}`}
//                 src="https://www.nesscoindia.com/Assets/images/logo.webp"
//                 alt="Logo"
//               />
//             </Link>
//           </span>
//           <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] relative">
//             <NavLinks hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
//             <div className="flex items-center">
//               <button className="bg-green-600 text-white py-2 px-4 rounded inline-flex items-center" onClick={() => setHoveredItem("get-a-quote")}>
//                 Get A Quote
//                 <FiArrowRight className="ml-2" />
//               </button>
//             </div>
//           </ul>

//           <ul className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-20 ${open ? "left-0" : "left-[-100%]"}`}>
//             <NavLinks hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} toggleMenu={toggleMenu} />
//             <div className="py-5">
//               <button className="bg-green-600 text-white py-2 px-4 rounded inline-flex items-center">
//                 Get A Quote
//                 <FiArrowRight className="ml-2" />
//               </button>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
