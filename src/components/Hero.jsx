import React from "react";
import { motion } from "framer-motion";
import user from "../assets/user.png";
import { Github, Linkedin, Twitter, ArrowRight, Download, MessageCircle } from "lucide-react";

// Animation variants for staggered text revealing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation for the image container
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

// Continuous floating animation for background blobs
const floatingBlobVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  // WhatsApp Configuration
  const whatsappNumber = "2348188831681"; // Replace with your number
  const whatsappMessage = encodeURIComponent("Hi Kunle, I'm reaching out from your portfolio page to discuss a project.");

  return (
    <section id="home" className="w-full min-h-screen bg-gray-50 flex items-center pt-24 md:pt-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 relative">

        {/* Left: Text Content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mx-auto md:mx-0 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-2">
            👋 Available for Hire
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Kunle.
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-700">
            I build <span className="text-gray-900 underline decoration-green-500 underline-offset-4">pixel-perfect</span> web experiences.
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a Frontend Developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products using
            <strong> React</strong> and <strong>Tailwind CSS</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:border-gray-900 hover:text-black transition-all duration-300"
            >
              View My Work <Download size={20} />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Contact Me <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-8 justify-center md:justify-start items-center text-gray-500">
            <span className="text-sm font-medium uppercase tracking-wider">Find me on:</span>
            <a href="https://github.com/kunlethedeveloper"  target="_blank" className="hover:text-green-600 hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/kunlethedeveloper" target="_blank" className="hover:text-blue-600 hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="https://www.x.com/kunle_dev" target="_blank"  className="hover:text-sky-500 hover:scale-110 transition-all"><Twitter size={24} /></a>
          </motion.div>
        </motion.div>

        {/* Right: Image Area */}
        <div className="flex-1 flex justify-center relative">
          {/* Blobs */}
          <motion.div 
            variants={floatingBlobVariants}
            animate="animate"
            className="absolute top-0 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          ></motion.div>
          <motion.div
            variants={floatingBlobVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -bottom-8 left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          ></motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-64 h-64 md:w-96 md:h-96 bg-white p-4 rounded-full shadow-2xl border border-gray-100 z-10"
          >
            <img
              src={user}
              alt="Kunle The Developer"
              className="w-full h-full rounded-full object-cover"
            />
            {/* Tech Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* -------------------------------------------------- */}
      {/* FLOATING & BOBBING WHATSAPP BUTTON                 */}
      {/* -------------------------------------------------- */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0] // Bobbing animation up and down
        }}
        transition={{ 
            delay: 1, 
            duration: 0.5, // Entrance duration
            y: {
                duration: 2, // Speed of the bobbing
                repeat: Infinity, // Loop forever
                ease: "easeInOut"
            }
        }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-green-500/50 cursor-pointer flex items-center justify-center"
      >
        <MessageCircle size={32} fill="white" />
      </motion.a>

    </section>
  );
}