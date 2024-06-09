import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container text-white p-0">
      <div className="bg-primary mx-auto flex justify-between items-center p-4  rounded-sm">
        <div>
          <p className="text-center">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex">
          <a
            href="#"
            className="text-black hover:text-black mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-black hover:text-black mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-black hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
