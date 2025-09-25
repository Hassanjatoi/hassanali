import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#121212] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/assets/logo.png" alt="Logo" className="h-10" />
        <nav className="flex gap-6 text-accent font-semibold">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="https://wa.me/447845490480" className="bg-accent text-black px-4 py-2 rounded-full hover:bg-white hover:text-accent">Let's Talk</a>
      </div>
    </header>
  );
};

export default Navbar;