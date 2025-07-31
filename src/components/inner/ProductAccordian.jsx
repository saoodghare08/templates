import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import details from "../../assets/details.json";
// import { BsClock, BsMoon, BsLeaf } from "react-icons/bs";
import { Clock, Gem, Leaf, Moon, Truck } from "lucide-react";

const ProductAccordion = () => {
  const product = details.products[0];
  return (
    <Accordion type="single" collapsible className="w-full font-serif ">
      <AccordionItem
        value="key-highlights"
        className="hover:cursor-pointer hover:shadow-md hover:scale-[1.01] transition"
      >
        <AccordionTrigger className="hover:no-underline font-medium rounded-none text-xl mx-3">
          Product Features & Key Highlights
        </AccordionTrigger>
        <AccordionContent className="mx-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 ">
            {[
              { text: "Long-lasting (up to 14 hours)", icon: <Clock /> },
              { text: "Ideal for evening wear", icon: <Moon /> },
              { text: "Alcohol-free, vegan-friendly", icon: <Leaf /> },
              {
                text: "Luxury glass bottle with gold detailing",
                icon: <Gem />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out "
              >
                <span className="text-lg">{item.icon}</span>
                <p className="text-gray-800 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="tip"
        className="hover:cursor-pointer hover:shadow-md hover:scale-[1.01] transition"
      >
        <AccordionTrigger className="hover:no-underline font-medium rounded-none text-xl mx-3">
          Tip
        </AccordionTrigger>
        <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h4 className="font-semibold text-base">How to Apply:</h4>
          <p>
            For the most captivating and long-lasting experience, apply the
            perfume directly to your pulse points — such as the wrists, neck,
            and behind the ears. These naturally warm areas help to diffuse and
            enhance the fragrance throughout the day.
          </p>
          <p>
            For best results, spray after moisturizing to help lock in the
            scent. Avoid rubbing the fragrance after application, as it can
            break down the delicate top notes.
          </p>
          <img
            src="src/assets/perfume.gif"
            alt="How to Apply Perfume"
            className="w-full rounded-md shadow-sm"
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="delivery"
        className="hover:cursor-pointer hover:shadow-md hover:scale-[1.01] transition"
      >
        <AccordionTrigger className="hover:no-underline font-medium rounded-none text-xl mx-3">
          Delivery Information
        </AccordionTrigger>

        <AccordionContent className="mx-3 space-y-4 text-sm text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Standard Delivery */}
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <img
                src="https://www.svgrepo.com/show/378704/shipping-box-v1.svg"
                alt="Standard Delivery"
                className="w-8 h-8 object-contain"
              />
              
              <div>
                <h4 className="font-semibold text-gray-800">
                  Standard Delivery
                </h4>
                <p className="text-gray-600 text-xs">
                  Delivered in 2–4 business days. Free on orders over $50.
                </p>
              </div>
            </div>

            {/* Express Delivery */}
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <img
                src="https://www.svgrepo.com/show/447599/delivery-fast.svg"
                alt="Express Delivery"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Express Delivery
                </h4>
                <p className="text-gray-600 text-xs">
                  Next-day delivery available at checkout. Charges may apply.
                </p>
              </div>
            </div>

            {/* International Shipping */}
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <img
                src="https://www.svgrepo.com/show/513157/globe-1.svg"
                alt="International Shipping"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  International Shipping
                </h4>
                <p className="text-gray-600 text-xs">
                  Available to selected countries. Delivery time varies by
                  region.
                </p>
              </div>
            </div>

            {/* Eco-Friendly Packaging */}
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <img
                src="https://www.svgrepo.com/show/511034/leaf.svg"
                alt="Eco Friendly"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Sustainable Packaging
                </h4>
                <p className="text-gray-600 text-xs">
                  Your order is shipped in fully recyclable, luxury-grade
                  packaging.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[13px] text-gray-500 italic pt-2">
            * All orders are trackable. You'll receive tracking details via
            email once dispatched.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="fragrance-profile"
        className="hover:cursor-pointer hover:shadow-md hover:scale-[1.01] transition"
      >
        <AccordionTrigger className="hover:no-underline font-medium rounded-none text-xl mx-3">
          Fragrance Profile
        </AccordionTrigger>

        <AccordionContent className="mx-3 space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Perfume Notes */}
          <div className="space-y-1">
            {/* <h3 className="text-base font-semibold text-gray-800 uppercase">
              Perfume Notes
            </h3> */}
            <div className="flex flex-col sm:flex-row gap-6 max-w-full justify-between">
              {[
                {
                  type: "Top Notes",
                  description: "Raspberry, Turkish Rose, Indian Roses",
                  image: "src/assets/raspberry.png",
                },
                {
                  type: "Heart Notes",
                  description: "White Flowers, Oud Extract",
                  image: "src/assets/musk.webp",
                },
                {
                  type: "Base Notes",
                  description: "Guaiac Wood, Sandalwood, Amber Absolute",
                  image: "src/assets/woody.jpg",
                },
              ].map((note, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <img
                    src={note.image}
                    alt={note.type}
                    className="h-16 w-16 object-contain rounded-full shadow mb-2"
                  />
                  <h4 className="font-semibold text-sm text-gray-900">
                    {note.type}
                  </h4>
                  <p className="text-xs text-gray-600 whitespace-pre-line mt-1">
                    {note.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fragrance Characteristics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <strong>Scent Family:</strong> Oriental, Musky, Woody
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <strong>Fragrance Intensity:</strong> Long-lasting
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out ">
              <strong>Sillage:</strong> Moderate to Heavy
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 border-l-4 border-black p-4 rounded-sm shadow-inner font-serif">
            <p>
              A captivating infusion of opposites — this fragrance moves from
              sweet florals to deep musks, wrapped in warm woods. The journey
              begins with the lush embrace of Turkish and Indian roses, awakened
              by radiant white florals and grounded by the depth of Oud.
            </p>
            <p className="mt-3">
              As the scent evolves, it reveals rich base notes of guaiac wood,
              creamy sandalwood, and golden amber absolute — forming a sensorial
              tapestry that lingers gracefully.
            </p>
            <p className="mt-3 italic text-gray-600">
              Bold yet soft. Intimate yet powerful. This fragrance is a tribute
              to contrasts in perfect harmony.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
