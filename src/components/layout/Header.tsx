import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-2 bg-background/90 backdrop-blur-md border-b'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="relative container max-w-screen-2xl mx-auto flex items-center justify-between min-h-[60px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-heading font-bold highlight-gradient">tharujaye</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-6 text-foreground px-6 py-4 shadow">
          <ul className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'font-medium text-sm transition-colors hover:text-primary relative',
                    location.pathname === item.href
                      ? 'text-primary after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
                      : 'text-foreground/80'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/TharushaJayawardenaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="https://studios.tharujaye.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 border border-cyan-500 text-cyan-400 bg-transparent px-4 py-2 rounded-md hover:bg-cyan-50 transition font-medium"
              style={{ boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' }}
            >
              Launch Studio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative w-full md:hidden">
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-b z-40">
            <nav className="container py-6">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        'block py-2 font-medium transition-colors hover:text-primary',
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground/80'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="/TharushaJayawardenaCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-1 justify-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="https://studios.tharujaye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-1 justify-center border border-cyan-500 text-cyan-400 bg-transparent px-4 py-2 rounded-md hover:bg-cyan-50 transition font-medium"
                    style={{ boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' }}
                  >
                    Launch Studio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
