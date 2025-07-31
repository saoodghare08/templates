import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ProductOverview = () => {
  return (
    <div className="w-full max-w-3xl font-merriweather">
      <Accordion type="single" collapsible className="w-full">
        
        {/* Notes Accordion */}
        <AccordionItem
          value="notes"
          className="hover:cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E]"
        >
          <AccordionTrigger className="hover:no-underline px-4 py-3 font-black rounded-none hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E] text-[#1C1C1E] dark:text-[#F4F4F4]">
            Notes
          </AccordionTrigger>
          <AccordionContent className="mx-3">
            <div className="overflow-auto">
              <table className="min-w-full text-sm text-[#3A3A3A] dark:text-[#CCCCCC] rounded">
                <thead className="bg-[#F2F2F2] dark:bg-[#2C2C2C] text-left">
                  <tr>
                    <th className="p-2 border-b border-[#E0E0E0] dark:border-[#3A3A3A]">Type</th>
                    <th className="p-2 border-b border-[#E0E0E0] dark:border-[#3A3A3A]">
                      Ingredients
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F0F0F0] dark:border-[#333333]">
                    <td className="p-2 font-medium text-[#1C1C1E] dark:text-[#F4F4F4]">Top Notes</td>
                    <td className="p-2">Citrus, Bergamot, Mandarin</td>
                  </tr>
                  <tr className="border-b border-[#F0F0F0] dark:border-[#333333]">
                    <td className="p-2 font-medium text-[#1C1C1E] dark:text-[#F4F4F4]">Heart Notes</td>
                    <td className="p-2">Jasmine, Rose, Saffron</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium text-[#1C1C1E] dark:text-[#F4F4F4]">Bottom Notes</td>
                    <td className="p-2">Oud, Amber, Musk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Specifications Accordion */}
        <AccordionItem
          value="specifications"
          className="hover:cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E]"
        >
          <AccordionTrigger className="hover:no-underline px-4 py-3 font-black rounded-none hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E] text-[#1C1C1E] dark:text-[#F4F4F4]">
            Specifications
          </AccordionTrigger>
          <AccordionContent className="mx-3">
            <ul className="list-disc list-inside text-sm text-[#3A3A3A] dark:text-[#CCCCCC] space-y-1">
              <li>Volume: 100ml</li>
              <li>Type: Eau de Parfum</li>
              <li>Lasting Power: 8–10 hours</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Highlights Accordion */}
        <AccordionItem
          value="highlights"
          className="hover:cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E]"
        >
          <AccordionTrigger className="hover:no-underline px-4 py-3 font-black rounded-none hover:bg-[#F9F9F9] dark:hover:bg-[#1E1E1E] text-[#1C1C1E] dark:text-[#F4F4F4]">
            Highlights
          </AccordionTrigger>
          <AccordionContent className="mx-3">
            <ul className="list-disc list-inside text-sm text-[#3A3A3A] dark:text-[#CCCCCC] space-y-1">
              <li>Long-lasting luxury fragrance</li>
              <li>Elegant packaging design</li>
              <li>Unisex appeal</li>
              <li>Perfect for evening wear</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductOverview;
