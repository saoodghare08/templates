"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { ChevronRight, ShoppingBag } from "lucide-react";
import PerfumeNotes2 from "./PerfumeNotes-2";

const Theme7 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("75ml");
  const [flipped, setFlipped] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleResize = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    "src/assets/Giftset-banner/Bidun-esam-giftset.jpg",
    "src/assets/Giftset-banner/dakhoon-collection-gift-set.jpg",
    "src/assets/Giftset-banner/Ihdakhaas banner.jpg",
  ];

  const sizes = ["75ml", "100ml"];

  return (
    <div className="relative min-h-screen w-full overflow-x-auto scrollbar-none">
      {/* Background Swiper */}
      <div className={`${isMobile ? "h-[35vh]" : "h-screen"} relative`}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Thumbs]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-full"
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setActiveIndex(realIndex);
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Card */}
      <div
        className={`${
          isMobile
            ? "relative w-[90%] mx-auto -mt-8"
            : "absolute top-1/2 right-8 transform -translate-y-1/2 w-[400px]"
        } perspective z-10`}
      >
        <div
          className={`relative transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          } rounded-2xl shadow-2xl`}
        >
          {/* Front Side */}
          <div className="h-fit inset-0 backface-hidden bg-white p-6 md:px-8 md:pb-8 md:pt-6 space-y-4 flex flex-col justify-center rounded-2xl">
            <div className="space-y-3">
              <h2 className={`${isMobile ? "text-2xl" : "text-3xl"} font-semibold text-gray-900`}>
                Oud Roses Gift Set
              </h2>
              <p className={`italic text-gray-500 ${isMobile ? "text-xs" : "text-sm"}`}>
                A luxurious gift experience infused with Oud & Rose.
              </p>
              <div className="h-[1px] bg-gray-200"></div>
            </div>

            {/* Swiper Thumbnail Preview */}
              <div className="w-full h-16">
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress
                  slidesPerView={images.length}
                  spaceBetween={10}
                  className="h-full"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`relative h-full w-full rounded-md overflow-hidden`}
                      >
                        <img
                          src={src}
                          alt={`Thumb ${index}`}
                          className={`w-full h-full object-cover rounded-md border transition-all duration-300 ${
                            activeIndex === index
                              ? "border-black scale-[1.05] shadow-[0_0_0_2px_#000] ring-2 ring-black"
                              : "border-gray-300 hover:border-black"
                          }`}
                        />
                        {activeIndex === index && (
                          <div className="absolute inset-0 animate-pulse border-2 border-black rounded-md pointer-events-none"></div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            <div className="flex justify-between items-center">
              <span className={`${isMobile ? "text-lg " : "text-2xl"} font-bold text-gray-800`}>$199.99</span>
              <div className="flex items-center border border-black rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 text-lg hover:bg-black hover:text-white transition"
                >
                  −
                </button>
                <span className="px-1 select-none">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 text-lg hover:bg-black hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Select Size:</p>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-black text-white border-black scale-105"
                        : "border-gray-300 text-gray-600 hover:border-black hover:scale-105"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="group relative w-full text-base font-semibold py-2 px-4 rounded-full overflow-hidden border border-black transition-all hover:scale-[1.05] active:scale-[0.98]">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
              <span className="relative z-10 group-hover:text-white group-active:text-white flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                ADD TO BAG
              </span>
            </button>

            <div className="overflow-x-auto touch-scroll scrollbar-none">
              <PerfumeNotes2 />
            </div>

            <button
              onClick={() => setFlipped(true)}
              className="mt-2 mx-auto border border-black px-4 py-2 text-xs rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-1"
            >
              Discover More <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white p-6 md:px-8 md:pb-8 md:pt-6 rounded-2xl">
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 playfair-display-font">
                  Discover Oud Roses
                </h3>
                <p className="italic text-gray-600 text-sm md:text-base">
                  "A scent that speaks of elegance, romance, and timeless
                  sophistication."
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">Fragrance Type</p>
                    <p className="text-gray-600">Eau de Parfum</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">Sillage</p>
                    <p className="text-gray-600">Moderate to Strong</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">Occasion</p>
                    <p className="text-gray-600">Romantic Evenings</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">Season</p>
                    <p className="text-gray-600">Winter / Fall</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-xs md:text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Main Notes:</span>
                    <span>Oud, Rose, Amber</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Longevity:</span>
                    <span>6-8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dispenser:</span>
                    <span>Spray</span>
                  </div>
                </div>

                <div className="bg-black/5 p-3 rounded-lg text-xs md:text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Tip: </span>
                    Apply on pulse points for lasting impact. Avoid rubbing
                    after application.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setFlipped(false)}
                className="self-center border border-black px-6 py-2 text-sm rounded-full 
                hover:bg-black hover:text-white transition-all flex items-center gap-1"
              >
                Go Back <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme7;
