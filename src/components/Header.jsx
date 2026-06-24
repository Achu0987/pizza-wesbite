"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'pt-12 pb-6 bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className={`container mx-auto px-12 md:px-32 flex items-center justify-between relative transition-all duration-500 ${isScrolled ? 'mt-0' : 'mt-8'}`}>
          {/* Left: Logo */}
          <div className="flex-1 flex items-center justify-start z-50 cursor-pointer pl-8 md:pl-16">
            <span className="text-white text-xl md:text-2xl font-black tracking-[0.2em] uppercase drop-shadow-lg">
              PIZZA
            </span>
          </div>

          {/* Middle: Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
            {['Menu', 'Offers', 'About Us', 'Locations'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex-1 flex items-center justify-end gap-6 z-50">
            <button className="text-white/70 hover:text-white transition-colors duration-300 hidden md:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors duration-300 relative group">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors duration-300 ml-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {['Menu', 'Offers', 'About Us', 'Locations'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white text-2xl tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
