import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// import CompleteOrderButton from "../TruckOrderButton/CompleteOrderButton ";
const tabContentVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const RightStickyInfo = () => {
  const [selectedSize, setSelectedSize] = useState("Standard");

  return (
    <div className="w-full lg:w-1/2 h-auto lg:h-screen overflow-y-auto flex items-start px-4 sm:px-6 lg:px-10 pt-6 lg:py-12 bg-white/85 backdrop-blur scroll-smooth z-10 lg:sticky lg:top-0">
      <div className="space-y-6 max-w-md w-full my-auto">
        {/* Overview / Header */}
        <div className="space-y-3">
          <h1 className="font-pacifico text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            The Dakhoon Collection
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 font-cinzel">
            Enhancing leisure with a range of traditional blended Dukhoons.
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 font-cinzel">
            150.00د.إ
          </p>

          {/* Dropdown */}
          <Select.Root value={selectedSize} onValueChange={setSelectedSize}>
            <Select.Trigger className="font-merriweather w-full inline-flex items-center justify-between rounded-full border border-gray-300 bg-white px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm text-gray-900 shadow-md font-body focus:outline-none focus:ring-2 focus:ring-black transition">
              <Select.Value placeholder="Select Set Size" />
              <Select.Icon className="text-gray-500">
                <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg z-50 font-merriweather">
                <Select.Viewport className="p-1">
                  <Select.Item
                    value="Standard"
                    className="cursor-pointer rounded-md px-4 py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 outline-none font-body"
                  >
                    <Select.ItemText>Standard</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="Deluxe"
                    className="cursor-pointer rounded-md px-4 py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 outline-none font-body"
                  >
                    <Select.ItemText>Deluxe</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            {/* 1st button */}
            <button className="group relative w-full font-cinzel bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium shadow text-sm sm:text-base overflow-hidden border-2 border-black transition-all">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Add to Cart
              </span>
            </button>

            {/* <CompleteOrderButton /> */}
            <button className="group relative w-full font-cinzel text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium shadow-sm text-sm sm:text-base overflow-hidden border-2 border-black transition-all">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Buy Now
              </span>
            </button>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full font-sans mb-3">
          {/* Tab Headers */}
          <TabsList className="grid grid-cols-3 w-full bg-white border border-gray-200 rounded-full gap-1 shadow-inner h-fit font-cinzel">
            <TabsTrigger
              value="details"
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium"
            >
              Highlights
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium"
            >
              Usage
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Details */}
          <TabsContent
            value="details"
            className="px-2 sm:px-4 text-gray-800 space-y-6 leading-relaxed font-sans"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout // enables smooth height transition between tabs
            >
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-serif font-merriweather">
                  Enhancing leisure with a range of traditional blended
                  Dukhoons.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Gift Set Contains
                </h3>
                <ul className="font-merriweather list-disc font-serif list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Oud Ma’attar Majalis</li>
                  <li>Mariya Oud Mubakhar – 36 Grams</li>
                  <li>Bakhoor Ahmed – 20 Tabs</li>
                  <li>Khashab Al Oud</li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>

          {/* Tab 2: Highlights */}
          <TabsContent
            value="ingredients"
            className="px-2 sm:px-4 text-xs sm:text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout // enables smooth height transition between tabs
            >
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Key Highlights
                </h3>
                <ul className="list-disc font-serif list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>Authentic Arabic incense experience</li>
                  <li>Curated variety for traditional rituals</li>
                  <li>Ideal as a luxury gift set</li>
                </ul>
              </div>
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Ingredients
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-serif">
                  Oud wood, perfumed resin blends, natural oils (specific
                  composition varies by product in the set).
                </p>
              </div>
            </motion.div>
          </TabsContent>

          {/* Tab 3: Usage */}
          <TabsContent
            value="usage"
            className="px-2 sm:px-4 text-xs sm:text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout // enables smooth height transition between tabs
            >
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  How to Use
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-serif">
                  Place Dukhoon on a charcoal or electric burner. Let the smoke
                  fill your space or gently waft over clothing.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Best Time to Use
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-serif">
                  Evenings, cultural gatherings, special occasions
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                  Packaging
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-serif">
                  Beautifully arranged in a decorative gift box, ideal for
                  gifting or personal indulgence.
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RightStickyInfo;
