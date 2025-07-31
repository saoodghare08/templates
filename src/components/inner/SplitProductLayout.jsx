import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import RightStickyInfo from "./RightStickyInfo";

// const images = [
//   "src/assets/dakhoon-collection.jpg",
//   "src/assets/dukhoon-collection-1.jpg",
//   "src/assets/dukhoon-collection.jpg",
// ];
const images = [
  "src/assets/dakhoon-collection.jpg",
  "src/assets/dukhoon-collection-1.jpg",
  "src/assets/dukhoon-collection.jpg",
];

const bgColors = ["bg-amber-500", "bg-white", "bg-white"];

const SplitProductLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${bgColors[activeIndex]} flex flex-col lg:flex-row`}
    >
      {/* Changed to flex-col on mobile, flex-row on lg screens */}
      {/* Swiper taking full width on mobile, 50% on lg screens */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        speed={1500}
        mousewheel
        autoplay={{ delay: 3000 }}
        modules={[Mousewheel, EffectFade, Autoplay]}
        effect="fade"
        className="h-[50vh] lg:h-screen w-full lg:w-1/2"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="w-full h-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full transition-transform duration-1000 ease-in-out"
              />

              {/* Badge Overlay */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <img
                    src="https://www.svgrepo.com/show/527045/fire.svg"
                    alt="bestseller"
                    className="w-3.5 h-3.5"
                  />
                  Bestseller
                </div>
              )}

              {index === 1 && (
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <img
                    src="https://www.svgrepo.com/show/523816/star-fall-minimalistic-2.svg"
                    alt="5-star"
                    className="w-3.5 h-3.5 invert-100"
                  />
                  5-Star Rated
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Side Sticky Product Info */}
      <RightStickyInfo />
    </div>
  );
};

export default SplitProductLayout;
