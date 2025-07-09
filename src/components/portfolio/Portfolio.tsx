
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ExternalLink, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Updated projects array to match with the shared data
  const projects: Project[] = [
    {
      id: 1,
      title: 'EcoNest',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/EcoNest_dp.jpg',
      link: 'https://www.behance.net/gallery/222419661/EcoNest', 
    },
    {
      id: 2,
      title: 'LifeTrack',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/LifeTrack_dp.jpg',
      link: 'https://www.behance.net/gallery/222508327/LifeTrack', 
    },
    {
      id: 3,
      title: 'Eventide',
      category: ['UI/UX', 'Web'],
      image: '/projects/Eventide_dp.jpg',
      link: 'https://www.behance.net/gallery/224089101/Eventide-Event-booking-app',
    },
    {
      id: 4,
      title: 'Energex',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/Energex_dp.jpg',
      link: 'https://www.behance.net/gallery/224098755/Energex-Electricity-Management-App',          
    },
    {
      id: 5,
      title: 'BraveSpace',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/BraveSpace_dp.jpg',
      link: 'https://www.behance.net/gallery/224099153/BraveSpace-Thearaphy-app', 
    },
    {
      id: 6,
      title: 'FoCofi',
      category: ['UI/UX', 'Mobile'],
      image: '/projects/FoCofi_dp.jpg',
      link: '', 
    },
  ];

  const categories = ['all', 'UI/UX', 'Web', 'Mobile', 'Branding'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing UI/UX design, 
            web and mobile development, and branding work.
          </p>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              size="sm"
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
              delay={200 + index * 100}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio#portfolio" className="flex items-center gap-1">
              View All Projects <MoveRight size={16} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
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
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1"
            >
              View Project <ExternalLink size={14} />
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{project.title}</h3>
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
  );
};

export default Portfolio;
