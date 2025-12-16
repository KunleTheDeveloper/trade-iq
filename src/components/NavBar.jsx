import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect for Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Handler Function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Stop the default jump behavior
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Offset calculation to ensure the navbar doesn't cover the section title
      // 80px is roughly the height of the navbar
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Close mobile menu after clicking
    setIsOpen(false); 
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - scrolls to top */}
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-3xl font-extrabold text-gray-900 tracking-tighter cursor-pointer"
        >
          KTD<span className="text-green-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-gray-700 font-medium hover:text-green-600 transition-colors relative group cursor-pointer"
            >
              {link.name}
              {/* Animated Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 focus:outline-none transform transition-transform duration-200 hover:scale-110"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with smooth slide/fade transition */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="bg-green-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-md cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}