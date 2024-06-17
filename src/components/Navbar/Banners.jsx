import React, { useState } from "react";
import { motion } from "framer-motion";
import paperCupMain from "../../Assests/logo.png"; // Main image
import paperCupThumb from "../../Assests/image.png"; // Thumbnail image
import paperBowlMain from "../../Assests/first.webp"; // Main image
import paperBowlThumb from "../../Assests/image.png"; // Thumbnail image
import paperLidMain from "../../Assests/logo.png"; // Main image
import paperLidThumb from "../../Assests/image.png"; // Thumbnail image
import paperBagMain from "../../Assests/first.webp"; // Main image
import paperBagThumb from "../../Assests/image.png"; // Thumbnail image
import paperStrawMain from "../../Assests/logo.png"; // Main image
import paperStrawThumb from "../../Assests/image.png"; // Thumbnail image

const products = [
  { name: "Paper Cup", mainImage: paperCupMain, thumbImage: paperCupThumb },
  { name: "Paper Bowl", mainImage: paperBowlMain, thumbImage: paperBowlThumb },
  { name: "Paper Lid", mainImage: paperLidMain, thumbImage: paperLidThumb },
  { name: "Paper Bag", mainImage: paperBagMain, thumbImage: paperBagThumb },
  {
    name: "Paper Straw",
    mainImage: paperStrawMain,
    thumbImage: paperStrawThumb,
  },
];

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="flex w-full flex-col md:flex-row justify-center items-center p-6 min-h-screen">
      <div className="absolute left-0 bottom-0 z-0">
        <img
          style={{ filter: "blur(1px)" }}
          src="https://m.media-amazon.com/images/I/61bpUtTPwrL.jpg"
          alt="Background Image"
          className="h-40 w-full brightness-80 object-cover"
        />
      </div>
      <motion.div
        className="flex justify-center items-center w-full md:w-2/3 h-[60vh] rounded-lg overflow-hidden"
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
      <div className="flex flex-col items-center md:items-start md:w-1/4 gap-6 mt-8 md:mt-0">
        {products.map((product) => (
          <motion.div
            key={product.name}
            onClick={() => setSelectedProduct(product)}
            className={`flex items-center gap-4 cursor-pointer p-2 rounded-lg transition-all duration-300 ${
              selectedProduct.name === product.name
                ? "bg-blue-100"
                : "hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.thumbImage}
              alt={product.name}
              className="w-12 h-12 rounded-full object-contain border border-gray-300"
            />
            <p
              className={`text-lg font-medium ${
                selectedProduct.name === product.name
                  ? "text-blue-600"
                  : "text-gray-800"
              } hover:text-blue-600`}
            >
              {product.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
