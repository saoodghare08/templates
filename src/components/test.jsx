<Tabs defaultValue="details" className="w-full font-sans mb-3">
          {/* Tab Headers */}
          <TabsList className="grid grid-cols-3 w-full bg-white border border-gray-200 rounded-full gap-1 shadow-inner h-fit font-cinzel">
            <TabsTrigger
              value="details"
              className="rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-black data-[state=active]:text-white hover:bg-gray-100"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-black data-[state=active]:text-white hover:bg-gray-100"
            >
              Highlights
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-colors data-[state=active]:bg-black data-[state=active]:text-white hover:bg-gray-100"
            >
              Usage
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Details */}
          <TabsContent value="details" className="pt-4 px-2 sm:px-4 text-gray-800 space-y-6 leading-relaxed font-sans">
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-serif font-merriweather">
                Enhancing leisure with a range of traditional blended Dukhoons.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Gift Set Contains
              </h3>
              <ul className="font-merriweather list-disc font-serif list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Oud Ma’attar Majalis</li>
                <li>Mariya Oud Mubakhar – 36 Grams</li>
                <li>Bakhoor Ahmed – 20 Tabs</li>
                <li>Khashab Al Oud</li>
              </ul>
            </div>
          </TabsContent>

          {/* Tab 2: Highlights */}
          <TabsContent value="ingredients" className="pt-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather">
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Key Highlights
              </h3>
              <ul className="list-disc font-serif list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>Authentic Arabic incense experience</li>
                <li>Curated variety for traditional rituals</li>
                <li>Ideal as a luxury gift set</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-serif">
                Oud wood, perfumed resin blends, natural oils (specific
                composition varies by product in the set).
              </p>
            </div>
          </TabsContent>

          {/* Tab 3: Usage */}
          <TabsContent
            value="usage"
            className="pt-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-800 space-y-6 leading-relaxed font-merriweather"
          >
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                How to Use
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-serif">
                Place Dukhoon on a charcoal or electric burner. Let the smoke
                fill your space or gently waft over clothing.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Best Time to Use
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-serif">
                Evenings, cultural gatherings, special occasions
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-cinzel text-gray-900 mb-2">
                Packaging
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-serif">
                Beautifully arranged in a decorative gift box, ideal for gifting
                or personal indulgence.
              </p>
            </div>
          </TabsContent>
        </Tabs>