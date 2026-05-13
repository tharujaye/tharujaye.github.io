
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Figma, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Logo and Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-heading font-bold highlight-gradient mb-4">tharujaye</h2>
            <p className="text-muted-foreground">
              A multidisciplinary creative professional specializing in UI/UX design, 
              web development, and branding.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/tharujaye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/tharujaye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://figma.com/tharujaye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Figma size={20} />
                <span className="sr-only">Figma</span>
              </a>
              <a 
                href="https://twitter.com/tharujaye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://qbixlabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Qbix Labs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Products */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://kovariq.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Kovariq
                </a>
              </li>
              <li>
                <span className="text-foreground/70">Qbix Mail <span className="text-xs italic opacity-70">(In Dev)</span></span>
              </li>
              <li>
                <span className="text-foreground/70">Qbix Book <span className="text-xs italic opacity-70">(In Dev)</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} tharujaye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
