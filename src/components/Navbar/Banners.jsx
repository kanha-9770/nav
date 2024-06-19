import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import paperCupMain from "../../Assests/logo.png"; // Main image
import paperCupThumb from "../../Assests/bg1.jpg"; // Thumbnail image
import paperBowlMain from "../../Assests/first.webp"; // Main image
import paperBowlThumb from "../../Assests/bg-1.webp"; // Thumbnail image
import paperLidMain from "../../Assests/logo.png"; // Main image
import paperLidThumb from "../../Assests/bg-2.jpg"; // Thumbnail image
import paperBagMain from "../../Assests/first.webp"; // Main image
import paperBagThumb from "../../Assests/bg-bag.jpg"; // Thumbnail image
import paperStrawMain from "../../Assests/logo.png"; // Main image
import paperStrawThumb from "../../Assests/bg-4.webp"; // Thumbnail image
import bg_1 from "../../Assests/bg-1.webp";
import bg1 from "../../Assests/bg1.jpg";
import bg2 from "../../Assests/bg-2.jpg";
import bg4 from "../../Assests/bg-4.webp";
import straw from "../../Assests/straw.jpg";
import bgbag from "../../Assests/bg-bag.jpg";

const products = [
  {
    name: "Paper Cup",
    mainImage: paperCupMain,
    thumbImage: paperCupThumb,
    bgi: bg1,
  },
  {
    name: "Paper Bowl",
    mainImage: paperBowlMain,
    thumbImage: paperBowlThumb,
    bgi: bg_1,
  },
  {
    name: "Paper Lid",
    mainImage: paperLidMain,
    thumbImage: paperLidThumb,
    bgi: bg2,
  },
  {
    name: "Paper Bag",
    mainImage: paperBagMain,
    thumbImage: paperBagThumb,
    bgi: bgbag,
  },
  {
    name: "Paper Straw",
    mainImage: paperStrawMain,
    thumbImage: paperStrawThumb,
    bgi: straw,
  },
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    thumbnailRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, { scale: 1 }, {
          scale: 1.05,
          duration: 0.3,
          paused: true,
          ease: "power1.inOut",
          overwrite: "auto",
        });
      }
    });
  }, [thumbnailRefs]);

  const handleMouseEnter = (index) => {
    gsap.to(thumbnailRefs.current[index], { scale: 1.2, duration: 0.3 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(thumbnailRefs.current[index], { scale: 1, duration: 0.3 });
  };

  return (
    <>
      <div className="md:h-[60vh] md:w-[85vw] flex flex-col md:flex-row justify-center items-center mt-12">
        <div className="absolute hidden md:flex flex-col left-36 bottom-0 z-30">
          <img
            style={{
              filter: "blur(1px)",
            }}
            src={selectedProduct.bgi}
            alt={selectedProduct.name}
            className="bg-transparent h-48 z-30 w-full brightness-80 object-cover"
          />
          <p className="flex justify-center items-center mb-2 text-slate-400 hover:text-cyan-800 font-extrabold">
            NESSCO INDIA{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center h-screen">
          <motion.div
            className="flex justify-center items-center md:ml-80 md:w-[40vw] md:w-3/3 h-[50vh] gap-2 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={selectedProduct.mainImage}
              alt={selectedProduct.name}
              className="object-contain h-full"
            />
          </motion.div>
          <div className="w-auto flex justify-between items-center mt-4">
            <button className="mr-2">akash1</button>
            <button className="ml-2">akash2</button>
          </div>
        </div>
        <div className="flex md:flex-col items-center md:items-start md:w-1/4 md:gap-0 mt-8 md:mt-0">
          {products.map((product, index) => (
            <motion.div
              className="flex flex-row justify-center items-center"
              whileHover={{ scale: 1.05 }}
              key={product.name}
              ref={el => thumbnailRefs.current[index] = el}
              onMouseEnter={() => {
                setSelectedProduct(product);
                handleMouseEnter(index);
              }}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <motion.div
                className={`flex flex-wrap justify-between gap-2 cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                  selectedProduct.name === product.name
                    ? "text-blue-100"
                    : "hover:text-gray-200"
                }`}
              >
                <img
                  src={product.thumbImage}
                  alt={product.name}
                  className="w-12 h-12 rounded-full object-contain border border-gray-300"
                />
                <p
                  className={`text-lg font-medium flex justify-center items-center ${
                    selectedProduct.name === product.name
                      ? "text-blue-600"
                      : "text-gray-800"
                  } hover:text-blue-600`}
                >
                  {product.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
