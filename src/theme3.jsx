// ProductDetailsLayout.jsx
import React, { useState } from "react";
import LeftProductInfo from "./components/inner/LeftProductInfo";
import CenterImageGallery from "./components/inner/CenterImageGallery";
import RightProductDetails from "./components/inner/RightProductDetails";
import StickyCartBar from "./components/inner/StickyCartBar";
import ProductAccordian from "./components/inner/ProductAccordian";
import PerfumeNotes from "./components/inner/PerfumeNotes";
import ProductTabs from "./components/inner/ProductTabs";

const ProductDetailsLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "src/assets/musk-roses.jpg",
    "src/assets/musk-roses-1.jpg",
    "src/assets/musk-roses-2.jpg",
  ];
  return (
    <div className="bg-[#FAF9F7] dark:text-white dark:bg-[#181818]">
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-7xl mx-auto items-start ">
        {/* Left: Info and Thumbnails */}
        <div className="w-full lg:w-1/3 lg:pt-28">
          <LeftProductInfo images={images} onThumbnailClick={setActiveIndex} />
        </div>

        {/* Center: Image Gallery */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <CenterImageGallery
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* Right: Product Details */}
        <div  className="w-full lg:w-1/3 lg:pt-28">
          <RightProductDetails />
        </div>
      </div>

      {/* Accordion with matching width */}
      <div className="max-w-7xl mx-auto px-4">
        <ProductAccordian />
        {/* <ProductTabs/> */}
      </div>

      <StickyCartBar
        image= {images[0]}
        name="Musk & Roses"
        price="230"
      />

      <div className="h-[1200px] bg-gray-50 mt-10"></div>
    </div>
  );
};

export default ProductDetailsLayout;
