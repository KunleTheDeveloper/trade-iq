import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  // Define skills list
  const coreSkills = [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "Git & GitHub",
    "Firebase",
    "UI/UX Implementation",
  ];

  // Ref and View Hook for scroll triggering
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation Variants for Text Content (Left Side)
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation Variants for Skills (Right Side)
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-gray-900 text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        
        {/* LEFT SECTION (2/3 width) - Bio and Story */}
        <motion.div
          className="md:col-span-2 flex flex-col gap-6"
          variants={contentContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          <motion.h4 variants={contentItemVariants} className="text-green-400 font-semibold tracking-widest uppercase text-sm">
            Who I Am
          </motion.h4>
          
          <motion.h2 variants={contentItemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Building intuitive digital experiences
            <span className="text-green-400">.</span>
          </motion.h2>
          
          <motion.div variants={contentItemVariants} className="text-lg text-gray-300 leading-relaxed flex flex-col gap-5">
            <p>
                Hi, I’m <strong>Kunle</strong>, a Frontend Developer who builds clean, fast, and modern web experiences. 
                I focus on creating interfaces that look good, feel smooth, and work flawlessly across all devices. 
                I work mainly with <strong>React, JavaScript, and Tailwind CSS</strong>, turning ideas into pixel-perfect, 
                functional designs.
            </p>
            <p>
                I’m serious about detail, obsessed with performance, and always pushing myself to write 
                better, smarter, and cleaner code. I love challenges, I learn fast, and I enjoy working on projects that make 
                an impact. If you’re looking for someone who takes frontend development seriously but keeps the process 
                simple and efficient that’s exactly what I do. Let’s build something amazing.
            </p>
          </motion.div>

          <motion.div variants={contentItemVariants} className="pt-4">
            <a 
              href="#contact" 
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION (1/3 width) - Skills List */}
        <div className="md:col-span-1 flex flex-col gap-6 pt-10 md:pt-0">
          
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold text-white border-b-2 border-green-500 pb-3"
          >
            Core Competencies
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap gap-3"
            variants={skillsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {coreSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={skillItemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#14532d", borderColor: "#22c55e" }}
                className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-medium border border-gray-700 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Optional Profile Image / Decor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-8 relative group"
          >
            <div className="absolute inset-0 bg-green-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
              alt="Coding illustration" 
              className="w-full rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300 relative z-10"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}