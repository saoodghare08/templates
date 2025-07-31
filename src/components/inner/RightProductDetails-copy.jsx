// RightProductDetails.jsx
import React, { useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import PerfumeNotes from "./PerfumeNotes";

const RightProductDetailsCopy = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("100ml");
  const sizes = ["50ml", "100ml", "150ml"];
  const handleQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="w-full max-w-sm space-y-5 text-sm font-serif text-gray-700">
      {/* Price and Quantity */}
      {/* <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-800">AED 110.00</p>
      </div> */}

      {/* Size Selector */}
      {/* <div>
        <span className="block text-gray-600 mb-1">Size: </span>
        <div className="flex items-center gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border text-sm transition-colors rounded-full ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-600 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div> */}

      {/* Size Selector */}
      {/* <div className="w-full">
        <div className="flex items-center justify-between border-b border-gray-300 pb-1">
          <label htmlFor="size-select" className="text-sm text-gray-600 mr-2">
            Size
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
            <ChevronDown
              size={14}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>
      </div> */}

      {/* Add to Bag Button */}
      {/* <button id="product-detail-top" className="w-full bg-amber-600 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow hover:bg-amber-700 transition-colors">
        Add to Cart
      </button> */}

      {/* Additional Info */}
      {/* <div className="text-xs space-y-1 text-gray-600">
        <p>
          <strong>Fragrance Type:</strong> Eau de Parfum
        </p>
        <p>
          <strong>Fragrance Category:</strong> Occidental
        </p>
        <p>
          <strong>Dispenser Type:</strong> Spray
        </p>
        <p>🚚 Shipping Information</p>
        <p>🎁 Complimentary Gift-Wrapping</p>
        <p>🔗 Share the love</p>
      </div> */}
      {/* <PerfumeNotes /> */}
    </div>
  );
};

export default RightProductDetailsCopy;
