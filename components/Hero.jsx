"use client";
import Image from "next/image";
import React from "react";

import { useState, useEffect } from "react";

const Hero = () => {
  const [welcomeText, setWelcomeText] = useState("WELCOME TO THE WORLD");

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeText((prevText) => {
        if (prevText === "WELCOME TO THE WORLD") {
          return "EXPLORE THE WORLD";
        } else {
          return "WELCOME TO THE WORLD";
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex max-h-full items-center justify-center "
      style={{
        width: "full",
        height: "100vh",
        backgroundImage: "url('/travel.jpg')",
        backgroundSize: "cover", // "contain" | "cover" | "inherit" | "initial" | "revert" | "unset" | string
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-bold text-6xl text-purple-500"
        style={{
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de",
        }}
      >
        {welcomeText}
      </h1>
    </div>
  );
};

export default Hero;
