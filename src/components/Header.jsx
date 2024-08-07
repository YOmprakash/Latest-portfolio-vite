import { useState } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-scroll";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} className="fixed w-full z-50 bg-custom-green ">
      <div className="flex items-center justify-between px-4 md:px-16 md:py-4">
        <Link to="home" smooth={true} duration={500} offset={-50}>
          <span className="text-2xl font-extrabold text-custom-white cursor-pointer">
            OYdev.
          </span>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            offset={-70}
            className="text-lg cursor-pointer uppercase font-semibold text-custom-white hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-white hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-white hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-white hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-white hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center p-4" onClick={hamburgerMenu}>
          <IconMenu2 size={32} color='#FEFFFF' />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-custom-green shadow-lg transition-transform ${
          hamburger
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col items-center pt-6 relative">
          <div className="absolute top-4 right-4" onClick={hamburgerMenu}>
            <IconX size={32} color='#FEFFFF' />
          </div>
          <div className="flex flex-col items-center mt-6 space-y-6">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              offset={-70}
              className="text-3xl uppercase font-bold text-custom-white py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={700}
              offset={-90}
              className="text-3xl uppercase font-bold text-custom-white py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={700}
              offset={-100}
              className="text-3xl uppercase font-bold text-custom-white py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-50}
              className="text-3xl uppercase font-bold text-custom-white py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-50}
              className="text-3xl uppercase font-bold text-custom-white py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
