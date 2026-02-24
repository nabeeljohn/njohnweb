import Image from "next/image";
import profilePic from "@/public/images/njohnphoto.jpg";

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-8 p-4 md:p-0">
      {/* Left Column: Image */}
      <div className="w-full md:w-[300px] flex justify-center md:justify-start">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg md:p-0 md:bg-transparent">
          <Image
            src={profilePic}
            alt="John's Profile Picture"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Column: Text */}
      <div className="w-full md:flex-1 flex flex-col justify-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          Hi, I’m Nabeel John
        </h1>

        <h3 className="text-lg md:text-xl font-semibold mb-3 leading-relaxed">
          Integration Developer at Higher Logic specializing in APIs, SSO, and scalable web solutions.
        </h3>

        <p className="text-base md:text-lg leading-relaxed mb-4">
          I design and build reliable integrations that connect systems, simplify workflows, and solve real business problems. My experience spans REST APIs, web services, authentication (OAuth, SAML, SSO), and modern frontend technologies like React and Next.js, backed by .NET on the server side.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Outside of development, you’ll usually find me behind a camera. I enjoy photography, hiking, and exploring new places — constantly looking for perspective and inspiration both on and off the screen.
        </p>
      </div>
    </div>
  );
}
