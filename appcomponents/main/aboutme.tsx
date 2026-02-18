import Image from "next/image";
import profilePic from "@/public/images/njohnphoto.jpg";

export default function AboutMe() {
    return (
        <div className="w-full flex flex-col md:flex-row items-start md:gap-0">
            {/* Left Column: fixed width */}
            <div className="w-full md:w-[300px] flex justify-center md:justify-start" style={{ lineHeight: 0 }}>
                <Image
                    src={profilePic}
                    alt="John's Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg block"
                    style={{ display: "block" }}
                />
            </div>

            {/* Right Column: fill rest with padding-left */}
            <div className="w-full md:flex-1 flex flex-col justify-start p-0 m-0 md:pl-6">
                <h1 className="text-4xl font-bold mb-2 leading-tight m-0">Hi, I’m Nabeel John</h1>
                <p className="text-lg leading-tight mb-4">
                    I’m an Integration Developer at HigherLogic from upstate New York. I love building products that solve real problems and have experience with APIs, Webservices, SSO, and technologies including React, Next.js, and .NET.
                </p>

                <p className="text-lg leading-tight">
                    When I’m not working, you’ll usually find me behind a camera—I love photography and capturing moments from nature, travel, and everyday life. I also enjoy hiking, trying new foods, and exploring new places, always looking for inspiration both on and off the screen.
                </p>
            </div>
        </div>
    );
}