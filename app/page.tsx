import MainHeader from "@/appcomponents/main/mainheader";
import AboutMe from "@/appcomponents/main/aboutme";

export const metadata = {
  title: "NJohn Web - Home"
};

export default function Home() {
  return (
    <>
      <div className="bg-gray-700 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          <AboutMe />

          {/* About Me */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Coding</h2>
              <p>
                Code, tools, and web apps — I build them to make life smoother. From handy utilities to creative projects, I focus on practical, clean, and thoughtfully designed solutions that anyone can enjoy
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Photography</h2>
              <p>
                Exploring forests, mountains, and city streets through the lens, capturing fleeting moments and hidden details that tell a story.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="font-bold mb-2">Nature</h2>
              <p>
                Exploring winding paths, golden skies, and everything that makes the journey memorable.
              </p>
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