import React, { useState } from "react";
import details from "../../assets/details.json";
import { Star } from "lucide-react";
import ProductDescription from "./ProductDescription ";

const LeftProductInfo = ({ images, onThumbnailClick }) => {
  const product = details.products[0];
  const [expanded, setExpanded] = useState(false);
  

  return (
    <div className="space-y-4 w-full max-w-sm font-serif">
      {/* Rating */}

      <div className="flex items-center gap-1 text-sm">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-yellow-500 fill-yellow-400"
            strokeWidth={1.5}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">(85 reviews)</span>
      </div>

      {/* Product Name */}
      <h1 className="text-5xl text-gray-900">
        Musk & Roses
      </h1>

      {/* Categories */}
      <p className="text-xs font-mono text-gray-500">
        Categories: PERFUMES, OCCIDENTAL FRAGRANCE
      </p>

      {/* Description with line clamp */}
      <ProductDescription/>

      {/* Thumbnails */}
      {/* Thumbnails - only visible on large screens */}
      <div className="hidden lg:flex lg:flex-wrap lg:gap-2 lg:mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className="w-16 h-16 border cursor-pointer hover:opacity-80 transition"
            onClick={() => onThumbnailClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftProductInfo;
