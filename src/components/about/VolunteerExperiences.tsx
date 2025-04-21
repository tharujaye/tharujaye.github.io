
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
      title: 'Community Lead',
      organization: 'Google Developer Student Club - IIT',
      period: '2023 - Present',
      description: 'Leading and organizing tech workshops, hackathons, and study jams to help students learn new technologies and build their skills.',
      achievements: [
        'Organized 5+ successful technical workshops',
        'Mentored 20+ students in web development',
        'Grew the community from 50 to 200+ active members'
      ]
    },
    {
      title: 'Tech Mentor',
      organization: 'Local Code Camp',
      period: '2022 - 2023',
      description: 'Volunteered as a programming mentor for high school students, teaching basic web development and programming concepts.',
      achievements: [
        'Taught HTML, CSS, and JavaScript to 30+ students',
        'Created learning materials and exercises',
        'Helped organize two successful student showcases'
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
