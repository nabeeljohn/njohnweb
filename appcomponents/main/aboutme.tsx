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
        <p className="text-base md:text-lg leading-relaxed mb-4">
          I’m an Integration Developer at Higher Logic from upstate New York. I love building products that solve real problems and have experience with APIs, Webservices, SSO, and technologies including React, Next.js, and .NET.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          When I’m not working, you’ll usually find me behind a camera—I love photography and capturing moments from nature, travel, and everyday life. I also enjoy hiking, trying new foods, and exploring new places, always looking for inspiration both on and off the screen.
        </p>
      </div>

    </div>
  );
}
