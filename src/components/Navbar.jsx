import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#story" onClick={() => setMobileMenuOpen(false)}>Story</a>
        <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
        <a href="#visit" onClick={() => setMobileMenuOpen(false)}>Visit</a>
        <a href="https://www.instagram.com/cafe_jinchuanbiyu/" target="_blank" rel="noopener noreferrer">追蹤我們</a>
      </div>

      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-logo">
            <img src="/assets/logo/logo_transparent.png" alt="金川碧玉" loading="lazy" />
            <span className="font-serif nav-logo-text">金川碧玉</span>
          </div>
          
          <div className="nav-links">
            <a href="#story" className="nav-link">Story</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#visit" className="nav-link">Visit</a>
            <a 
              href="https://www.instagram.com/cafe_jinchuanbiyu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-btn"
            >
              追蹤我們
            </a>
          </div>
          
          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
