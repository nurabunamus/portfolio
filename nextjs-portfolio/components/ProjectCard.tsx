'use client';

import React from 'react';
import Image from 'next/image';
import { FaRegFolder } from 'react-icons/fa';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  websiteUrl: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  skills,
  websiteUrl,
}) => {
  return (
    <motion.div
      className="relative group rounded-xl w-90"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={imageSrc} alt={altText} width={500} height={500} />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col justify-around opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex w-5/6 justify-between items-center  mt-4 ml-4">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <FaRegFolder className="text-4xl text-green-600 cursor-pointer" />
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <BsBoxArrowInUpRight className="text-2xl text-green-600 cursor-pointer" />
          </a>
        </div>
        <div className="ml-4 mt-4 flex flex-col gap-4">
          <h3 className="text-lg font-bold mb-2 text-left">{title}</h3>
          <p className="text-sm text-left">{description}</p>
          <ul className="text-xs md:text-sm font-titleFont  flex gap-2  flex-wrap text-gray-400">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
