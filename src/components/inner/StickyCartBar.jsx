//Sticky Component
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";

const StickyCartBar = ({ image, name, price }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );

    const target = document.getElementById("product-detail-top");
    if (target) observer.observe(target);

    return () => target && observer.unobserve(target);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white border border-gray-200 shadow-xl rounded-full px-4 py-2 flex items-center gap-3 max-w-[95%] sm:max-w-lg w-full">
      <img
        src={image}
        alt={name}
        className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border border-gray-300"
      />
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate font-lobster">
          {name}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 font-semibold font-cinzel">{price} AED</p>
      </div>
      <button className="font-cinzel flex items-center gap-1.5 text-xs sm:text-sm bg-black hover:bg-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-serif">
        <ShoppingCart size={14} />
        Add to Cart
      </button>
    </div>
  );
};

export default StickyCartBar;
