import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RightHalf from "./righthalf";

const images = [
  "src/assets/zumar/zumar-1.jpg",
  "src/assets/zumar/zumar-2.jpg",
  "src/assets/zumar/zumar-3.jpg",
  "src/assets/zumar/zumar-box.jpg",
  "src/assets/zumar/zumar-open-box.jpg",
];

const bgColors = [
  "bg-[#e05301]",
  "bg-[#753917]",
  "bg-[#b38d47]",
  "bg-white",
  "bg-white",
];

const modalVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeInOut" } },
};

const SplitProductTheme = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  const notes = [
    {
      type: "Top Notes - Pear and Saffron",
      description: "The top notes open with a tantalizing duet of saffron and pear, offering an inviting sweetness and warmth that immediately commands attention.",
      image: "src/assets/zumar/Pear and Saffron.jpg",
    },
    {
      type: "Heart Notes - Rose and Honey",
      description: "Relax and let yourself be pampered as the earthy scent of patchouli calms your emotions. You’re being welcomed further into the heart with a festive bouquet of fragrant roses, saffron, and jasmine. The vetiver in it will impart a harmonious, mystical quality to you. A jolt of cinnamon is added, which further envelops you inside the cashmere woods’ caressing warmth. Blending orange blossom’s floral-animal undertones with other clean elements to create a fresh aroma. Treat yourself to the splendor that is all around you.",
      image: "src/assets/zumar/Rose and Honey.jpg",
    },
    {
      type: "Base Notes - Oud Base",
      description: "A fruity aspect amid pear notes of ambrette seeds takes over to be at the base of notes, and it is wrapped in a warm embrace of golden amber, gentle musk, and ambergris. The addition of raspberry lends an enticingly fresh and delicious sparkle to the scent. Saffron and leather give it an edge, while sandalwood and oakmoss gently soothe your nerves. The scent is capped with a delicate fusion of agarwood and violet, while ambroxan enriches the collagen. Explicitly express your sensuality and let it ooze within you.",
      image: "src/assets/zumar/Oud Base.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${bgColors[activeIndex]} flex flex-col lg:flex-row`}
    >
      <Swiper
        direction={isMobile ? "horizontal" : "vertical"}
        slidesPerView={1}
        speed={1500}
        mousewheel
        loop={true}
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

      <RightHalf openModal={openModal} setOpenModal={setOpenModal} />

      <AnimatePresence>
        {openModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-lg w-full mx-auto relative"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-1 text-gray-600 hover:text-gray-800"
                onClick={() => setOpenModal(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={notes[openModal].image}
                alt={notes[openModal].type}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 font-cinzel mb-2">
                {notes[openModal].type}
              </h3>
              <p className="text-sm text-gray-700 font-merriweather">
                {notes[openModal].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplitProductTheme;