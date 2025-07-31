import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MagnifierZoom from "./MagnifierZoom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CenterImageGallery = ({ images, activeIndex, setActiveIndex }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="w-full max-w-md h-[400px] sm:h-[500px] relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectFade]}
        effect="fade"
        // autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        // navigation
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <MagnifierZoom src={img} zoom={2} lensSize={180} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CenterImageGallery;
