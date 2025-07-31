import { useState } from "react";
import details from "../../assets/details.json";
import ProductDescription from "./ProductDescription ";

const ProductTitleAndPrice = () => {
  const product = details.products[0];
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-3">
      <div>
        <h1 className="font-cinzel text-4xl sm:text-3xl font-semibold text-[#1C1C1E] dark:text-white">
          {product.name}
        </h1>
        <p className="text-sm text-[#6E6E73] dark:text-gray-400 font-mono">
          Categories: Perfumes, Oriental Fragrance
        </p>
      </div>

      <p className="text-xl font-cinzel font-medium text-[#D3A17E] dark:text-[#EACDA3] ">
        AED {product.price.toFixed(2)}
      </p>

      <ProductDescription />
    </div>
  );
};

export default ProductTitleAndPrice;
