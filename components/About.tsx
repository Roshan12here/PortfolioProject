'use client'

import { useState, useEffect } from 'react'

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '38', label: 'Years Old' },
    { value: '10+', label: 'Years Web Dev' },
    { value: '1', label: 'Amazing dog' },
    { value: '314$', label: 'Commits' },
  ]

  return (
    <div className="min-h-screen pt-12  bg-[#0A0F23]  text-white flex items-center justify-center p-4">
      <div 
        className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-4xl md:text-5xl  mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 font-bold">
          About Me
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={ ` bg-[#001731] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-[#992F7B]">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div 
          className={`space-y-6 text-lg   text-gray-300 leading-relaxed transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className=' text-center  text-lg   '>
          I'm a Cape Town based Web Developer and Entrepreneur. My focus area for the past few years has been front-end development with <span className='font-bold '> Next.js, Typescript and TailwindCSS</span>   to create beautiful user- and developer experiences that bring delight.
          </p>
          <p className=' text-center  text-lg   '>
          I’ve spent most of my life deeply interested in technology and food, continuously building things with both. As a teenager, I was a classic computer nerd, spending most of my times messing with the computer, doing 1 of 4 things: Modding games and figuring things out. Tinkering with hardware, building computers. Developing websites with FrontPage 98 and Flash. And of course, playing games..
          </p>
          <p className=' text-center  font-bold    '>
          Most of that is still true today.       
             </p>
        </div>
      </div>
    </div>
  )
}