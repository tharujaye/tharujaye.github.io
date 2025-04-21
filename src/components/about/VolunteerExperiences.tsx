
import React from 'react';
import AnimatedSection from '../shared/AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { CalendarCheck, Briefcase } from 'lucide-react';

interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
}

const VolunteerExperiences: React.FC = () => {
  const experiences: VolunteerExperience[] = [
    {
      title: 'Design & Media Coordinator',
      organization: 'IEEE Engineering in Medicine and Biology Society of IIT',
      period: '2025 - Present',
      description: 'As part of my involvement with the IEEE EMBS, I contributed to the Ignite event series, which focused on latest biomedical tech innovations. I contributed in designing visuals for the event and ensuring an engaging learning experience for participants.',
      achievements: [
        'Coordinated design and media for newly established Ignite event series',
      ]
    },
    {
      title: 'Design & Media Team',
      organization: 'Mozilla Campus Club of IIT',
      period: '2024 - present',
      description: 'As a volunteer for the PR and Media team in Mozilla campus club of IIT, I am contributing for the design team to design graphics and content for the events.',
      achievements: [
        "Organized 'Dev me' event series for Figma, Data Structures, and JavaScript for students",
        'Created design materials for the events',
      ]
    },
    {
      title: 'Public Visibility Coordinator',
      organization: 'IEEE Robotics & Automation Society Sri Lanka Chapter',
      period: '2024 - 2025',
      description: 'As a PV coordinator in IEEE Robotics & Automation Society Sri Lanka Chapter, I am designing graphics and content for the events.',
      achievements: [
        'Designed digital media for community events',   
        'Represented as a PV Coordinator in the chapter at national events',
      ]
    },
    {
      title: 'Design & Content Leader',
      organization: 'IEEE Robotics & Automation Society of IIT',
      period: '2023 - 2024',
      description: 'As the Editorial Lead Design for the IEEE Robotics and Automation Society of IIT, I am leading and empowers designing skills for functions and events of the Society.',
      achievements: [
        'Led design initiatives for community events',
        'Increased social media engagement by 40%',
        'Collaborated with local businesses for sponsorships',
        'Organized 2+ successful technical workshops'
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Volunteer Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Giving back to the community through technology education and mentorship.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in"
              delay={200 + index * 100}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{experience.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <CalendarCheck className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      {experience.achievements && (
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperiences;
