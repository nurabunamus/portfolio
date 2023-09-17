'use client';

import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ResumeButton from './ResumeButton';
import Switcher from './Switcher';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Add 'overflow-hidden' class to the body when the menu is open
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      // Remove 'overflow-hidden' class when the menu is closed
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between space-x-4 text-center items-center h-24"
    >
      <div>
        <p className="font-bold text-2xl">Nur Abunamus</p>
      </div>

      <ul className="flex justify-around w-2/6 font-medium text-gray-600 text-lg dark:text-gray-100 hidden sm:flex">
        <li className="relative group">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={800}
            className="group-hover:text-black dark:group-hover:text-white group-hover:underline pb-1 transition-all duration-300 group-hover:cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={800}
            className="group-hover:text-black dark:group-hover:text-white group-hover:underline pb-1 transition-all duration-300 group-hover:cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="group-hover:text-black dark:group-hover:text-white group-hover:underline pb-1 transition-all duration-300 group-hover:cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex justify-between space-x-6 hidden sm:flex">
        <Switcher />
        <ResumeButton />
      </div>

      {/* Mobile Menu */}
      <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
        <FaBars className="h-7 w-7 dark:text-gray-400" />
      </div>
      <div
        className={
          menuOpen
            ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-slate-800 p-10 ease-in-out duration-500 z-50'
            : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 z-50'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={toggleMenu} className="cursor-pointer">
            <FaTimes className="h-8 w-8" />
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-col py-8">
          <div className="flex justify-center ">
            <Switcher />
          </div>
          <br />
          <br />
          <ul className="text-xl text-gray-200 ">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-6 hover:underline hover:text-green-400 hover:font-bold"
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-6 hover:underline hover:text-green-400 hover:font-bold"
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-6 hover:underline hover:text-green-400 hover:font-bold"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <br />
          <br />
          <ResumeButton />
          <br />
          <br />
          <br />
          <div className="md:hidden">
            <SocialIcons />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
