import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import details from "../../assets/details.json";

const ProductTabs = () => {
  const product = details.products[0];

  return (
    <section className="w-full py-10">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-semibold tracking-wide text-gray-800">
          All About the
        </h2>
        <h1 className="text-4xl tracking-wide">Product</h1>
        <p className="text-gray-500 mt-2 text-xs">Explore key highlights, tips & delivery</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto font-serif transition-all duration-300 ease-in-out">
        {/* Tab Buttons */}
        <TabsList className="w-full bg-gray-100 rounded-full p-1 flex justify-between gap-2">
          <TabsTrigger
            value="features"
            className="w-full py-3 sm:py-3.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out data-[state=active]:bg-black data-[state=active]:text-white text-gray-800"
          >
            Product Highlights
          </TabsTrigger>
          <TabsTrigger
            value="tip"
            className="w-full py-3 sm:py-3.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out data-[state=active]:bg-black data-[state=active]:text-white text-gray-800"
          >
            Tip
          </TabsTrigger>
          <TabsTrigger
            value="delivery"
            className="w-full py-3 sm:py-3.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out data-[state=active]:bg-black data-[state=active]:text-white text-gray-800"
          >
            Delivery Info
          </TabsTrigger>
        </TabsList>

        {/* Tab Content: Features */}
        <TabsContent
          value="features"
          className="text-sm text-gray-700 mt-8 transition-opacity duration-500 ease-in-out animate-fade-in"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-md px-4 py-2 shadow-sm">
              Long-lasting (up to 8 hours)
            </div>
            <div className="bg-gray-100 rounded-md px-4 py-2 shadow-sm">
              Ideal for evening wear
            </div>
            <div className="bg-gray-100 rounded-md px-4 py-2 shadow-sm">
              Alcohol-free, vegan-friendly
            </div>
          </div>
        </TabsContent>

        {/* Tab Content: Tip */}
        <TabsContent
          value="tip"
          className="text-sm text-gray-700 mt-8 transition-opacity duration-500 ease-in-out animate-fade-in space-y-4"
        >
          <p>
            Apply to pulse points (wrists, neck) after moisturizing for
            long-lasting scent.
          </p>
          <img
            src="src/assets/marj.jpg"
            alt="Fragrance Tip"
            className="w-[400px] h-[400px] rounded-md shadow"
          />
        </TabsContent>

        {/* Tab Content: Delivery */}
        <TabsContent
          value="delivery"
          className="text-sm text-gray-700 mt-8 transition-opacity duration-500 ease-in-out animate-fade-in"
        >
          <p>
            Orders are processed within 1–2 days. Free delivery for orders over
            $50. Express delivery available.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductTabs;
