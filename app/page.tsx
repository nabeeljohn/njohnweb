import MainHeader from "@/appcomponents/mainheader";

export const metadata = {
  title: "NJohn Web - Home"
};

export default function Home() {
  return (
    <>
      <MainHeader />
<div className="min-h-screen bg-gray-700 text-gray-100 py-12">
  <div className="max-w-7xl mx-auto px-6">

          {/* Intro */}
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold">Hi, I’m Nabeel John</h1>
          </div>

          {/* About Me */}
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a software developer with a passion for crafting elegant
            web applications and intuitive tools. I enjoy solving problems
            with clean code, learning new technologies, and building projects
            that make life easier for others...
          </p>
        </div>
      </div>
    </>
  );
}