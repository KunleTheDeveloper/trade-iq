import React, { useRef } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Import WhatsApp-like icon

export default function Contact() {
  // Scroll detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Specific animation for the form container
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // Replace with your actual phone number (international format without +)
  // Example: 2348012345678 for Nigeria
  const whatsappNumber = "2348188831681"; 
  const whatsappMessage = encodeURIComponent("Hi Kunle, I'd like to discuss a project with you!");

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full bg-gray-50 py-20 px-8 md:px-24 flex flex-col items-center gap-12"
    >
      {/* Text Header Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-6 w-full"
      >
        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900 text-center">
          Contact Me<span className="text-green-600">.</span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="max-w-2xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
          Got a project idea, collaboration request, or want to connect?
          I’d love to hear from you!  
          Fill out the form below or chat with me directly.
        </motion.p>
      </motion.div>

      {/* Contact Form Container */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        
        <motion.form
          action="https://formspree.io/f/mgvnranp"
          method="POST"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6 border border-gray-100"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Full Name</label>
            <motion.input
              whileFocus={{ scale: 1.01, borderColor: "#16a34a" }}
              type="text"
              name="name"
              required
              className="w-full bg-gray-50 rounded-lg p-3 outline-none border border-gray-300 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email</label>
            <motion.input
              whileFocus={{ scale: 1.01, borderColor: "#16a34a" }}
              type="email"
              name="email"
              required
              className="w-full bg-gray-50 rounded-lg p-3 outline-none border border-gray-300 transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.01, borderColor: "#16a34a" }}
              name="message"
              rows="5"
              required
              className="w-full bg-gray-50 rounded-lg p-3 outline-none border border-gray-300 transition-all"
              placeholder="Write your message here..."
            ></motion.textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, backgroundColor: "#15803d" }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-lg shadow-md transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* WhatsApp Button Separator */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-4 justify-center w-full"
        >
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-500 text-sm font-medium">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02, backgroundColor: "#25D366", color: "#ffffff" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 w-full bg-white border-2 border-[#25D366] text-[#25D366] py-3 rounded-xl font-semibold text-lg shadow-sm transition-colors"
        >
          <MessageCircle size={24} />
          Chat on WhatsApp
        </motion.a>

      </div>
    </section>
  );
}