
import React from 'react';
import { Brush, Code, Smartphone, Layout, Lightbulb, Palette, ExternalLink } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <AnimatedSection
      animation="fade-in"
      delay={delay}
      className="group"
    >
      <div className="bg-card p-8 rounded-xl border border-border transition-all group-hover:shadow-md group-hover:border-primary/20">
        <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that enhance user experience.',
      icon: <Layout size={24} />,
    },
    {
      title: 'Web Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies.',
      icon: <Code size={24} />,
    },
    {
      title: 'Mobile Development',
      description: 'Crafting native and cross-platform mobile apps that deliver seamless experiences.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Brand Identity',
      description: 'Developing cohesive brand identities that communicate your unique value proposition.',
      icon: <Palette size={24} />,
    },
    {
      title: 'Creative Designing',
      description: 'Designing with creative vision and strategy to achieve business goals and create impact.',
      icon: <Lightbulb size={24} />,
    },
    {
      title: 'Digital Illustration',
      description: 'Creating custom illustrations and graphics that elevate your digital presence.',
      icon: <Brush size={24} />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a wide range of services to help you build and grow your digital presence.
            Each service is tailored to your specific needs and goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={200 + index * 100}
            />
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={800} className="text-center mt-16">
          <Button 
            asChild 
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <a 
              href="https://studios.tharujaye.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit My Studio
              <ExternalLink size={16} />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
