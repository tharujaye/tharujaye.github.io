
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
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
      title: 'Ceytique',
      description: 'Complete brand identity for a luxury tea company.',
      category: ['Branding'],
      image: '/projects/Ceytique_dp.jpg',
      link: 'https://ceytique.com',          
    },
    {
      id: 5,
      title: 'BraveSpace',
      description: 'Mental health support and community platform.',
      category: ['UI/UX', 'Mobile'],
      image: '/placeholder.svg',
      link: 'https://www.behance.net/gallery/123456789/BraveSpace', 
    },
    {
      id: 6,
      title: 'Health Tracker Dashboard',
      description: 'Personal health monitoring platform with data visualization.',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: 'https://www.behance.net/gallery/123456789/Health-Tracker-Dashboard', 
    },
    {
      id: 7,
      title: 'Finance Dashboard UI',
      description: 'A comprehensive dashboard for financial data visualization and analysis.',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: '/portfolio/finance-dashboard',
    },
    {
      id: 8,
      title: 'Social Media Platform',
      description: 'Design and development of a niche social platform for creators.',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: '/portfolio/social-media-platform',
    },
    {
      id: 9,
      title: 'Coffee Shop Brand Identity',
      description: 'Complete branding package for an artisanal coffee chain.',
      category: ['Branding'],
      image: '/placeholder.svg',
      link: '/portfolio/coffee-branding',
    },
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
                        <Button asChild variant="secondary" size="sm" className="w-fit">
                          <Link to={project.link} className="flex items-center gap-1">
                            View Project <ExternalLink size={14} />
                          </Link>
                        </Button>
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
        <CaseStudies />

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
