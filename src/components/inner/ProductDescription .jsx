import React, { useRef, useState, useEffect } from "react";
import details from "../../assets/details.json";

const ProductDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);
  const product = details.products[0];

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "60px"); // adjust 60px for 3 lines approx
    }
  }, [expanded]);

  return (
    <div className="overflow-hidden transition-all duration-500 ease-in-out font-merriweather ">
      {/* Animated description container */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-all duration-500 ease-in-out overflow-hidden text-sm text-[#6E6E73] dark:text-[#C3C3C6] tracking-wide"
      >
        This expressive scent shall envelop every ripple of your being like
        slippery smooth silk and become one with your soul. The heady notes of
        musk wafting upwards through the fresh and sweet rose notes and tangy
        flavourful raspberry top notes is similar to the raw earthy smells of
        damp mud reaching you through the overlying bed of blooming flowers
        interspersed with juicy ripe berries. The white square bottle embodies
        the raw beauty of human touch and intimacy through its untouched notes
        of musk and rose, making this fragrance feel like a part of you.
      </div>

      {/* Toggle button */}
      {product.description.length > 100 && (
        <div className="flex justify-end">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-sm font-bold text-[#6E6E73] hover:text-[#1C1C1E] dark:text-[#6E6E73] dark:hover:text-white transition focus:outline-none cursor-pointer"
          >
            {expanded ? "Show less" : "...Read more"}
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductDescription;
