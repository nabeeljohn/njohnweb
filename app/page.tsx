import Image from "next/image";

export const metadata = {
  title: "NJohn Web - Home"
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md rounded-lg bg-gray-200 p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Coming Soon - Nabeel John
        </h1>
      </div>
    </div>
  )
}