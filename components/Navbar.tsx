"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Github, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // New function to handle link clicks in the mobile menu
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all py-2 duration-300 border-b border-gray-600  ${
      isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#06B6D4" />
                <path d="M2 17L12 22L22 17" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
  <Link
    href="#home"
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    Home
  </Link>
  <Link
    href="#about"
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    About
  </Link>
  <Link
    href="#portfolio"
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    Portfolio
  </Link>
</div>

            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
         
              <Link href="https://github.com" className="ml-3 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-cyan-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-400">
                <span className="sr-only">View GitHub profile</span>
                <Github className="h-6 w-6" />
              </Link>
              <button
                className="px-6 py-3 mx-6  bg-gray-800 border-[#00fff9] text-white font-medium rounded-md relative overflow-hidden group transition-all duration-300 ease-in-out"
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

            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#0A0F23] h-screen flex flex-col justify-start pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 space-y-3 sm:px-3 flex flex-col items-center">
   <Link
    href="#home"
    onClick={handleLinkClick}
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    Home
  </Link>
  <Link
    href="#about"
    onClick={handleLinkClick}
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    About
  </Link>
  <Link
    href="#portfolio"
    onClick={handleLinkClick}
    className="relative text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    Portfolio
  </Link>
  <Link
    href="https://github.com/"
    onClick={handleLinkClick}
    className="relative flex mb-4  text-gray-300 hover:text-white  px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    <Github className="h-6 w-6 mx-1" />
    Github
  </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700 flex justify-center">
            <div className="flex items-center">
        
              <button
                className="px-6 py-3 mx-4  bg-gray-800 border-[#00fff9] text-white font-medium rounded-md relative overflow-hidden group transition-all duration-300 ease-in-out"
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
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
