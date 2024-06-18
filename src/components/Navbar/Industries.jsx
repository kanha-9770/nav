import React from "react";
import first from "../../Assests/first.webp";
import { motion } from "framer-motion";

import { FaCogs, FaRecycle, FaChartLine, FaIndustry } from "react-icons/fa";

const Industries = () => {
  return (
    <div className="max-w-screen-xl  md:mt-14 mx-auto mt-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 md:h-[65vh] ">
      <motion.div
        className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-blue-100 p-6 rounded-lg relative">
          <img
            src={first}
            alt="High-Speed Production"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <span className="absolute top-4 left-4 bg-purple-500 text-white px-2 py-1 rounded-full">
            Model A1
          </span>
          <h2 className="text-lg font-semibold">High-Speed Production</h2>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg relative">
          <img
            src={first}
            alt="Precision Cutting"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <span className="absolute top-4 left-4 bg-pink-500 text-white px-2 py-1 rounded-full">
            Model B2
          </span>
          <h2 className="text-lg font-semibold">Precision Cutting</h2>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg relative">
          <img
            src={first}
            alt="Automated Operations"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full">
            Model C3
          </span>
          <h2 className="text-lg font-semibold">Automated Operations</h2>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-white hover:bg-[#EBE7F1] p-2 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Model D4</h3>
            <p className="text-sm mt-0">
              Ideal for small-scale production with high efficiency.
            </p>
          </div>
          <div className="bg-white hover:bg-[#EBE7F1] p-2 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Model E5</h3>
            <p className="text-sm mt-0">
              Designed for medium-scale operations with precision control.
            </p>
          </div>
          <div className="bg-white  hover:bg-[#EBE7F1] p-2 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Model F6</h3>
            <p className="text-sm mt-0">
              Perfect for large-scale production with automated features.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white hover:bg-[#EBE7F1] p-1 rounded-lg flex items-center  ">
          <FaCogs className="w-12 h-12 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Advanced Engineering</h3>
            <p className="text-sm mt-0">
              State-of-the-art technology for superior performance.
            </p>
          </div>
        </div>
        <div className="bg-white hover:bg-[#EBE7F1] p-3 rounded-lg flex items-center ">
          <FaRecycle className="w-12 h-12 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Eco-Friendly Design</h3>
            <p className="text-sm mt-0">
              Sustainable and energy-efficient components.
            </p>
          </div>
        </div>
        <div className="bg-white hover:bg-[#EBE7F1] p-3 rounded-lg flex items-center ">
          <FaChartLine className="w-12 h-12 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">High Efficiency</h3>
            <p className="text-sm mt-0">Maximized output with minimal waste.</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full border-t border-gray-300 lg:hidden"></div>

      <div className="lg:col-span-4 text-center mt-0 flex justify-center items-center">
        {/* Add any additional content here if needed */}
      </div>
    </div>
  );
};

export default Industries;
