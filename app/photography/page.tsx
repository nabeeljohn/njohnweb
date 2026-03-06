import { pageTitle } from "@/lib/metadata/metadata";
import PhotographySlideshow from "./slideshow";

export const metadata = {
  title: pageTitle("Photography"),
  description: "Explore the photography portfolio of Nabeel John, capturing moments from nature, wildlife, portraits, family sessions, and events.",
};

export default function PhotographyHome() {
  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Photography</h1>

        <p className="mt-2 mb-4 text-sm sm:text-lg">
          From the serene beauty of nature and sweeping landscapes, to the wild moments of wildlife and the heartfelt expressions in portraits, our photography captures every story. We also specialize in family sessions and event photography, preserving memories filled with love, laughter, and life’s most meaningful moments.
        </p>

        {/* Slideshow Component */}
        <PhotographySlideshow />
      </div>
    </div>
  );
}