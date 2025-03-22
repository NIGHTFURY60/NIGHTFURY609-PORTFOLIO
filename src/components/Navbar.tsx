
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'About', path: '/', section: 'about' },
    { name: 'Projects', path: '/', section: 'projects' },
    { name: 'Contact', path: '/', section: 'contact' }
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate navbar on load
  useEffect(() => {
    gsap.fromTo(
      ".nav-item", 
      { y: -20, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.6, 
        ease: "power3.out",
        delay: 0.5
      }
    );
  }, []);

  // Handle smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
        setNavOpen(false);
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight nav-item"
        >
          <span className="text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
              className={cn(
                "nav-item text-sm font-medium transition-colors hover:text-primary relative",
                "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary",
                "hover:after:w-full after:transition-all after:duration-300"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden flex flex-col space-y-1.5 nav-item"
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "block w-6 h-0.5 bg-primary transition-transform duration-300",
              navOpen && "translate-y-2 rotate-45"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-primary transition-opacity duration-300",
              navOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-primary transition-transform duration-300",
              navOpen && "-translate-y-2 -rotate-45"
            )} 
          />
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20",
            "transition-transform duration-300 ease-in-out",
            navOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link.section)}
                className="text-2xl font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
