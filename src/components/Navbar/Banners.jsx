import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineCar,
  AiOutlineShopping,
  AiOutlineDollarCircle,
  AiOutlineCompass,
  AiOutlineQuestionCircle,
  AiOutlineThunderbolt,
  AiOutlineRadarChart,
} from "react-icons/ai";
import first from "../../Assests/first.webp";
import second from "../../Assests/first.webp";

const cars = [
  {
    name: "Model S",
    image: first,
    category: "Inventory",
  },
  {
    name: "Model 3",
    image: second,
    category: "Inventory",
  },
  {
    name: "Model X",
    image: first,
    category: "Used Cars",
  },
  {
    name: "Model Y",
    image: second,
    category: "Used Cars",
  },
  {
    name: "Cybertruck",
    image: first,
    category: "Demo Drive",
  },
  {
    name: "Help Me Choose",
    image: second,
    category: "Trade-in",
  },
];

const SidebarLinks = [
  { name: "Inventory", link: "/inventory", icon: <AiOutlineCar /> },
  { name: "Used Cars", link: "/used-cars", icon: <AiOutlineShopping /> },
  { name: "Demo Drive", link: "/demo-drive", icon: <AiOutlineCompass /> },
  { name: "Trade-in", link: "/trade-in", icon: <AiOutlineDollarCircle /> },
  { name: "Compare", link: "/compare", icon: <AiOutlineRadarChart /> },
  { name: "Help Me Charge", link: "/help-me-charge", icon: <AiOutlineThunderbolt /> },
  { name: "Fleet", link: "/fleet", icon: <AiOutlineCar /> },
  { name: "Semi", link: "/semi", icon: <AiOutlineQuestionCircle /> },
];

const CarShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const filteredCars = cars.filter((car) => car.category === hoveredCategory);
  return (
    <div className="bg-gray-100  w-screen flex flex-col items-center  font-medium">
      <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-lg overflow-hidden bg-white">
        <div className="w-full md:w-1/4 p-4 border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4 text-center">SUVs & Cars</h2>
          <div className="space-y-4">
            {SidebarLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => setHoveredCategory(link.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex items-center space-x-2 text-base text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer ${hoveredCategory === link.name ? "font-bold" : ""}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full md:w-3/4 p-4 overflow-y-auto max-h-[80vh]">
          <div className="w-full mb-4">
            <h1 className="text-2xl font-bold text-center">Capable, Convenient, and Versatile</h1>
            <p className="text-center text-md text-blue-600 mt-2 cursor-pointer">See the Ford Family of SUVs & Cars</p>
          </div>
          {(filteredCars.length > 0 ? filteredCars : cars).map((car, index) => (
            <motion.div
              key={car.name}
              className="group md:h-24 text-center p-2 md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-32 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-lg font-bold mt-2">{car.name}</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href={`${car.link}/learn`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 relative"
                >
                  Learn
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
                <a
                  href={`${car.link}/order`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 relative"
                >
                  Order
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;