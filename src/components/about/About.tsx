
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../shared/AnimatedSection';
import { MoveRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-right" className="relative">
            <div className="relative z-10">
              <img 
                src="/aboutme.jpg" 
                alt="About me" 
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-2xl border-4 border-primary/30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-2xl bg-secondary -z-10"></div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              A passionate Designer &amp; Developer based in Sri Lanka
            </h3>
            <p className="text-muted-foreground mb-6">
              With over 4 years of experience in the creative technology industry, I've had 
              the privilege of working with amazing clients across various sectors. 
              My approach combines design thinking with technical expertise to create 
              solutions that are not only beautiful but also functional and user-focused.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey began in graphic design, then expanded to include UX/UI design, 
              front-end and back-end development, and mobile app creation. This 
              multidisciplinary background allows me to oversee projects holistically, 
              ensuring seamless execution from concept to completion.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/about" className="flex items-center gap-2">
                More About Me <MoveRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
