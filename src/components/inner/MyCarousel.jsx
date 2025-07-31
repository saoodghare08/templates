import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import MagnifierZoom from "./MagnifierZoom";
// import MagnifierZoom from "../components/inner/MagnifierZoom";

const MyCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
  
    "src/assets/Marj/Marj-POM.jpg",
    "src/assets/Marj/Marj-main.jpg",
  ];

  // Handle dynamic screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-2 w-full">
      {/* Thumbnails */}
      <div
        className={`flex ${
          isMobile ? "flex-row overflow-x-auto w-full" : "h-[450px] w-20"
        } gap-2 scrollbar-thin scrollbar-thumb-gray-300`}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={isMobile ? 4.5 : 6}
          direction={isMobile ? "horizontal" : "vertical"}
          watchSlidesProgress
          className="thumbs-swiper w-[300px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumb ${index}`}
                className="w-16 h-16 object-cover rounded border border-gray-200 cursor-pointer hover:border-blue-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Swiper */}
      <div className="w-full max-w-md sm:max-w-lg h-[400px] sm:h-[500px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          // autoplay={{ delay: 3000 }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          className="main-swiper h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <MagnifierZoom
                  src={image}
                  zoom={2}
                  lensSize={150}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyCarousel;
