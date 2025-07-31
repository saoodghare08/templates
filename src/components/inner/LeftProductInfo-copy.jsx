//Product Info Page
import React, { useState } from "react";
import details from "../../assets/details.json";
import { Star } from "lucide-react";
import ProductDescription from "./ProductDescription ";

const LeftProductInfoCopy = ({ images, onThumbnailClick }) => {
  const product = details.products[0];
  const [selectedSize, setSelectedSize] = useState("100ml");
  const sizes = ["50ml", "100ml", "150ml"];
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-4 w-full max-w-md mx-auto font-serif">
      {/* Description with line clamp */}

      {/* Thumbnails */}
      {/* Thumbnails - only visible on large screens */}
      <div className="lg:hidden flex lg:flex-wrap justify-center gap-3 bg-[#FAF9F7]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className="w-16 h-16 border cursor-pointer hover:opacity-80 transition mix-blend-multiply"
            onClick={() => onThumbnailClick(i)}
          />
        ))}
      </div>
      <h1 className="text-xl sm:text-2xl text-gray-900 font-cinzel">
        Description
      </h1>
      <ProductDescription />

      {/* Thumbnails */}
      {/* Thumbnails - only visible on large screens */}
      <div className="hidden lg:flex lg:flex-wrap lg:gap-2 lg:mt-4 bg-[#FAF9F7]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className="w-16 h-16 border cursor-pointer hover:opacity-80 transition mix-blend-multiply"
            onClick={() => onThumbnailClick(i)}
          />
        ))}
      </div>

      {/* Price and Quantity */}
      <div className="flex justify-between items-center">
        <p className="text-xl sm:text-2xl font-bold text-gray-800 font-cinzel">
          AED 110.00
        </p>
      </div>
      {/* Size Selector */}
      <div className="w-full">
        <div className="flex items-center justify-between border-b border-gray-300 pb-1 font-merriweather">
          <label htmlFor="size-select" className="text-sm text-gray-600 mr-2">
            Size:
          </label>

          <div className="relative w-full max-w-[100px]">
            <select
              id="size-select"
              value={selectedSize}
              disabled
              onChange={(e) => setSelectedSize(e.target.value)}
              className="appearance-none w-full bg-transparent text-sm text-gray-700 pr-5 focus:outline-none"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Add to Bag Button */}
      <button
        id="product-detail-top"
        className="w-full bg-black text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow hover:bg-gray-800 transition-colors font-cinzel"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default LeftProductInfoCopy;
