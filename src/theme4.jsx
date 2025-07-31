//Theme4 page
import React, { useState } from "react";
import LeftProductInfo from "./components/inner/LeftProductInfo";
import CenterImageGallery from "./components/inner/CenterImageGallery";
import RightProductDetails from "./components/inner/RightProductDetails";
import StickyCartBar from "./components/inner/StickyCartBar";
import ProductAccordianCopy from "./components/inner/ProductAccordian-copy";
import PerfumeNotes from "./components/inner/PerfumeNotes";
import ProductTabs from "./components/inner/ProductTabs";
import CenterImageGalleryCopy from "./components/inner/CenterImageGallery-copy";
import LeftProductInfoCopy from "./components/inner/LeftProductInfo-copy";
import RightProductDetailsCopy from "./components/inner/RightProductDetails-copy";
import RelatedProductsSection from "./components/inner/RelatedProductsSection";

const Theme4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "src/assets/musk-roses-copy.jpg",
    "src/assets/musk-roses-1-copy.jpg",
    "src/assets/musk-roses-2-copy.jpg",
    
  ];
  return (
    <div className="mx-auto max-w-[100%] px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:text-white dark:bg-[#181818]">
      <div className="flex flex-col lg:flex-row gap-6  justify-center items-start">
        {/* Center: Image Gallery */}
        <div className="w-full lg:h-screen lg:w-1/3 flex justify-center">
          <CenterImageGalleryCopy
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* Left: Info and Thumbnails */}
        <div className="w-full lg:w-1/4 lg:pt-28">
          <LeftProductInfoCopy
            images={images}
            onThumbnailClick={setActiveIndex}
          />
        </div>

        {/* Accordion */}
        <div className="w-full lg:w-1/4 lg:pt-28">
          <ProductAccordianCopy />
        </div>
      </div>
      <div className="min-h-screen flex mt-5">
        <RelatedProductsSection />
      </div>

      <StickyCartBar image={images[1]} name="Musk & Roses" price="110" />
    </div>
  );
};

export default Theme4;
