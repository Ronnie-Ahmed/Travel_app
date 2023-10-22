import React from "react";
import Button from "./Button";
import Image from "next/image";

const Camp = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center pt-6">
        <h1 className="font-bold text-4xl shadow-lg shadow-black rounded">
          Explore
        </h1>
      </div>
      <div className="flex flex-col items-end pr-6 pt-4">
        <button className="bg-gradient-to-r from-blue-400 via-sky-500 to-blue-500 hover:from-gray-500 hover:via-sky-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded-full">
          Discover More
        </button>
      </div>
      <div className="flex flex-row pt-6 gap-2 justify-center">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Image
              key={i}
              src="/img-1.png"
              alt="travel"
              height={800}
              width={400}
              quality={100}
              className="rounded-lg  cursor-pointer hover:shadow-2xl shadow-inherit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          ))}
      </div>
      <div className="flex flex-row pt-6 gap-2 justify-center">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Image
              key={i}
              src="/img-1.png"
              alt="travel"
              height={800}
              width={400}
              quality={100}
              className="rounded-lg  cursor-pointer hover:shadow-2xl shadow-inherit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          ))}
      </div>
    </div>
  );
};

export default Camp;
