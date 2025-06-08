
import React from 'react';
import AnimatedSection from '../shared/AnimatedSection';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  isLeft?: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company, 
  description, 
  isLeft = true, 
  delay 
}) => {
  return (
    <AnimatedSection 
      className="relative flex items-center justify-between"
      animation={isLeft ? "fade-in-right" : "fade-in-left"}
      delay={delay}
    >
      {/* Line and circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border z-0">
        <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
      </div>
      
      {/* Content */}
      <div className={cn(
        'w-full',
        isLeft ? 'pr-8 lg:pr-16 lg:pl-0' : 'lg:pl-16 lg:pr-0 pr-8'
      )}>
        <div className={cn(
          'bg-card border border-border p-6 rounded-xl',
          isLeft ? 'lg:text-right' : 'lg:text-left',
        )}>
          <span className="text-sm font-medium text-primary">{year}</span>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <h4 className="text-muted-foreground font-medium">{company}</h4>
          <p className="mt-3">{description}</p>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="w-0 lg:w-full"></div>
    </AnimatedSection>
  );
};

const Timeline: React.FC = () => {
  const timelineItems = [    
    {
      year: '2023 - present',
      title: 'Music Producer',
      company: 'Tiii Jay Music',
      description: 'Producing LoFi music that blends different genres, including hip-hop, and electronic music. Released multiple singles, EPs, and albums.',
    },
        
    {
      year: '2022 - present',
      title: 'Freelance Graphic Designer',
      company: 'Tharu Jaye Studios',
      description: 'Designing graphics, visual designs for digital marketing campaigns for various client projects.',
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in design and development over the years.
          </p>
        </AnimatedSection>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
                isLeft={index % 2 === 0}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
