import React, { useState } from "react";
import { motion } from "framer-motion";
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
  { name: "Inventory", link: "/inventory" },
  { name: "Used Cars", link: "/used-cars" },
  { name: "Demo Drive", link: "/demo-drive" },
  { name: "Trade-in", link: "/trade-in" },
  { name: "Compare", link: "/compare" },
  { name: "Help Me Charge", link: "/help-me-charge" },
  { name: "Fleet", link: "/fleet" },
  { name: "Semi", link: "/semi" },
];

const CarShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredCars = cars.filter((car) => car.category === hoveredCategory);

  return (
    <div className="bg-white mt-auto  md:mt-0 md:h-[70vh] w-screen flex flex-col md:flex-row md:justify-center p-4 md:p-6 text-sm font-medium">
      <div className="w-full md:w-3/4 md:ml-40 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-8 md:gap-6 ">
        {(filteredCars.length > 0 ? filteredCars : cars).map((car, index) => (
          <motion.div
            key={car.name}
            className="group md:h-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.img
              src={car.image}
              alt={car.name}
              className="w-full h-32 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-md font-bold mt-2">{car.name}</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href={`${car.link}/learn`}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Learn
              </a>
              <a
                href={`${car.link}/order`}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Order
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block border-l mt-8 border-gray-400 h-auto md:h-[60vh] md:mr-8"></div>
      <div className="w-full md:w-1/4 mt-8 md:ml-6 flex flex-col items-start gap-4 md:gap-7">
        {SidebarLinks.map((link) => (
          <div
            key={link.name}
            onMouseEnter={() => setHoveredCategory(link.name)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="text-gray-800 hover:text-blue-600 text-base transition-colors duration-300 cursor-pointer"
          >
            <p>{link.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarShowcase;
