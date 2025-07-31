import { ChevronRight, ShoppingBag } from "lucide-react";
import React, { useState, useEffect } from "react";
import PerfumeNotes2 from "../../PerfumeNotes-2";

const Flipcard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("75ml");
  const [flipped, setFlipped] = useState(false);
  const sizes = ["75ml", "100ml"];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full max-w-[450px] mx-auto ${
        isMobile ? "mt-4" : "h-[500px]"
      } perspective z-10 bg-[#FAF9F7] dark:bg-[#171717] transition-colors duration-300`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } `}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-[#FAF9F7] dark:bg-[#171717] p-4 sm:p-6 space-y-4 flex flex-col justify-between rounded-lg text-[#1C1C1E] dark:text-white">
          <div className="space-y-3">
            <h2
              className={`${
                isMobile ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              } font-semibold`}
            >
              Oud Roses Gift Set
            </h2>
            <p
              className={`italic text-gray-500 dark:text-gray-400 ${
                isMobile ? "text-xs sm:text-sm" : "text-sm"
              }`}
            >
              A luxurious gift experience infused with Oud & Rose.
            </p>
            <div className="h-[1px] bg-gray-200 dark:bg-gray-700"></div>
          </div>

          <div className="flex justify-between items-center">
            <span
              className={`${
                isMobile ? "text-base sm:text-lg" : "text-lg sm:text-xl"
              } font-bold text-[#1C1C1E] dark:text-white`}
            >
              $199.99
            </span>
            <div className="flex items-center border border-black dark:border-white rounded-full overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 sm:px-3 text-base sm:text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
              >
                −
              </button>
              <span className="px-2 sm:px-3 select-none text-sm sm:text-base">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 sm:px-3 text-base sm:text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Select Size:</p>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border transition-all duration-300 ${
                    selectedSize === size
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white scale-105"
                      : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-black dark:hover:border-white hover:scale-105"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="group relative m-auto w-[50%] text-sm sm:text-base font-semibold py-2 px-4 rounded-full overflow-hidden border border-black dark:border-white transition-all hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-white dark:group-hover:text-black group-active:text-white dark:group-active:text-black flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
              ADD TO BAG
            </span>
          </button>

          <div className="overflow-x-auto touch-scroll scrollbar-none">
            <PerfumeNotes2 />
          </div>

          <button
            onClick={() => setFlipped(true)}
            className="mx-auto border border-black dark:border-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center gap-1"
          >
            Discover More <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#FAF9F7] dark:bg-[#171717] p-4 sm:p-6 rounded-lg text-[#1C1C1E] dark:text-white">
          <div className="h-full flex flex-col justify-between space-y-4">
            <div className="text-center space-y-2">
              <h3
                className={`${
                  isMobile ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                } font-bold`}
              >
                Discover Oud Roses
              </h3>
              <p
                className={`italic text-gray-600 dark:text-gray-400 ${
                  isMobile ? "text-xs sm:text-sm" : "text-sm"
                }`}
              >
                A scent that speaks of elegance, romance, and timeless sophistication.
              </p>
            </div>

            <div className="flex-1 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
                  <p className="font-medium text-gray-700 dark:text-gray-300">Fragrance Type</p>
                  <p className="text-gray-600 dark:text-gray-400">Eau de Parfum</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
                  <p className="font-medium text-gray-700 dark:text-gray-300">Sillage</p>
                  <p className="text-gray-600 dark:text-gray-400">Moderate to Strong</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
                  <p className="font-medium text-gray-700 dark:text-gray-300">Occasion</p>
                  <p className="text-gray-600 dark:text-gray-400">Romantic Evenings</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
                  <p className="font-medium text-gray-700 dark:text-gray-300">Season</p>
                  <p className="text-gray-600 dark:text-gray-400">Winter / Fall</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg text-xs sm:text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Main Notes:</span>
                  <span className="text-gray-600 dark:text-gray-400">Oud, Rose, Amber</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Longevity:</span>
                  <span className="text-gray-600 dark:text-gray-400">6-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Dispenser:</span>
                  <span className="text-gray-600 dark:text-gray-400">Spray</span>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Tip: </span>
                  Apply on pulse points for lasting impact. Avoid rubbing after application.
                </p>
              </div>
            </div>

            <button
              onClick={() => setFlipped(false)}
              className="self-center border border-black dark:border-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center gap-1"
            >
              Go Back <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;