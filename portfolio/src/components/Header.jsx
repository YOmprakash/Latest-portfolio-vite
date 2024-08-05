import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-scroll";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4 md:px-16 md:py-4">
        <Link to="home" smooth={true} duration={500} offset={-70}>
          <span className="text-2xl font-extrabold text-custom-blue cursor-pointer">
            OYdev.
          </span>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg cursor-pointer uppercase font-semibold text-custom-blue hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-40}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-blue hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-100}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-blue hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-blue hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-lg uppercase cursor-pointer font-semibold text-custom-blue hover:text-custom-blue hover:font-semibold border-b-2 border-transparent hover:border-custom-blue transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <div
          className="md:hidden flex items-center p-4"
          onClick={hamburgerMenu}
        >
          <IconMenu2 size={32} color="#4831d4" />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-custom-white shadow-lg transition-transform ${
          hamburger
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col items-center pt-6 relative">
          <div className="absolute top-4 right-4" onClick={hamburgerMenu}>
            <IconX size={32} color="#4831d4" />
          </div>
          <div className="flex flex-col items-center mt-6 space-y-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-3xl uppercase font-bold text-custom-blue py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-90}
              className="text-3xl uppercase font-bold text-custom-blue py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-3xl uppercase font-bold text-custom-blue py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-3xl uppercase font-bold text-custom-blue py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-3xl uppercase font-bold text-custom-blue py-4 border-b-2 border-gray-200 w-full text-center"
              onClick={hamburgerMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
