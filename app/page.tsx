import MainHeader from "@/appcomponents/main/mainheader";

export const metadata = {
  title: "NJohn Web - Home"
};

export default function Home() {
  return (
    <>
      <div className="bg-gray-700 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Intro */}
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold">Hi, I’m Nabeel John</h1>
          </div>

          {/* About Me */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Coding</h2>
              <p>Clean code, tools, and web apps that make life easier.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Photography</h2>
              <p>Capturing moments from forests, mountains, and city streets.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Nature</h2>
              <p>Exploring trails, sunsets, and everything in between.</p>
            </div>
          </div>


<div className="grid md:grid-cols-2 gap-6 mt-12">
  <div className="p-6 border rounded-lg hover:shadow-lg transition">
    <h2 className="text-xl font-bold mb-2">URL Encoder</h2>
    <p>Quickly encode and decode URLs with ease.</p>
  </div>
  <div className="p-6 border rounded-lg hover:shadow-lg transition">
    <h2 className="text-xl font-bold mb-2">Todo List</h2>
    <p>Manage tasks and projects efficiently.</p>
  </div>
</div>


        </div>
      </div>
    </>
  );
}