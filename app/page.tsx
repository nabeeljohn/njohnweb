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
          
          {/* AboutMe boxes */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {/* Coding */}
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-start gap-3">
    {/* Coding Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
      />
    </svg>
    <h2 className="font-bold mb-2">Coding</h2>
    <p>
      Code, tools, and web apps — I build them to make life smoother. From handy utilities to creative projects, I focus on practical, clean, and thoughtfully designed solutions that anyone can enjoy.
    </p>
  </div>

  {/* Photography */}
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-start gap-3">
    {/* Camera Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-pink-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8c0-1.1.9-2 2-2h3.17l1.41-1.41c.37-.37.88-.59 1.41-.59h4.24c.53 0 1.04.22 1.41.59L15.83 6H19c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8z"
      />
      <circle cx="12" cy="13" r="3" />
    </svg>
    <h2 className="font-bold mb-2">Photography</h2>
    <p>
      Exploring forests, mountains, and city streets through the lens, capturing fleeting moments and hidden details that tell a story.
    </p>
  </div>

  {/* Nature */}
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-start gap-3">
    {/* Leaf Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-green-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C8.13 2 4.21 3.63 2 7c2.21 3.37 6.13 5 10 5s7.79-1.63 10-5c-2.21-3.37-6.13-5-10-5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12v10m-3-3l3 3 3-3"
      />
    </svg>
    <h2 className="font-bold mb-2">Nature</h2>
    <p>
      Exploring winding paths, golden skies, and everything that makes the journey memorable.
    </p>
  </div>
</div>
          {/* End AboutMe boxes */}

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