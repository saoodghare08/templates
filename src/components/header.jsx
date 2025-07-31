import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Theme 1", path: "/" },
    { label: "Theme 2", path: "/theme-2" },
    { label: "Theme 3", path: "/theme-3" },
    { label: "Theme 4", path: "/theme-4" },
    // { label: "Theme 6", path: "/theme-6" },
    { label: "Theme 5", path: "/theme-5" },
    { label: "Theme 6", path: "/theme-6" },
    { label: "Theme 7", path: "/theme-7" },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `hover:text-yellow-600 ${
      isActive(path) ? "text-yellow-600 font-semibold underline" : ""
    }`;

  return (
    <header className="bg-[#FAF9F7] dark:text-white dark:bg-[#181818] text-gray-800 shadow-lg z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-yellow-600">
            <img src="src/assets/ahmed-logo.webp" alt="ahmed logo" className="h-auto w-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={linkClasses(item.path)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-gray-800 ${isActive(item.path) ? "text-yellow-600 font-semibold underline" : ""} hover:text-yellow-600`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
