import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Wind,
  Shield,
  Star,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Theme6 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeNote, setActiveNote] = useState(null);

  const perfumes = [
    {
      id: 1,
      name: "Qarnain Gift Set",
      price: "1,850",
      image: "src/assets/qarnain-giftset.jpg",
      notes: "Agarwood, Rose, Amber",
      concentration: "Pure Parfum",
      origin: "United Arab Emirates",
    },
    {
      id: 2,
      name: "Dakhoon Collection",
      price: "2,200",
      image: "src/assets/dakhoon-collection.jpg",
      notes: "White Musk, Jasmine, Sandalwood",
      concentration: "Extrait de Parfum",
      origin: "Oman",
    },
    {
      id: 3,
      name: "Oud & Roses",
      price: "1,950",
      image: "src/assets/oud-roses.jpg",
      notes: "Amber, Vanilla, Oud",
      concentration: "Pure Parfum",
      origin: "UAE",
    },
  ];

  const noteImages = {
    // Top Notes
    Bergamot:
      "https://plus.unsplash.com/premium_photo-1675011288421-21c7add02738?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Cardamom:
      "https://images.unsplash.com/photo-1642255521852-7e7c742ac58f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Saffron:
      "https://images.unsplash.com/photo-1542806641-c28bc21453e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Heart Notes
    Rose: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Jasmine:
      "https://images.unsplash.com/photo-1720184117974-8c16b8493459?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Amber:
      "https://images.unsplash.com/photo-1686043626878-9e391a70632d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Base Notes
    Agarwood:
      "https://plus.unsplash.com/premium_photo-1675526112779-9181f2559894?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Musk: "https://images.unsplash.com/photo-1634150872460-db4e5b6fdc71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Vanilla:
      "https://images.unsplash.com/photo-1594140634584-70e07cd2967b?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const getNotesDescription = (note) => {
    const descriptions = {
      Bergamot: "Fresh citrus notes with a bright, uplifting character",
      Cardamom: "Warm, spicy-sweet aroma with exotic undertones",
      Saffron: "Rich, honeyed warmth with leather-like nuances",
      Rose: "Deep, rich floral with velvet-like smoothness",
      Jasmine: "Sweet, intense floral with exotic indolic notes",
      Amber: "Warm, powdery, sweet resinous accord",
      Agarwood: "Deep, woody, complex with sweet undertones",
      Musk: "Smooth, sensual with a skin-like warmth",
      Vanilla: "Sweet, creamy with balsamic undertones",
    };
    return descriptions[note] || "";
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-cinzel">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-purple-500/20" />
          <div className="h-full w-full bg-[url('path/to/arabesque-pattern.svg')] bg-repeat opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-pacifico bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent">
                Qarnain Gift Set
              </h1>
              <p className="font-merriweather text-gray-400 text-lg max-w-xl">
                Discover the epitome of Arabian luxury with our exclusive
                collection of pure parfums, where ancient traditions meet modern
                sophistication.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full hover:opacity-90 transition-all duration-300">
                  Explore Collection
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                  Our Heritage
                </button>
              </div>
            </motion.div>

            {/* Right: Perfume Display */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="flex-1"
            >
              <div className="relative w-full aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={perfumes[activeSlide].image}
                    alt={perfumes[activeSlide].name}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplets className="w-6 h-6" />, title: "Pure Parfum" },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Authentic Ingredients",
              },
              { icon: <Wind className="w-6 h-6" />, title: "Long-lasting" },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Premium Collection",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur hover:from-white/10 hover:to-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl leading-relaxed font-pacifico text-center mb-16 bg-gradient-to-r from-stone-200 via-neutral-200 to-zinc-200 bg-clip-text text-transparent"
          >
            Fragrance Notes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Top Notes",
                description: "First impression that lasts 15-30 minutes",
                notes: ["Bergamot", "Cardamom", "Saffron"],
                delay: 0,
                color: "from-stone-500 to-neutral-600",
                borderColor: "from-stone-400 to-neutral-500",
              },
              {
                title: "Heart Notes",
                description: "The core that emerges after 10-30 minutes",
                notes: ["Rose", "Jasmine", "Amber"],
                delay: 0.2,
                color: "from-neutral-600 to-zinc-600",
                borderColor: "from-neutral-500 to-zinc-500",
              },
              {
                title: "Base Notes",
                description: "The foundation that lasts for hours",
                notes: ["Agarwood", "Musk", "Vanilla"],
                delay: 0.4,
                color: "from-zinc-600 to-stone-500",
                borderColor: "from-zinc-500 to-stone-400",
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: section.delay, duration: 0.8 }}
                className="relative"
              >
                <div className="text-center space-y-8">
                  <div className="relative">
                    <h3 className="text-2xl font-cinzel text-stone-300">
                      {section.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.6 }}
                      transition={{ delay: section.delay + 0.3 }}
                      className="text-sm font-merriweather mt-2 text-neutral-100"
                    >
                      {section.description}
                    </motion.p>
                  </div>

                  <div className="space-y-4">
                    {section.notes.map((note, noteIndex) => (
                      <motion.div
                        key={noteIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        className="relative group"
                      >
                        <div
                          className={`
                      bg-gradient-to-r ${section.borderColor} p-[1px] rounded-xl
                      transition-all duration-300 group-hover:p-[2px]
                    `}
                        >
                          <div className="bg-[#0A0A0A]/90 backdrop-blur-sm p-4 rounded-xl relative overflow-hidden">
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                              style={{
                                backgroundSize: "200% 100%",
                                animation: "shine 2s infinite",
                              }}
                            />
                            <div className="relative flex items-center gap-4">
                              {/* Note Image */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-12 h-12 rounded-full overflow-hidden"
                              >
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20 animate-spin-slow`}
                                  style={{ animationDuration: "20s" }}
                                />
                                <img
                                  src={noteImages[note]}
                                  alt={note}
                                  className="absolute inset-0 w-full h-full object-cover rounded-full p-[2px]"
                                />
                              </motion.div>

                              {/* Note Content */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-merriweather text-stone-200">
                                    {note}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Hover Effect */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              animate={
                                activeNote === `${section.title}-${note}`
                                  ? { opacity: 1, y: 0 }
                                  : {}
                              }
                              transition={{ duration: 0.2 }}
                              className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                            >
                              <p className="text-xs text-center text-stone-300 px-4 font-merriweather">
                                {getNotesDescription(note)}
                              </p>
                              <div
                                className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                                onClick={() =>
                                  setActiveNote(
                                    activeNote === `${section.title}-${note}`
                                      ? null
                                      : `${section.title}-${note}`
                                  )
                                }
                              >
                                <p className="text-xs text-center text-stone-300 px-4 font-merriweather">
                                  {getNotesDescription(note)}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Vertical separator */}
                {index !== 2 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ delay: section.delay, duration: 1 }}
                    className={`absolute -right-6 top-0 w-[1px] bg-gradient-to-b ${section.borderColor} opacity-20`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {perfumes.map((perfume, index) => (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/40 to-rose-950/40 p-8"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full aspect-[3/4] object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{perfume.name}</h3>
                <p className="text-amber-400 mb-4">AED {perfume.price}</p>
                <div className="space-y-2 text-sm text-gray-400 font-merriweather">
                  <p>Notes: {perfume.notes}</p>
                  <p>Concentration: {perfume.concentration}</p>
                  <p>Origin: {perfume.origin}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full flex items-center justify-center gap-2 group"
                >
                  <span>Discover More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add this CSS to your global styles or styled-components */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Theme6;
