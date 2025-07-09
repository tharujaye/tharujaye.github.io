import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { CaseStudy } from '@/types/CaseStudy';
import CaseStudies from '@/components/case-studies/CaseStudies';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  link: string;
}

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'EcoNest',
      description: 'A sustainable living companion app helping users reduce their environmental impact.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/EcoNest_dp.jpg',
      link: 'https://www.behance.net/gallery/222419661/EcoNest', 
    },
    {
      id: 2,
      title: 'LifeTrack',
      description: 'Comprehensive health and wellness tracking application.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/LifeTrack_dp.jpg',
      link: 'https://www.behance.net/gallery/222508327/LifeTrack', 
    },
    {
      id: 3,
      title: 'Eventide',
      description: 'Modern event booking and management platform.',
      category: ['UI/UX', 'Web'],
      image: '/projects/Eventide_dp.jpg',
      link: 'https://www.behance.net/gallery/224089101/Eventide-Event-booking-app',
    },
    {
      id: 4,
      title: 'Energex',
      description: 'Electricity management app for efficient energy consumption.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/Energex_dp.jpg',
      link: 'https://www.behance.net/gallery/224098755/Energex-Electricity-Management-App',          
    },
    {
      id: 5,
      title: 'BraveSpace',
      description: 'Therapy app designed to create a safe space for users.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/BraveSpace_dp.jpg',
      link: 'https://www.behance.net/gallery/224099153/BraveSpace-Thearaphy-app', 
    },
    {
      id: 6,
      title: 'FoCofi',
      description: 'Productivity Focus App with LoFi music.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/FoCofi_dp.jpg',
      link: '',    
    },
    {
      id: 7,
      title: 'GreenSeal',
      description: 'Organic and sustainable product marketplace connecting eco-conscious consumers with green brands.',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/GreenSeal_dp.jpg',
      link: '',
    },
    {
      id: 8,
      title: 'PassPorter',
      description: 'Event management system UI built with React.',
      category: ['Web'],
      image: '/projects/PassPorter_dp.jpg',
      link: 'https://github.com/tharujaye/EventManagement-UI',
    },
    {
      id: 8,
      title: 'Real Time Event Ticketing System',
      description: 'Event Ticketing Web App.',
      category: ['Web'],
      image: '/projects/RealTimeTickets_dp.jpg',
      link: 'https://github.com/tharujaye/Real-Time-Event-Ticketing-System',
    },
    {
      id: 9,
      title: 'Synerger',
      description: 'Blog page about sustainable energy.',
      category: ['Web'],
      image: '/projects/Synerger_dp.png',
      link: 'https://tharujaye.github.io/synerger/',
    },
    {
      id: 10,
      title: 'Flight Booking App',
      description:' A flight booking CLI application that allows users to search and book flights easily.',
      category: ['Web'],
      image: '/projects/FlightApp_dp.jpg',
      link: 'https://github.com/tharujaye/Flight-Booking-App',
    },
    {
      id: 11,
      title: 'Bookstore App',
      description: 'A Client Server architecture for a bookstore platform with a wide selection of books.',
      category: ['Web'],
      image: '/projects/BookstoreApp_dp.jpg',
      link: 'https://github.com/tharujaye/Bookstore_App',
    },
    {
      id: 12,
      title: 'Result Analysing App',
      description: 'A CLI application that allows users to analyze and visualize their exam results.',
      category: ['Web'],
      image: '/projects/ResultAnalyser_dp.jpg',
      link: 'https://github.com/tharujaye/Result-Analysing-System',
    },
    {
      id: 13,
      title: 'BoardGame',
      description: 'A simple CLI board game built with Python.',
      category: ['Web'],
      image: '/projects/BoardGame_dp.jpg',
      link: 'https://github.com/tharujaye/BoardGame',
    },
    {
      id: 13,
      title: 'Ceytique',
      description: 'Modern luxury clothing brand designed for those who seek exclusivity and style.',
      category: ['Branding'],
      image: '/projects/Ceytique_dp.jpg',
      link: 'https://ceytique.com',
    },
    {
      id: 14,
      title: 'Bookshelf',
      description: 'eCommerce book store.',
      category: ['Branding'],
      image: '/projects/Bookshelf_dp.jpg',
      link: 'https://bookshelf.lk',
    }
  ];
  
  const categories = ['all', 'UI/UX', 'Web', 'Mobile', 'Branding'];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">Portfolio</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                My Recent <span className="highlight-gradient">Projects</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                Explore my selected works showcasing UI/UX design, web and mobile development, and branding projects.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24">
          <div className="container">
            {/* Filter buttons */}
            <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </AnimatedSection>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.id} 
                  animation="fade-in"
                  delay={200 + (index % 3) * 100}
                >
                  <div className="flex flex-col gap-4">
                    <div className="group relative overflow-hidden rounded-xl">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-foreground/60 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                        {project.link ? (
                          <Button asChild variant="secondary" size="sm" className="w-fit">
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex items-center gap-1"
                            >
                              View Project <ExternalLink size={14} />
                            </a>
                          </Button>
                        ) : (
                          <Button
                            variant="secondary"
                            size="sm"
                            className="w-fit"
                            onClick={() =>
                              toast({
                                title: "Coming Soon!",
                                description: "This project is currently in development.",
                              })
                            }
                          >
                            View Project <ExternalLink size={14} />
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.category.map(cat => (
                          <span 
                            key={cat} 
                            className="px-3 py-1 bg-muted text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-secondary">
          <div className="container">
            <CaseStudies onlyFeatured={false} />
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="text-center py-20">
          <div className="container">
            <div className="bg-card border border-border p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
