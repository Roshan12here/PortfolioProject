"use client";
import React, { useState, useEffect } from "react";
import { Button, Chip, Typography } from "@mui/material";
import { FaNodeJs, FaShopify, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { CodeBlock, monoBlue } from "react-code-blocks";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 60);
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="bg-[#0A0F23] text-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[70%,30%] gap-8 items-center">
          <div>
            <Typography
              variant="h1"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4" // Adjusted font sizes here
            >
              I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 font-bold">
                Felix Tellmann
              </span>
              , a
              <br />
              Fullstack developer.
            </Typography>

            {/* Skills Logos with names */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <SiNextdotjs size={24} />
                <span>Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaNodeJs size={24} />
                <span>Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <SiTailwindcss size={24} />
                <span>Tailwind</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShopify size={24} />
                <span>Shopify</span>
              </div>
            </div>

            <Typography
              variant="body1"
              className="mb-4 text-gray-400 text-lg"
            >
              I love writing code that takes things to the next level, creating highly
              performant websites, automated API integrations, building my own
              dev-tools, and creating stunning user experiences that make you
              feel WOW!.
            </Typography>
            <Typography
              variant="body1"
              className="mb-6 text-gray-400 text-lg"
            >
              I am always keen to learn and explore new technologies,
              frameworks, and programming languages. Currently, I'm learning
              about Astro and Replicache.
            </Typography>
            <div className="flex space-x-4 mb-4">
              <button
                className="px-6 py-3 bg-gray-800 border-[#00fff9] text-white font-medium rounded-md relative overflow-hidden group transition-all duration-300 ease-in-out"
                style={{
                  boxShadow: `
                    0 0 5px #00fff9,
                    0 0 15px #00fff9,
                    0 0 25px #00fff9
                  `,
                }}
              >
                <span className="relative z-10">Let's Work</span>
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  style={{
                    background: `linear-gradient(45deg, 
                        #00fff9 0%, 
                        #00fff9 50%, 
                        #00fff9 100%)`,
                    filter: "blur(4px)",
                  }}
                ></div>
              </button>

              <Button
                variant="outlined"
                color="primary"
                className="border-cyan-600 text-cyan-400"
              >
                Resume
              </Button>
            </div>
          </div>

          {/* CodeBlock now with cyan gradient glowing background */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip label="Hiker" className="bg-[#0E8AAA]  text-[#ffffff]" size="medium" />
              <Chip label="Chef" className="bg-[#0E793C]  text-[#ffffff]"  size="medium" />
              <Chip label="Runner"  className="bg-[#481878]  text-[#ffffff]" size="medium" />
              <Chip label="Mixologist" className="bg-[#004493]  text-[#ffffff]" size="medium" />
            </div>

            {/* Glowing CodeBlock */}
            <div className="relative bg-gray-800 rounded-lg p-4 max-w-md mx-auto ">
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-80 blur-lg"
                style={{
                  boxShadow: `
                    0 0 5px #00fff9,
                    0 0 5px #00fff9,
                    0 0 5px #00fff9
                  `,
                }}
              ></div>
              <div className="relative">
                <CodeBlock
                  text={`import { FC } from 'react';

type WelcomeProps = {
  uses: string[];
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses.join('/')}</em>.
      </p>
    </>
  );
};`}
                  showLineNumbers={false}
                  language="typescript"
                  theme={monoBlue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="hidden lg:flex justify-center items-center min-h-[40vh] mt-[-26vh]">
        <div
          className="relative w-96 h-44 bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out"
          style={{
            transform: `translateY(${Math.sin(position * 0.1) * 10}px)`,
            boxShadow:
              "0 0 20px rgba(0, 255, 249, 0.5), 0 0 30px rgba(0, 255, 249, 0.3), 0 0 40px rgba(0, 255, 249, 0.1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#004493] to-[#001731] opacity-50 blur-xl"></div>
          <div className="relative p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center mb-2">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#00fff9]">
                  <Image
                    src="/ph2.jpg"
                    alt="Profile picture"
                    fill
                    style={{ objectFit: "cover" }} // Or you can use Tailwind CSS
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold text-white">
                    Felix Tellmann
                  </h2>
                  <p className="text-xs text-gray-400">@FelixTellmann</p>
                </div>
              </div>
              <button className="bg-[#09AACD] text-white px-1 py-2 rounded-full w-[20%] text-xs font-semibold hover:bg-cyan-400 hover:text-black transition-colors duration-300">
                Follow
              </button>
            </div>
            <p className="text-gray-300 mb-2 text-sm">
              Hey, I'm new to Twitter and not really a social media person 😅 I'm
              looking to connect with fellow developers and to learn about the
              latest...
            </p>
            <div className="flex justify-between items-center text-xs text-[#ffffff]">
              <span>218 Following</span>
              <span>45 Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
