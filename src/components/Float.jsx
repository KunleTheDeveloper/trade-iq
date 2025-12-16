import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase } from "react-icons/si";

const floatItems = [
  { text: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { text: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { text: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { text: "React", icon: <FaReact className="text-blue-300" /> },
  { text: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { text: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { text: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

export default function Float() {
  return (
    <div className="w-full bg-gray-900 py-12 overflow-hidden relative border-y border-gray-800">
      
      {/* 1. Gradient Fade - Left */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      
      {/* 2. Gradient Fade - Right */}
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* The Motion Container */}
      <div className="flex">
        <motion.div
          className="flex flex-shrink-0 gap-16 pr-16" 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed here (Higher = Slower)
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Optional: Pause on hover logic usually needs CSS, but simpler here:
        >
          {/* We render the items loop */}
          {floatItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-400 text-2xl font-bold hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="text-4xl drop-shadow-md">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* DUPLICATE: We need a second copy running right behind the first to make it seamless */}
        <motion.div
          className="flex flex-shrink-0 gap-16 pr-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 25, 
            repeat: Infinity,
          }}
        >
          {floatItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-400 text-2xl font-bold hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="text-4xl drop-shadow-md">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}