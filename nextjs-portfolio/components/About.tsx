/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8 },
    visible: {
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="h-screen flex flex-col lg:flex-row items-center gap-10"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-5/6">
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            src="/me2.jpg"
            alt="me"
            width={600}
            height={600}
            className="transform hover:scale-105 transition-transform duration-300 rounded-xl"
          />
        </motion.div>
      </div>
      <motion.div
        className="w-5/6 font-medium text-center lg:text-left"
        variants={textVariants}
      >
        <h2 className="text-xl leading-normal md:leading-relaxed lg:text-3xl dark:text-white">
          I help people make the world better through quality software.
        </h2>
        <br />
        <br />
        <p className="text-md leading-relaxed lg:text-xl lg:leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
          When I'm not spending quality time with my family or engrossed in
          historical tales, you can find me immersed in the world of
          watercolors, carefully blending colors on canvas, or delving into the
          depths of history books and artifacts. Whether I'm creating art or
          exploring the past, these passions ignite my curiosity and provide
          endless inspiration.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
