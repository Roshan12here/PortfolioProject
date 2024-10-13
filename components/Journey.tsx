"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Computer, Wifi, Code, School, Gamepad, 
  Language, SmartToy, CloudQueue, Smartphone, EmojiEvents,
  CameraAlt, MusicNote, Brush, Book, Flight 
} from '@mui/icons-material';

const timelineData = [
  { year: 2000, icon: <Computer />, title: "First Computer", description: "Got my first personal computer and started exploring the digital world." },
  { icon: <Gamepad />, title: "Game Modding", description: "I got into game Modding and started experimenting, mostly with Counter Strike & the HL engine." },
  { year: 2002, icon: <Language />, title: "Web Discovery", description: "Discovered the vast world of the internet and started creating simple websites." },
  { year: 2003, icon: <Code />, title: "Coding Begins", description: "Wrote my first lines of code, starting with HTML and CSS." },
  { year: 2004, icon: <School />, title: "High School", description: "Entered high school and joined the computer science club." },
  { year: 2005, icon: <Wifi />, title: "Online Communities", description: "Became active in online forums and communities related to technology." },
  { year: 2006, icon: <CameraAlt />, title: "Digital Photography", description: "Developed an interest in digital photography and image editing." },
  { year: 2007, icon: <MusicNote />, title: "Digital Music", description: "Started creating digital music and exploring audio production." },
  { year: 2008, icon: <Brush />, title: "Graphic Design", description: "Delved into graphic design, creating logos and digital art." },
  { year: 2009, icon: <Book />, title: "Tech Blogging", description: "Started a tech blog to share my learning experiences and discoveries." },
  { year: 2010, icon: <SmartToy />, title: "Robotics", description: "Joined a robotics team and participated in competitions." },
  { year: 2011, icon: <Flight />, title: "Drone Programming", description: "Experimented with drone programming and aerial photography." },
  { year: 2012, icon: <CloudQueue />, title: "Cloud Computing", description: "Learned about cloud computing and started using AWS services." },
  { year: 2013, icon: <Smartphone />, title: "Mobile Development", description: "Developed my first mobile app for Android." },
  { year: 2014, icon: <EmojiEvents />, title: "Hackathon Win", description: "Won first place in a national coding hackathon." },
];           





export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Active content by index
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (timelineRef.current) {
        e.preventDefault();
        timelineRef.current.scrollLeft += e.deltaY;
        setActiveIndex(null); // Clear active content on scroll
      }
    };

    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (timeline) {
        timeline.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active state on click
  };

  return (
    <div className="bg-[#0A0F23] text-gray-300 p-2">
      <div className="relative overflow-x-auto pt-8 pb-4" ref={timelineRef}>
        <div className="pb-56">

          {/* Single line connecting all years */}
          <div className="absolute top-24 w-[2830px] left-0 right-0 h-px bg-gray-700"></div>

          {/* Timeline points */}
          <div className="flex pt-20">
            {timelineData.map((item, index) => (
              <div 
                key={index}  
                className="flex flex-col items-center relative mx-20"
                onMouseEnter={() => setActiveIndex(index)} // Set activeIndex on hover
                onClick={() => handleClick(index)} // Toggle activeIndex on click
              >
                {/* Year text */}
                {item.year && (
                  <span className="text-sm mb-2 font-bold absolute -top-6">{item.year}</span>
                )}
                <div className='w-px h-6 bg-gray-700'></div>               

                {/* Icon */}
                <div 
                  className={`text-cyan-400 transition-all duration-300 cursor-pointer ${
                    activeIndex === index ? 'transform translate-y-6' : ''
                  }`}
                >
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>

                {/* Active Item Details */}
                {activeIndex === index && (
                  <>
                    <div className="absolute top-14 w-px h-16 bg-cyan-400 transition-all duration-300"></div>
                    <div className="absolute top-28 bg-[#001731] p-4 rounded-md shadow-lg z-20 w-48 text-left transition-all duration-300">
                      <h3 className="font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-[#992F7B]">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
