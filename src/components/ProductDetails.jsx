import { useState } from "react";
import MyCarousel from "./inner/MyCarousel";
import ProductOverview from "./inner/ProductOverview";
import ProductTitleAndPrice from "../components/inner/ProductTitleAndPrice";
import TabSwitcher from "../components/inner/TabSwitcher";
import ReviewsList2 from "./inner/ReviewList2";
import QuantitySelector from "../components/inner/QuantitySelector";
import ShareButton from "../components/inner/ShareButton";
import RelatedProductsSection from "./inner/RelatedProductsSection";
import Flipcard from "./inner/Flipcard";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const reviews = [
    {
      user: "Aisha K.",
      rating: 5,
      comment: "Absolutely love the scent! Long-lasting and elegant.",
    },
    {
      user: "Mohammed R.",
      rating: 4,
      comment: "Great for evening wear. Got compliments all night.",
    },
    {
      user: "Leila S.",
      rating: 5,
      comment: "Perfect blend of floral and oud. My new favorite.",
    },
    {
      user: "Saood G",
      rating: 4,
      comment: "My new favorite.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#171717] text-[#1C1C1E] dark:text-white transition-colors duration-300">
      <div className="flex flex-col lg:flex-row w-[1200px] justify-between ">
        {/* Left: Image Swiper */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <MyCarousel />
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Flipcard />
        </div>
      </div>
      <RelatedProductsSection />
    </div>
  );
}

export default ProductDetails;


 {/* <div className="w-full lg:w-1/2 p-4 sm:p-6 space-y-4 bg-[#FAF9F7] dark:bg-[#181818] transition-colors duration-300">
          <ProductTitleAndPrice />

          <div className="flex flex-col space-y-4">
            <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "overview" ? (
              <ProductOverview />
            ) : (
              <ReviewsList2 reviews={reviews} />
            )}
          </div>

          <QuantitySelector
            quantity={quantity}
            increment={handleIncrement}
            decrement={handleDecrement}
          />

          <div className="pt-2">
            <ShareButton />
          </div>
        </div> */}