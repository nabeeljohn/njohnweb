"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  "/photography/photo01.jpg",
  "/photography/photo02.jpg",
  "/photography/photo03.jpg",
  "/photography/photo04.jpg",
  "/photography/photo05.jpg",
  "/photography/photo06.jpg",
  "/photography/photo07.jpg",
  "/photography/photo08.jpg",
  "/photography/photo09.jpg",
  "/photography/photo10.jpg",
];

export default function PhotographyHome() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Photography</h1>

        <p className="mt-2 mb-4 text-sm sm:text-lg">
          From the serene beauty of nature and sweeping landscapes, to the wild moments of wildlife and the heartfelt expressions in portraits, our photography captures every story. We also specialize in family sessions and event photography, preserving memories filled with love, laughter, and life’s most meaningful moments.
        </p>

        {/* Slideshow */}
        <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-lg shadow-lg">
          {/* Background Image using Next.js Image */}
          <div className="relative w-full h-full">
            <Image
              src={photos[current]}
              alt={`Photography ${current + 1}`}
              fill
              className="object-cover transition-opacity duration-1000"
            />
          </div>

          {/* Top Overlay Text */}
          <div className="absolute top-0 left-0 w-full p-6 sm:p-12 bg-gradient-to-b from-black/50 to-transparent text-white">
            <h2 className="text-2xl sm:text-4xl font-bold">
              Capture Life Through the Lens
            </h2>
            <p className="mt-2 text-sm sm:text-lg">
              Explore our photography portfolio with breathtaking moments.
            </p>
          </div>

          {/* Bottom Text + CTA */}
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 bg-gradient-to-t from-black/60 to-transparent text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                Let’s make memories together
              </h3>
              <p className="mt-1 text-sm sm:text-base">
                Book a session or explore our gallery.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">
                Book a Session
              </button>
              <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded font-semibold">
                View Gallery
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${i === current ? "bg-white" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}