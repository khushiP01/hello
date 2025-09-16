import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: "You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Framework', href: '#framework' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 transition-all duration-300 ${
          isScrolled ? 'rounded-2xl bg-white/80 backdrop-blur-lg subtle-border shadow-md' : 'rounded-full bg-white/50'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>IvyProfile</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={handleBookCall}>Log In</Button>
            <Button onClick={handleBookCall} className="rounded-full button-shadow">
              Book a Call
            </Button>
          </div>
          <div className="md:hidden">
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 mx-2 rounded-2xl bg-white p-6 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Button variant="secondary" onClick={handleBookCall} className="w-full rounded-full">Log In</Button>
              <Button onClick={handleBookCall} className="w-full rounded-full button-shadow">
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;



