import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, Clock, Gem, Moon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const tabContentVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
};

const RightHalf = ({ openModal, setOpenModal }) => {
  const [selectedSize, setSelectedSize] = useState("60ml");

  const notes = [
    {
      type: "Top Notes - Pear and Saffron",
      description:
        "The top notes open with a tantalizing duet of saffron and pear, offering an inviting sweetness and warmth that immediately commands attention.",
      image: "src/assets/zumar/Pear and Saffron.jpg",
    },
    {
      type: "Heart Notes - Rose and Honey",
      description:
        "Relax and let yourself be pampered as the earthy scent of patchouli calms your emotions. You’re being welcomed further into the heart with a festive bouquet of fragrant roses, saffron, and jasmine. The vetiver in it will impart a harmonious, mystical quality to you. A jolt of cinnamon is added, which further envelops you inside the cashmere woods’ caressing warmth. Blending orange blossom’s floral-animal undertones with other clean elements to create a fresh aroma. Treat yourself to the splendor that is all around you.",
      image: "src/assets/zumar/Rose and Honey.jpg",
    },
    {
      type: "Base Notes - Oud Base",
      description:
        "A fruity aspect amid pear notes of ambrette seeds takes over to be at the base of notes, and it is wrapped in a warm embrace of golden amber, gentle musk, and ambergris. The addition of raspberry lends an enticingly fresh and delicious sparkle to the scent. Saffron and leather give it an edge, while sandalwood and oakmoss gently soothe your nerves. The scent is capped with a delicate fusion of agarwood and violet, while ambroxan enriches the collagen. Explicitly express your sensuality and let it ooze within you.",
      image: "src/assets/zumar/Oud Base.jpg",
    },
  ];

  const ingredients = [
    {
      name: "Alcohol Denat.",
      icon: "https://www.svgrepo.com/show/479814/test-tube-7.svg",
      description:
        "Acts as the main carrier for perfume. It evaporates quickly to disperse scent. 'Denatured' means it's altered to be undrinkable.",
    },
    {
      name: "Fragrance (Parfum)",
      icon: "https://www.svgrepo.com/show/203105/perfume-aroma.svg",
      description:
        "The secret blend of natural and synthetic ingredients that create the actual scent. Includes essential oils and aroma chemicals.",
    },
    {
      name: "Linalool",
      icon: "https://www.svgrepo.com/show/152404/herbs-leaves-for-natural-spa-treatment.svg",
      description:
        "A natural compound found in lavender and basil. Adds a floral-spicy aroma. Listed due to allergen regulations.",
    },
    {
      name: "Coumarin",
      icon: "https://www.svgrepo.com/show/321664/vanilla-flower.svg",
      description:
        "A sweet-smelling compound from tonka beans and cinnamon. Smells like vanilla/hay. Also listed as an allergen.",
    },
  ];

  return (
    <div className="scrollbar-none w-full lg:w-1/2 h-auto lg:h-screen overflow-y-auto flex items-start px-4 sm:px-6 lg:px-10 pt-6 lg:py-12 bg-white/80 backdrop-blur scroll-smooth z-10 lg:sticky lg:top-0">
      <div className="space-y-6 max-w-md w-full my-auto">
        <div className="space-y-3">
          <h1 className="font-pacifico text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            Zumar
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 font-cinzel">
            Categories: Perfumes, Oriental Fragrance
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 font-cinzel">
            د.إ360.00{" "}
            <span className="line-through text-gray-500">د.إ450.00</span>
          </p>

          <Select.Root value={selectedSize} onValueChange={setSelectedSize}>
            <Select.Trigger className="font-merriweather w-full inline-flex items-center justify-between rounded-full border border-gray-300 bg-white px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm text-gray-900 shadow-md font-body focus:outline-none focus:ring-2 focus:ring-black transition">
              <Select.Value placeholder="Select Size" />
              <Select.Icon className="text-gray-500">
                <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg z-50 font-merriweather">
                <Select.Viewport className="p-1">
                  <Select.Item
                    value="60ml"
                    className="cursor-pointer rounded-md px-4 py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 outline-none font-body"
                  >
                    <Select.ItemText>60ml</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="75ml"
                    className="cursor-pointer rounded-md px-4 py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 outline-none font-body"
                  >
                    <Select.ItemText>75ml</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <div className="flex flex-col gap-3 pt-4">
            <button className="group relative w-full font-cinzel text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium shadow-sm text-sm sm:text-base overflow-hidden border-2 border-black transition-all">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Add to Cart
              </span>
            </button>

            <button className="group relative w-full font-cinzel px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium shadow-sm text-sm sm:text-base overflow-hidden border-2 border-black bg-black text-white">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Buy Now
              </span>
            </button>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full font-sans mb-3">
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

          <TabsContent
            value="details"
            className="px-2 sm:px-4 text-gray-800 space-y-6 leading-relaxed font-sans"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="description"
                className="w-full space-y-2"
              >
                <AccordionItem
                  value="description"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    Description
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700 font-merriweather">
                    <p className="text-sm text-gray-700 font-serif font-merriweather text-justify">
                      This captivating fragrance opens with tantalizing top
                      notes of saffron, lending a rich, aromatic depth. Pear and
                      red berries add a refreshing sweetness that awakens the
                      senses, while the rare Kinam oud accord creates a
                      delightful interplay of fruity and aromatic elements. The
                      heart of Zumar reveals a stunning floral bouquet of
                      gardenia, jasmine, Bulgarian rose, Rose Grasse, and
                      frangipani, enveloping the wearer in a romantic and
                      enchanting aura. As it settles, Zumar reveals a sumptuous
                      base of brown sugar and cacao, harmonizing with the earthy
                      richness of patchouli and oud, the warmth of white musk,
                      and the deep resonance of rose resins—resulting in a
                      velvety, magnetic finish that lingers and captivates.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="overview"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    Product Overview
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700 font-merriweather">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/482598/perfume-3.svg"
                          alt="Fragrance Type"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">Fragrance Type:</h4>
                          <p className="text-gray-500 text-sm">
                            Eau de Parfum (EDP)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/493619/tags-category-categories-labels.svg"
                          alt="Fragrance Category"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">Fragrance Category:</h4>
                          <p className="text-gray-500 text-sm">
                            Oriental, Unisex
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/490846/measuring-cup.svg"
                          alt="Size / Volume"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">Size / Volume:</h4>
                          <p className="text-gray-500 text-sm">60ml / 75ml</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/143412/perfume-spray-container.svg"
                          alt="Dispenser Type"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">Dispenser Type:</h4>
                          <p className="text-gray-500 text-sm">Spray</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="profile"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    Fragrance Profile
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-5 font-merriweather">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {notes.map((note, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/40 border border-gray-200 rounded-lg shadow-sm overflow-hidden cursor-pointer"
                          variants={cardVariants}
                          initial="initial"
                          whileHover="hover"
                          onClick={() => setOpenModal(index)}
                        >
                          <img
                            src={note.image}
                            alt={note.type}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-4 flex flex-col justify-between h-[120px] relative">
                            <h4 className="font-semibold text-sm text-gray-700 text-center">
                              {note.type}
                            </h4>

                            {/* Bottom Centered Text */}
                            <p className="text-gray-400 text-[10px] absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                              click for more
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/322156/delicate-perfume.svg"
                          alt="Olfactory Family"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">
                            Olfactory Family:
                          </h4>
                          <p className="text-gray-500 text-xs">
                            Oriental, Musky, Woody
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 bg-white/40 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img
                          src="https://www.svgrepo.com/show/495856/wind-2.svg"
                          alt="Sillage"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="font-semibold">
                            Sillage:
                          </h4>
                          <p className="text-gray-500 text-xs">Enormous</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent
            value="ingredients"
            className="px-2 sm:px-4 text-xs sm:text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="key-highlights"
                className="w-full space-y-2"
              >
                <AccordionItem
                  value="key-highlights"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    Key Features
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700 font-merriweather">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 ">
                      {[
                        {
                          text: "Long-lasting (up to 14 hours)",
                          icon: <Clock />,
                        },
                        { text: "Ideal for evening wear", icon: <Moon /> },
                        {
                          text: "Luxury glass bottle with gold detailing",
                          icon: <Gem />,
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white/40 border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out "
                        >
                          <span className="text-sm">{item.icon}</span>
                          <p className="text-gray-800 leading-snug text-sm">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="ingredients"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    Perfume Ingredients
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-4 text-gray-500 font-merriweather">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg">
                      {ingredients.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white/40 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-200 ease-in-out flex flex-col"
                        >
                          <div className="flex flex-row">
                            <div className="flex-1 flex items-center justify-center p-3">
                              <img
                                src={item.icon}
                                alt={item.name}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                            <div className="flex-1 flex items-center justify-center p-3">
                              <h4 className="text-base font-bold text-gray-800 font-cinzel text-center">
                                {item.name}
                              </h4>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-xs sm:text-sm text-gray-700 font-serif font-merriweather">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>

          <TabsContent
            value="usage"
            className="px-2 sm:px-4 text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabContentVariants}
              layout
            >
              <Accordion
                type="single"
                collapsible
                defaultValue="application"
                className="w-full space-y-2"
              >
                <AccordionItem
                  value="application"
                  className="hover:cursor-pointer hover:shadow-md"
                >
                  <AccordionTrigger className="font-cinzel hover:no-underline font-medium rounded-none text-base text-gray-900 mx-1">
                    How to Apply
                  </AccordionTrigger>
                  <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700 font-merriweather">
                    <p className="text-xs text-gray-700 font-serif leading-snug">
                      For the most captivating and long-lasting experience,
                      apply Zumar directly to your pulse points—such as the
                      wrists, neck, and behind the ears. These naturally warm
                      areas help to diffuse and enhance the fragrance throughout
                      the day.
                    </p>
                    <p className="text-xs text-gray-700 font-serif leading-snug">
                      For best results, spray after moisturizing to help lock in
                      the scent. Avoid rubbing the fragrance after application,
                      as it can break down the delicate top notes.
                    </p>
                    <img
                      src="src/assets/perfume.gif"
                      alt="How to Apply Perfume"
                      className="w-full rounded-md shadow-sm"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RightHalf;
