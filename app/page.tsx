import Image from "next/image";

export const metadata = {
  title: "NJohn Web - Home"
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
        Coming Soon - Nabeel John
      </h1>
    </div>
  )
}