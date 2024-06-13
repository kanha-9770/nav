import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCogs, FaIndustry, FaToolbox, FaBoxOpen, FaRobot } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import paperCupMachineImg from "../../Assests/first.webp";
import machineComponentsImg from "../../Assests/machineComponents.webp";
import industrialGradeImg from "../../Assests/industrialGrade.webp";
import maintenanceToolsImg from "../../Assests/first.webp";
import integrationInstrImg from "../../Assests/machineComponents.webp";
import packagingSolutionsImg from "../../Assests/machineComponents.webp";
import automationOptionsImg from "../../Assests/machineComponents.webp";
import { IoIosArrowForward } from "react-icons/io";

const images = {
  "Machine Components": machineComponentsImg,
  "Industrial Grade": industrialGradeImg,
  "Maintenance Tools": maintenanceToolsImg,
  "Integration Instr.": integrationInstrImg,
  "Packaging Solutions": packagingSolutionsImg,
  "Automation Options": automationOptionsImg
};

const PaperCupMachineServices = () => {
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <div className="md:h-[65vh] md:w-[80vw] flex flex-wrap justify-between items-start p-4 bg-white p-6 text-sm font-medium mt-18">
      <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
        <FeatureCard
          icon={<FaCogs />}
          title="Machine Components"
          description="Quality components for efficient paper cup Machine Production."
          setHoveredItem={setHoveredItem}
        />
        <FeatureCard
          icon={<FaIndustry />}
          title="Industrial Grade"
          description="Built to withstand rigorous industrial demands."
          setHoveredItem={setHoveredItem}
        />
        <FeatureCard
          icon={<FaToolbox />}
          title="Maintenance Tools"
          description="Essential tools for easy maintenance and repair."
          setHoveredItem={setHoveredItem}
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <FeatureCard
          icon={<MdSettings />}
          title="Integration Instr."
          description="Seamless integration guidelines for your machines."
          setHoveredItem={setHoveredItem}
        />
        <FeatureCard
          icon={<FaBoxOpen />}
          title="Packaging Solutions"
          description="Innovative packaging solutions for your paper products."
          setHoveredItem={setHoveredItem}
        />
        <FeatureCard
          icon={<FaRobot />}
          title="Automation Options"
          description="Explore automation features to enhance ."
          setHoveredItem={setHoveredItem}
        />
      </div>
      <div className="w-full lg:w-1/3 p-2 flex items-center justify-center">
      <div className="mt-0 border-l border-gray-400 h-[60vh] md:mr-4"></div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden"
        >
          <img src={hoveredItem ? images[hoveredItem] : paperCupMachineImg} alt="Paper Cup Machine" className="w-full h-30" />
          <div className="p-4">
            <h3 className="text-base font-semibold	 mb-2">
              Explore our Paper Cup Machines
            </h3>
            <p className="text-gray-700">
              Discover our range of paper cup machines designed for your production needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, setHoveredItem }) => {
  return (
    <motion.div
      onHoverStart={() => setHoveredItem(title)}
      onHoverEnd={() => setHoveredItem("")}
      className="flex hover:bg-[#EBE7F1] items-start p-4 rounded-lg mb-4"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[#FBC02D] bg-[#FFF9C4] h-30 w-30 p-4 text-3xl mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-bold mb-1">
          {title} <IoIosArrowForward className="inline-block text-base ml-1" />
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default PaperCupMachineServices;
