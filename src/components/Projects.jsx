import React from "react";
import { Github, ExternalLink } from "lucide-react"; // We'll use these icons

// Mock data array for projects (Easier to manage than repeating JSX)
const projectData = [
  {
    title: "StichSmart E-commerce",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
  {
    title: "E-learning Platform",
    description: "An E-learning Platform for University with sleek navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://e-learning-platform-n673.vercel.app/",
    source: "#",
  },
  {
    title: "StichSmart E-commerce",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["React JS", "Tailwind CSS", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
    {
    title: "StichSmart E-commerce",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
  {
    title: "E-learning Platform",
    description: "An E-learning Platform for University with sleek navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://e-learning-platform-n673.vercel.app/",
    source: "#",
  },
  {
    title: "StichSmart E-commerce",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["React JS", "Tailwind CSS", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
      {
    title: "Brand Web Design",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
  {
    title: "Business Web Design",
    description: "An E-learning Platform for University with sleek navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://e-learning-platform-n673.vercel.app/",
    source: "#",
  },
  {
    title: "E-commerce Web Design",
    description: "A modern e-commerce platform that connects users with professional tailors for custom clothing delivered to their doorstep. Designed for scalability and ease-of-use.",
    tech: ["React JS", "Tailwind CSS", "Vercel"],
    image: "/src/assets/stitch-smart.PNG", // Use the original image import path
    live: "https://stitch-smart-nine.vercel.app/#how-it-works",
    source: "#",
  },
  
  
  // You can easily add more projects here!
];

export default function Projects() {
  return (
    <section 
        id="projects" 
        className="w-full bg-gray-50 py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Title */}
        <div className="text-center">
            <h4 className="text-green-600 font-semibold tracking-widest uppercase text-md">
                My Work
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900 mt-2">
              Recent Projects<span className="text-green-600">.</span>
            </h2>
        </div>
        
        {/* Project Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectData.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col justify-start bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-3 p-6">
                
                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-base">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-5 mt-4 border-t border-gray-100 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 font-semibold hover:text-gray-700 transition"
                  >
                    <Github size={18} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
        
        {/* Optional CTA to view more */}
      </div>
    </section>
  );
}