//Image Gallery page
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MagnifierZoom from "./MagnifierZoom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CenterImageGalleryCopy = ({ images, activeIndex, setActiveIndex }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="lg:mt-10">
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="w-4 h-4 text-yellow-500 fill-yellow-400"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1 font-cinzel">
            (85 reviews)
          </span>
        </div>

        {/* Product Name */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-lobster">
          Musk & Roses
        </h1>

        {/* Categories */}
        <p className="text-xs sm:text-sm font-mono text-gray-500 mb-4">
          Categories: PERFUMES, OCCIDENTAL FRAGRANCE
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectFade]}
        effect="fade"
        // autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        // navigation
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <MagnifierZoom
                src={img}
                zoom={2}
                lensSize={180}
                className="object-contain w-full h-full"
              />
            </div>
            {/* Badge Overlay */}
            {index === 0 && (
              <div className="absolute top-7 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <img
                  src="https://www.svgrepo.com/show/527045/fire.svg"
                  alt="bestseller"
                  className="w-3.5 h-3.5"
                />
                Bestseller
              </div>
            )}

            {index === 1 && (
              <div className="absolute top-7 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <img
                  src="https://www.svgrepo.com/show/523816/star-fall-minimalistic-2.svg"
                  alt="5-star"
                  className="w-3.5 h-3.5 invert-100"
                />
                5-Star Rated
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Additional Info */}
      {/* <div className="text-xs space-y-1 text-gray-600 mt-4">
        <p>
          <strong>Fragrance Type:</strong> Eau de Parfum
        </p>
        <p>
          <strong>Fragrance Category:</strong> Occidental, Unisex
        </p>
        <p>
          <strong>Dispenser Type:</strong> Spray
        </p>
        <p>🚚 Shipping Information</p>
        <p>🎁 Complimentary Gift-Wrapping</p>
        <p>🔗 Share the love</p>
      </div> */}
    </div>
  );
};

export default CenterImageGalleryCopy;
