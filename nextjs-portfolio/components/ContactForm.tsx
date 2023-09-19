'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center gap-10 p-4 md:p-8 lg:p-16 xl:p-20"
    >
      <motion.h2
        className="text-4xl md:text-4xl font-bold text-center dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-lg md:text-lg w-full md:w-2/3 lg:w-1/2 text-center leading-relaxed text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        If you'd like to connect or have any inquiries, please don't hesitate to
        reach out. I'm always eager to collaborate, discuss new projects, or
        answer any questions you may have.
      </motion.p>
      <motion.a
        href="mailto:nurabunamus99@gmail.com"
        className="w-48 md:w-56 bg-transparent border-green-600 dark:border-green-500 hover:bg-green-100 text-green-600 dark:text-green-500 hover:text-green-600 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg border-dashed border-2 text-center text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Contact me
      </motion.a>
      <br />
      <br />
      <SocialIcons />
    </motion.section>
  );
};

export default Contact;
