import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Jobs
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xl text-gray-400 hover:text-white">
            <FaFacebook />
            </a>
            <a href="#" className="text-xl text-gray-400 hover:text-white">
              <FaXTwitter />
            </a>
            <a href="#" className="text-xl text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* Copyright Information */}
        <div className="mt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Job Hunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
