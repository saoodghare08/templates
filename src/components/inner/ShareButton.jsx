import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const ShareButton = () => (
  <Button
    variant="ghost"
    className="flex items-center gap-2 text-[#4A4A4A] dark:text-[#CCCCCC] hover:text-[#1A1A1A] dark:hover:text-white transition-colors duration-200"
  >
    <Share2 className="w-4 h-4" />
    Share
  </Button>
);

export default ShareButton;
