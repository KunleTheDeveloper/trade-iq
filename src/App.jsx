import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Float from './components/Float'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Float />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
