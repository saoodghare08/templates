import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import CenterImageGallery from "./components/inner/CenterImageGallery";
import StickyCartBar from "./components/inner/StickyCartBar";
import ProductAccordian from "./components/inner/ProductAccordian";
import RelatedProductsSection from "./components/inner/RelatedProductsSection";

const Theme5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Standard");

  const images = [
    "src/assets/dakhoon-collection.jpg",
    "src/assets/dukhoon-collection-1.jpg",
    "src/assets/ahl-box.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-[#FAF6EE] to-[#F7F2E6]">
      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[0]}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-pacifico text-5xl lg:text-7xl"
            >
              The Dakhoon Collection
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-cinzel text-lg lg:text-xl"
            >
              Traditional Luxury Fragrances
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Gallery */}
          <div className="space-y-8">
            <CenterImageGallery
              images={images}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                {
                  label: "Handcrafted",
                  value: "100%",
                },
                {
                  label: "Reviews",
                  value: "4.9★",
                },
                {
                  label: "Authentic",
                  value: "UAE",
                },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/80 backdrop-blur rounded-lg">
                  <p className="font-cinzel text-lg">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-pacifico text-3xl lg:text-4xl text-gray-900">
                The Dakhoon Collection
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(120 reviews)</span>
              </div>
              <p className="mt-4 font-cinzel text-2xl">150.00د.إ</p>
            </div>

            {/* Product Features */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-lg">Collection Includes</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Oud Ma'attar Majalis",
                  "Mariya Oud Mubakhar",
                  "Bakhoor Ahmed",
                  "Khashab Al Oud",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full" />
                    <span className="text-sm font-merriweather">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full bg-black text-white font-cinzel py-4 rounded-full hover:bg-gray-900 transition">
                Add to Cart
              </button>
              <button className="w-full border-2 border-black text-black font-cinzel py-4 rounded-full hover:bg-black hover:text-white transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-24 space-y-16">
          <ProductAccordian />
          <RelatedProductsSection />
        </div>
      </div>

      <StickyCartBar
        image={images[0]}
        name="Dakhoon Collection"
        price="150"
      />
    </div>
  );
};

export default Theme5;