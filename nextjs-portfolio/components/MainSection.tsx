/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import SocialIcons from './SocialIcons';

const MainSection = () => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (hovered) {
      controls.start({ scale: 1.1 });
    } else {
      controls.start({ scale: 1 });
    }
  }, [hovered, controls]);

  const iconVariants = {
    filled: { borderColor: '#00FF00' },
    unfilled: { borderColor: '#FFFFFF' },
  };


  return (
    <section className="flex flex-col md:flex-row items-center h-screen justify-center md:justify-around gap-3 md:h-screen md:relative">
      <motion.div
        className="text-xl w-5/6 flex flex-col gap-10 md:gap-10 text-center md:text-4xl md:w-7/12 md:text-left md:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-4xl">
          I'm{' '}
          <span className="text-4xl text-green-500 font-bold sm:text-6xl">
            Nur Abunamus
          </span>
        </h1>
        <h2 className="dark:text-gray-200">
          Computer Engineer specialized in web development
        </h2>
        <motion.p
          className="text-base font-semibold dark:font-normal text-gray-600 dark:text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Passionate Backend Developer proficient in JavaScript, Node.js, and
          experienced in both relational (SQL) and non-relational (NoSQL)
          databases. Committed to continuous growth for effective web solutions.
        </motion.p>
        <br />
        <motion.div
          className="flex items-center justify-center gap-4 sm:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="about" // The target section's name (should match the name attribute of the target section)
            spy={true} // Enable active class for the current section
            smooth={true} // Enable smooth scrolling
            duration={800}
          >
            <motion.button
              variants={iconVariants}
              whileHover="filled"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-500 dark:border-gray-300 dark:text-white flex justify-center items-center hover:border-black sm:w-20 sm:h-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                className="fill-current dark:fill-white"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </motion.button>
          </Link>
          <motion.p
            className="text-lg font-bold sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Learn more about Nur
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-120 h-100 rounded-full overflow-hidden hidden md:block mr-30 right-6 top-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Image
          src="/me.jpg"
          alt="me"
          width={450}
          height={100}
          className="transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <div className="hidden md:block">
        <SocialIcons />
      </div>
    </section>
  );
};

export default MainSection;
