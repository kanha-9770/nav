import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { AiOutlineCar, AiOutlineShopping, AiOutlineCompass, AiOutlineDollarCircle, AiOutlineRadarChart, AiOutlineThunderbolt, AiOutlineQuestionCircle } from 'react-icons/ai';
import first from '../../Assests/first.webp';
import second from '../../Assests/bg3.jpg';
import i1 from "../../Asset/i1.jpeg";
import i2 from "../../Asset/i2.jpeg";
import i3 from "../../Asset/i3.jpeg";
import i4 from "../../Asset/i4.jpeg";
import i5 from "../../Asset/i5.jpeg";
import i6 from "../../Asset/i6.jpeg";
import i7 from "../../Asset/i7.jpeg";
import i8 from "../../Asset/i8.jpeg";

const cars = [
  { name: 'i1', image: i1, category: 'Paper Cup Machine' },
  { name: 'i2', image: i2, category: 'Paper Cup Machine' },
  { name: 'i3', image: i3, category: 'Paper Cup Machine' },
  { name: 'i4', image: i4, category: 'Paper Cup Machine' },
  { name: 'i5', image: i5, category: 'Paper Cup Machine' },
  { name: 'i6', image: i6, category: 'Paper Cup Machine' },
  { name: 'i7', image: i7, category: 'Paper Plate Machine' },
  { name: 'i8', image: i8, category: 'Paper Plate Machine' },
  { name: 'a', image: second, category: 'Paper Bowl Machine' },
  { name: 'b', image: second, category: 'Paper Bowl Machine' },
  { name: 'c', image: second, category: 'Paper Bowl Machine' },
  { name: 'd', image: second, category: 'Paper Bowl Machine' },
  { name: 'Cybertruck', image: first, category: 'Paper Plate Machine' },
  { name: 'Help Me Choose', image: second, category: 'Paper Lid Machine' },
  { name: 'a', image: second, category: 'Paper Bag Machine' },
  { name: 'b', image: second, category: 'Paper Straw Machine' },
];

const SidebarLinks = [
  { name: 'Paper Cup Machine', link: '/Paper Cup Machine', icon: <AiOutlineCar /> },
  { name: 'Paper Bowl Machine', link: '/used-cars', icon: <AiOutlineShopping /> },
  { name: 'Paper Plate Machine', link: '/demo-drive', icon: <AiOutlineCompass /> },
  { name: 'Paper Lid Machine', link: '/Paper Lid Machine', icon: <AiOutlineDollarCircle /> },
  { name: 'Paper Bag Machine', link: '/Paper Bag Machine', icon: <AiOutlineRadarChart /> },
  { name: 'Paper Straw Machine', link: '/help-me-charge', icon: <AiOutlineThunderbolt /> },
];

const CarShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState('Paper Cup Machine');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const filteredCars = cars.filter((car) => car.category === hoveredCategory);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % filteredCars.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + filteredCars.length) % filteredCars.length
    );
  };

 
  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  return (
    <div className=" w-full flex flex-col items-center font-medium">
      <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-lg overflow-hidden ">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative px-16">
          {filteredCars.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
              style={{ marginLeft: '20px' }}
            >
              &lt;
            </button>
          )}
          <div className="flex overflow-hidden w-full" ref={containerRef}>
            {filteredCars.slice(currentIndex, currentIndex + 3).map((car, index) => (
              <motion.div
                key={car.name}
                className="group mx-2 mt-10 text-center p-2 w-1/3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-lg"
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
          {filteredCars.length > 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
              style={{ marginRight: '20px' }}
            >
              &gt;
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 p-10 border-l border-gray-300">
          <div className="space-y-6">
            {SidebarLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => {
                  setHoveredCategory(link.name);
                  setCurrentIndex(0);
                }}
                className={`flex items-center justify-start space-x-4 text-lg text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer ${hoveredCategory === link.name ? ' font-semibold' : ' font-normal'
                  }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-40px] w-full">
        <div className="flex justify-center  space-x-2" style={{ width: '75%', marginLeft: '-15rem' }}>
          {filteredCars.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full mx-1 cursor-pointer"
              animate={{
                scale: currentIndex === index ? 1.5 : 1,
                backgroundColor: currentIndex === index ? '#000' : '#aaa',
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;
