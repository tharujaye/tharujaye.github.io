import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CaseStudy } from '@/types/CaseStudy';

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

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'EcoNest | Sustainable Living',
    description: 'A comprehensive redesign of the client\'s digital banking platform, focusing on simplifying complex financial data and improving user engagement.',
    client: 'EcoNest',
    services: ['UI/UX Design', 'Mobile App Design', 'User Research'],
    image: '/projects/case_studies/EcoNest_csdp.jpg',
    link: 'https://www.notion.so/EcoNest-UI-UX-Case-Study-Designing-for-Sustainable-Urban-Living-2266cba848cc803e87ccfd76fd0ddb14?source=copy_link',
    featured: true,
  },
  {
    id: 2,
    title: 'LifeTrack | Diet and Lifestyle Management',
    description: 'Life Track is an innovative platform empowering individuals to take control of their health. By combining Al-driven personalization with comprehensive lifestyle management tools. we\'re revolutionizing NCD prevention and promoting healthier living.',
    client: 'LifeTrack',
    services: ['UI/UX Design', 'Mobile App Design', 'Healthcare'],
    image: '/projects/case_studies/LifeTrack_csdp.jpg',
    link: 'https://www.notion.so/LifeTrack-UI-UX-Case-Study-22a6cba848cc80ce9b8af1d94f7983c2?source=copy_link',
    featured: true,
  },
  {
    id:3,
    title: 'Energex | Home Energy Monitoring',
    description: 'Energex is a home energy monitoring platform that provides users with real-time insights into their energy consumption. The platform aims to help users reduce their carbon footprint and save on energy costs through data-driven insights and personalized recommendations.',
    client: 'Energex',
    services: ['UI/UX Design', 'Mobile App Design', 'Data Visualization'],
    image: '/projects/case_studies/Energex_dp.jpg',
    link: 'https://www.notion.so/Energex-A-UX-UI-Case-Study-in-Home-Energy-Monitoring-2256cba848cc80739cf0e95a77e963c8?source=copy_link',
    featured: true,
  },
  {
    id: 4,
    title: 'FoCoFi | Productivity Focus App',
    description: 'FoCoFi is a productivity-focused application designed to help users manage their time and tasks more effectively. By leveraging AI-driven insights and a user-friendly interface, FoCoFi aims to enhance personal productivity and well-being.',
    client: 'FoCoFi',
    services: ['UI/UX Design', 'Mobile App Design', 'Product Strategy'],
    image: '/projects/case_studies/FoCoFi_dp.jpg',
    link: 'https://www.notion.so/FoCoFi-UI-UX-Case-Study-2246cba848cc80a890acec3e71805fec?source=copy_link',
    featured: true,
  },
  {
    id: 5,
    title: 'GreenSeal | Certified Organic Food Marketplace',
    description: 'GreenSeal is a certified organic food marketplace that connects consumers with local farmers and producers. The platform focuses on promoting sustainable agriculture and providing users with access to fresh, organic produce.',
    client: 'GreenSeal',
    services: ['UI/UX Design', 'E-commerce', 'Branding'],
    image: '/projects/case_studies/GreenSeal_dp.jpg',
    link: 'https://www.notion.so/GreenSeal-UI-UX-Case-Study-2256cba848cc80aca622fca03f003cd2?source=copy_link',
    featured: true,
  },
  {
    id: 6,
    title: 'BraveSpace | Virtual Reality Therapy Platform',
    description: 'Virtual reality therapy platform designed to help children aged 7-12 overcome social anxiety disorder (SAD). The platform combines basic VR technology with mobile app integration to create an accessible and engaging therapeutic environment.',
    client: 'BraveSpace',
    services: ['VR', 'Visual Design', 'Mobile App Design'],
    image: '/projects/case_studies/BraveSpace_csdp.jpg',
    link: 'https://www.dropbox.com/scl/fi/k8t499ilja6gq3si8prz4/BraveSpace-Report.pdf?rlkey=e7ytezlisgca7j1o6dfzau895&st=jgpkhght&dl=0',
    featured: false,
  },
];

const CaseStudies: React.FC<{ onlyFeatured?: boolean }> = ({ onlyFeatured = true }) => {
  const studiesToShow = onlyFeatured
    ? caseStudies.filter(cs => cs.featured)
    : caseStudies;

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
          {studiesToShow.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {onlyFeatured && (
          <AnimatedSection className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio#case-studies" className="flex items-center gap-1">
                View All Case Studies <MoveRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;