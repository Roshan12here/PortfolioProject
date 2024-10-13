import React from 'react';
import { IconButton } from '@mui/material';
import { GitHub, Twitter, Facebook, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F23] text-gray-400 pt-16 pb-8 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm mt-4 sm:mt-0 order-2 sm:order-1">
          © 2024 Felix Tellmann, All rights reserved.
        </div>
        <div className="flex space-x-2 order-1 sm:order-2">
          <IconButton
            aria-label="GitHub"
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300"
          >
            <GitHub   className="text-white hover:text-cyan-300" fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300"
          >
            <Twitter   className="text-white hover:text-cyan-300" fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300"
          >
            <Facebook  className="text-white hover:text-cyan-300"fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300"
          >
            <LinkedIn    className="text-white hover:text-cyan-300"fontSize="small" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}
