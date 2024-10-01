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
    transition={{ duration: 0.5 }} className="fixed z-50 w-full bg-custom-green ">
      <div className="flex items-center justify-between px-4 md:px-16 md:py-4">
        <Link to="home" smooth={true} duration={500} offset={-50}>
          <span className="text-2xl font-extrabold cursor-pointer text-custom-white">
            OYdev.
          </span>
        </Link>
        <div className="hidden space-x-10 md:flex">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            offset={-70}
            className="text-lg font-semibold uppercase transition-all duration-300 border-b-2 border-transparent cursor-pointer text-custom-white hover:text-custom-blue hover:font-semibold hover:border-custom-blue"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg font-semibold uppercase transition-all duration-300 border-b-2 border-transparent cursor-pointer text-custom-white hover:text-custom-blue hover:font-semibold hover:border-custom-blue"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg font-semibold uppercase transition-all duration-300 border-b-2 border-transparent cursor-pointer text-custom-white hover:text-custom-blue hover:font-semibold hover:border-custom-blue"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg font-semibold uppercase transition-all duration-300 border-b-2 border-transparent cursor-pointer text-custom-white hover:text-custom-blue hover:font-semibold hover:border-custom-blue"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-50}
            className="text-lg font-semibold uppercase transition-all duration-300 border-b-2 border-transparent cursor-pointer text-custom-white hover:text-custom-blue hover:font-semibold hover:border-custom-blue"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center p-4 md:hidden" onClick={hamburgerMenu}>
          <IconMenu2 size={32} color='#FEFFFF' />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-white shadow-lg transition-transform ${
          hamburger
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible "
        } ease-in-out duration-500`}
      >
        <div className="relative flex flex-col items-center pt-6">
          <div className="absolute top-4 right-4" onClick={hamburgerMenu}>
            <IconX size={32} color='#17252A' />
          </div>
          <div className="flex flex-col items-center mt-6 space-y-6 text-custom-blue">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              offset={-70}
              className="w-full py-4 text-3xl font-bold text-center uppercase border-b-2 border-gray-200 text-custom-blue"
              onClick={hamburgerMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={700}
              offset={-90}
              className="w-full py-4 text-3xl font-bold text-center uppercase border-b-2 border-gray-200 "
              onClick={hamburgerMenu}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={700}
              offset={-100}
              className="w-full py-4 text-3xl font-bold text-center uppercase border-b-2 border-gray-200 "
              onClick={hamburgerMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-50}
              className="w-full py-4 text-3xl font-bold text-center uppercase border-b-2 border-gray-200 "
              onClick={hamburgerMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-50}
              className="w-full py-4 text-3xl font-bold text-center uppercase border-b-2 border-gray-200 "
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
