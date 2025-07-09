import React from 'react';
import { CaseStudy } from '@/types/CaseStudy';
import AnimatedSection from '../shared/AnimatedSection';
import { cn } from '@/lib/utils';


interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      animation={isEven ? 'fade-in-right' : 'fade-in-left'}
      className="mb-16 lg:mb-24"
    >
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
          !isEven && 'lg:flex-row-reverse lg:[direction:rtl]'
        )}
      >
        {/* Image Section */}
        <div className={cn(!isEven && 'lg:[direction:ltr]')}>
          <div className="relative">
            <span className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-full opacity-10" />
            <img
              src={study.image}
              alt={study.title}
              className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="text-left">
          <span className="text-sm px-3 py-1 bg-secondary rounded-full">
            {study.client}
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-3">
            {study.title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {study.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6 justify-start items-start text-left">
            {study.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 bg-muted text-xs rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            View Case Study
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudyCard;