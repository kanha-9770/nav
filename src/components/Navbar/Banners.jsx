import React, { useState } from "react";
import { motion } from "framer-motion";
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
  return (
    <>
      <div className="md:h-[60vh] md:w-[85vw] flex  flex-col md:flex-row justify-center items-center mt-12 ">
        <div className="absolute hidden md:flex flex-col left-36 bottom-0 z-30">
          <img
            style={{
              filter: "blur(1px)",
            }}
            src={selectedProduct.bgi}
            alt={selectedProduct.name}
            className="bg-transparent h-48 z-30 w-full brightness-80 object-cover"
          />
          <p className="flex justify-center items-center mb-2 text-slate-400 hover:text-cyan-800  font-extrabold">
            NESSCO INDIA{" "}
          </p>
        </div>

        <motion.div
          className="flex justify-center items-center md:ml-80 md:w-[40vw] md:w-3/3 h-[50vh] rounded-lg overflow-hidden"
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
        <div className="flex md:flex-col items-center md:items-start md:w-1/4 md:gap-0 mt-8 md:mt-0">
          {products.map((product) => (
            <motion.div
              className="flex flex-row justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                key={product.name}
                onMouseEnter={() => setSelectedProduct(product)}
                className={`flex flex-wrap justify-between gap-2 cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                  selectedProduct.name === product.name
                    ? "text-blue-100"
                    : "hover:text-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.thumbImage}
                  alt={product.name}
                  className="w-12 h-12 rounded-full object-contain border border-gray-300"
                />
                <p
                  className={`text-lg font-medium flex justify-center items-center${
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
