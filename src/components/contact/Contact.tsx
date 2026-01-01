import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import AnimatedSection from '../shared/AnimatedSection';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const apiKey = import.meta.env.VITE_CONTACT_API_KEY || '';
      
      // Debug: Check if API key is loaded
      if (!apiKey) {
        console.error('API key is missing! Please set VITE_CONTACT_API_KEY in your .env file');
        toast({
          title: "Configuration Error",
          description: "API key is not configured. Please contact the administrator.",
          variant: "destructive",
        });
        return;
      }
      
      const response = await fetch("https://api.qbixlabs.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        // Get error details from response
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', response.status, errorData);
        
        // Check if it's a domain restriction error
        if (response.status === 403 && errorData.error?.includes('Domain not allowed')) {
          const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
          
          toast({
            title: isDevelopment ? "Development Mode Notice" : "Access Denied",
            description: isDevelopment 
              ? "This form only works on tharujaye.com. Please test on production or contact the API admin to whitelist localhost."
              : "Unable to send message. Please contact the administrator.",
            variant: "destructive",
          });
          return;
        }
        
        throw new Error(`Form submission failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'tharushajayawardane05@gmail.com',
      link: 'mailto:tharushajayawardane05@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+94769496380',
      link: 'tel:+94769496380',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Ambalangoda, Sri Lanka',
      link: 'https://maps.app.goo.gl/xqSaUyFRhGFmJMx17',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my contact information.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {isSuccess ? (
                <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg text-center">
                  <div className="mb-4">
                    <svg
                      className="mx-auto h-12 w-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >

                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-background text-foreground placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                            className="bg-background text-foreground placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What’s this about?"
                            {...field}
                            className="bg-background text-foreground placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            {...field}
                            className="bg-background text-foreground placeholder:text-muted-foreground"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="flex gap-2 items-center"
                    disabled={isLoading}
                  >
                    <Send size={16} />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-in-left">
            <div className="h-full flex flex-col">
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{item.title}</h4>
                        <a 
                          href={item.link}
                          target={item.title === 'Office' ? '_blank' : undefined}
                          rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-xl shadow-sm flex-grow">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media to stay updated with my latest projects, articles, and design insights.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://behance.net/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Behance</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16.5 6.75h-9v10.5h9a5.25 5.25 0 1 0 0-10.5Z"></path>
                      <path d="M3.75 6.75H9"></path>
                      <path d="M3.75 12h6"></path>
                      <path d="M14.25 15.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://dribbble.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
