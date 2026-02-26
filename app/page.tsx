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
            {/* Contact CTA */}
            <div className="p-8 border rounded-lg hover:shadow-lg transition bg-gray-800">
              <h2 className="text-2xl font-bold mb-3">Let’s Work Together</h2>
              <p className="text-gray-400 mb-6">Have an idea, a challenge, or something worth exploring? I’m always open to meaningful conversations.
              </p>
              <a
                href="/contactme"
                className="inline-block px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Contact Me
              </a>
            </div>
            {/* Projects CTA */}
            <div className="p-8 border rounded-lg hover:shadow-lg transition bg-gray-800">
              <h2 className="text-2xl font-bold mb-3">See What I’m Building</h2>
              <p className="text-gray-400 mb-6">
                Explore my latest projects, experiments, and the tools I’m currently working on.
              </p>
              <a
                href="/projects"
                className="inline-block px-5 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}