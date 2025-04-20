import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  client: string;
  services: string[];
  image: string;
  link: string;
  featured?: boolean;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  // Alternate layout for even/odd indexes
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      animation={isEven ? "fade-in-right" : "fade-in-left"}
      className="mb-16 lg:mb-24"
    >
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
          !isEven && "lg:flex-row-reverse lg:[direction:rtl]"
        )}
      >
        <div className={cn(!isEven && "lg:[direction:ltr]")}>
          <div className="relative">
            <span className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-full opacity-10" />
            <img
              src={study.image}
              alt={study.title}
              className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        <div className={cn(!isEven && "lg:[direction:ltr]")}>
          <h3 className="text-primary font-medium mb-2">{study.client}</h3>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h2>
          <p className="text-muted-foreground mb-6">{study.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {study.services.map((service, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
              >
                {service}
              </span>
            ))}
          </div>

          <Button asChild>
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              View Case Study <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'EcoNest | Sustainable Living',
      description: 'A comprehensive redesign of the client\'s digital banking platform, focusing on simplifying complex financial data and improving user engagement.',
      client: 'EcoNest',
      services: ['UI/UX Design', 'Mobile App Design', 'User Research'],
      image: '/projects/case_studies/EcoNest_csdp.jpg',
      link: 'https://www.dropbox.com/scl/fi/yorb8mrjlhfecw7vukrys/EcoNest-Presentation.pdf?rlkey=65h5augf38ms3hml4vajxqcbb&st=vwrd9kcb&dl=0',
      featured: true,
    },
    {
      id: 2,
      title: 'LifeTrack | Diet and Lifestyle Management',
      description: 'Life Track is an innovative platform empowering individuals to take control of their health. By combining Al-driven personalization with comprehensive lifestyle management tools. we\'re revolutionizing NCD prevention and promoting healthier living.',
      client: 'LifeTrack',
      services: ['UI/UX Design', 'Mobile App Design', 'Healthcare'],
      image: '/projects/case_studies/LifeTrack_csdp.jpg',
      link: 'https://www.dropbox.com/scl/fi/i1spu1mw5p56b4propqov/LifeTrack-Presentation.pptx?rlkey=i67hyp96yw215o794y6g23f66&st=8jodr9fd&dl=0',
      featured: true,
    },
    {
      id: 3,
      title: 'BraveSpace | Virtual Reality Therapy Platform',
      description: 'Virtual reality therapy platform designed to help children aged 7-12 overcome social anxiety disorder (SAD). The platform combines basic VR technology with mobile app integration to create an accessible and engaging therapeutic environment.',
      client: 'BraveSpace',
      services: ['VR', 'Visual Design', 'Mobile App Design'],
      image: '/projects/case_studies/BraveSpace_csdp.jpg',
      link: 'https://www.dropbox.com/scl/fi/k8t499ilja6gq3si8prz4/BraveSpace-Report.pdf?rlkey=e7ytezlisgca7j1o6dfzau895&st=jgpkhght&dl=0',
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into selected projects where I solved complex problems and delivered exceptional results.
          </p>
        </AnimatedSection>

        <div className="mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio" className="flex items-center gap-1">
              Explore All Case Studies <MoveRight size={16} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudies;
