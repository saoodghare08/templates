import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const QuantitySelector = ({ quantity, increment, decrement }) => (
  <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 w-full font-cinzel">
    {/* Quantity Controls */}
    <div className="flex items-center border border-[#D1D5DB] dark:border-[#2C2C2C] rounded-full overflow-hidden shadow-sm w-full sm:w-[200px] bg-white dark:bg-[#1E1E1E]">
      <Button
        variant="ghost"
        onClick={decrement}
        className="w-10 h-10 text-xl font-light text-[#3A3A3A] dark:text-[#CCCCCC] hover:bg-[#F0F0F0] dark:hover:bg-[#2C2C2C]"
      >
        -
      </Button>
      <div className="flex-1 text-center text-lg font-medium text-[#1C1C1E] dark:text-[#F4F4F4] select-none">
        {quantity}
      </div>
      <Button
        variant="ghost"
        onClick={increment}
        className="w-10 h-10 text-xl font-light text-[#3A3A3A] dark:text-[#CCCCCC] hover:bg-[#F0F0F0] dark:hover:bg-[#2C2C2C]"
      >
        +
      </Button>
    </div>

    {/* Add to Cart Button with click jump */}
    <MotionButton
      whileTap={{ scale: 0.95 }}
      className="group relative w-full sm:w-auto font-cinzel text-white dark:bg-black px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium shadow-md text-sm sm:text-base overflow-hidden border border-black transition-all"
    >
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        Add to Cart
      </span>
    </MotionButton>

    {/* Buy Now Button with click jump */}
    <MotionButton
      whileTap={{ scale: 0.95 }}
      className="group relative w-full sm:w-auto font-cinzel text-white dark:bg-black px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium shadow-md text-sm sm:text-base overflow-hidden border-2 border-black transition-all"
    >
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        Buy Now
      </span>
    </MotionButton>
  </div>
);

export default QuantitySelector;
