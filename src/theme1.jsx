import { Moon, Sun } from "lucide-react";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";

function Theme1() {
  // const [darkMode, setDarkMode] = useState(false);

  // // Detect system preference on initial load
  // useEffect(() => {
  //   const systemPrefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   setDarkMode(systemPrefersDark);
  // }, []);

  // // Apply class based on darkMode state
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   return () => {
  //     document.documentElement.classList.remove("dark");
  //   };
  // }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#181818] transition-colors duration-300 flex items-center justify-center text-[#1C1C1E] dark:text-white">
      {/* <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="fixed bottom-4 left-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button> */}

      <ProductDetails />
    </div>
  );
}

export default Theme1;
