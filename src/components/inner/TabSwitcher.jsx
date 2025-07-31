const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-4 border-b border-[#E6E6E6] dark:border-[#6E6E73] pt-4 text-sm sm:text-base font-serif">
      {["overview", "reviews"].map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 border-b-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "border-[#D3A17E] text-[#D3A17E]"
                : "border-transparent text-[#6E6E73] hover:text-[#1C1C1E] dark:hover:text-white"
            }`}
          >
            {tab === "overview" ? "Product Overview" : "Reviews & Ratings"}
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
