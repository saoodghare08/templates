import React from "react";
import { motion } from "framer-motion";

const relatedProducts = [
  {
    name: "Ahl",
    image: "src/assets/ahl.jpg",
    price: "AED 190.00",
  },
  {
    name: "Marj",
    image: "src/assets/Marj/Marj-POM.jpg",
    price: "AED 165.00",
  },
  {
    name: "Kaaf",
    image: "src/assets/kaaf.png",
    price: "AED 210.00",
  },
  {
    name: "Shaikha Hind",
    image: "src/assets/al shaikha hind.jpg",
    price: "AED 175.00",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const RelatedProductsSection = () => {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 font-serif text-[#1C1C1E] dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-cinzel text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-200 dark:border-[#6E6E73] pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        You May Also Like
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        variants={containerVariants}
      >
        {relatedProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className=" dark:border-[#6E6E73] dark:bg-[#181818] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white/80 backdrop-blur"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-52 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold font-cinzel">
                {product.name}
              </h3>
              <p className="text-sm font-merriweather">{product.price}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="font-cinzel w-full bg-black text-sm font-medium py-2 rounded-full hover:bg-[#181818] transition-colors text-white"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RelatedProductsSection;
