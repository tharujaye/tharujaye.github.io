
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/contact/Contact';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ContactPage: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">Contact</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's <span className="highlight-gradient">Connect</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                Have a project in mind or want to chat about a potential collaboration? 
                I'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about my work process, services, and collaboration.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6">
                {[
                  {
                    question: 'What services do you offer?',
                    answer: 'I offer a range of creative services including UI/UX design, web development, mobile app design and development, brand identity design, and digital strategy consultation.'
                  },
                  {
                    question: 'What is your typical process for new projects?',
                    answer: 'My process typically includes discovery and requirements gathering, research, conceptualization and wireframing, design and prototyping, development, testing and refinement, and finally launch and support.'
                  },
                  {
                    question: 'How do you charge for your services?',
                    answer: 'I offer both project-based pricing and hourly rates depending on the scope and requirements of the project. I provide detailed quotes after an initial consultation to understand your specific needs.'
                  },
                  {
                    question: 'How long does a typical project take to complete?',
                    answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive application could take 8-12 weeks or more. I provide timeline estimates during our initial discussions.'
                  },
                                                    
                ].map((faq, index) => (
                  <AnimatedSection 
                    key={index}
                    animation="fade-in"
                    delay={200 + index * 100}
                    className="bg-card border border-border p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
