import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Timeline from '@/components/about/Timeline';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import VolunteerExperiences from '@/components/about/VolunteerExperiences';

const AboutPage: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch',
    'React', 'TypeScript', 'Next.js', 'TailwindCSS',
    'Node.js', 'GraphQL', 'React Native', 'Flutter',
    'Brand Strategy', 'User Research', 'Wireframing', 'Prototyping'
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Westminster, United Kingdom',
      years: '2023 - 2027',
    },
    {
      degree: 'Foundation Certificate in Higher Education',
      school: 'Informatics Institute of Technology, Sri Lanka',
      years: '2022 - 2023',
    },
    {
      degree: 'Advanced Level in Physical Science',
      school: 'Dharmasoka Collage, Sri Lanka',
      years: '2022 - 2023',
    },
    {
      degree: 'Ordinary Level',
      school: 'Dharmasoka Collage, Sri Lanka',
      years: '2019 - 2020',
    },

  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">About Me</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                I create digital <span className="highlight-gradient">experiences</span> that matter
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                A passionate UI/UX designer and developer with over 8 years of experience creating 
                beautiful, functional digital products for clients across various industries.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-right">
                <div className="relative">
                  <img 
                    src="/aboutmepagedp.jpg" 
                    alt="About me" 
                    className="rounded-xl shadow-lg w-3/4 h-auto mx-auto" // Adjusted width to 75% of the container
                  />
                  <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl border border-border shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="text-xl font-bold">4+ Years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-left">
                <h2 className="text-3xl font-bold mb-6">My Design Philosophy</h2>
                <p className="text-muted-foreground mb-6">
                  I believe that great design is about more than just aesthetics—it's about creating 
                  seamless experiences that solve real problems. My approach combines user-centered 
                  design principles with technical expertise to build products that are both beautiful and functional.
                </p>
                <p className="text-muted-foreground mb-6">
                  My multidisciplinary background in both design and development allows me to bridge the gap 
                  between creativity and technical implementation, ensuring that the final product not only 
                  looks great but also performs flawlessly.
                </p>
                <p className="text-muted-foreground mb-8">
                  I'm passionate about continuous learning and staying on top of the latest design trends and 
                  technologies, while maintaining a focus on timeless design principles that create lasting value.
                </p>
                <a 
                  href="/TharushaJayawardenaCV.pdf" // Replace with the actual path to your PDF file
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Skills &amp; Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of tools, technologies, and skills I've acquired over my career.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-base rounded-lg"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Volunteer Experiences Section */}
        <VolunteerExperiences />
        
        {/* Education Section */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My academic background that helped shape my career.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={200 + index * 100}
                  className="mb-8 last:mb-0"
                >
                  <div className="bg-card border border-border p-8 rounded-xl">
                    <p className="text-primary font-medium mb-2">{edu.years}</p>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <Timeline />

        {/* Call to Action */}
        <section className="py-16">
          <div className="container">
            <AnimatedSection className="text-center">
              <div className="bg-card border border-border p-12 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  I'm currently available for freelance work and open to discussing new opportunities.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
