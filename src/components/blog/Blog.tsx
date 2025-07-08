import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../shared/AnimatedSection';
import { CalendarDays, Clock, MoveRight, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const featuredPost: BlogPost = {
    id: 1,
    title: 'LifeTrack: The Health App That Puts Humans Before Data',
    excerpt: 'In a world where data is abundant, LifeTrack stands out by prioritizing user experience and emotional well-being. This article delves into the design philosophy behind LifeTrack, a health app that truly understands its users.',
    date: 'Jul 08, 2025',
    readTime: '4 min read',
    category: 'UI/UX Design, App Design',
    image: '/blogs/LifeTrack_dp.jpg',
    slug: 'https://medium.com/design-bootcamp/lifetrack-the-health-app-that-puts-humans-before-data-2e048800997f',  
    featured: true,
  };

  const blogPosts: BlogPost[] = [
    {
      id: 2,
      title: 'Designing the Future of Home Energy Monitoring: The Energex UX/UI Journey',
      excerpt: 'In a world where energy efficiency is paramount, designing an intuitive home energy monitoring system is crucial. This article explores the UX/UI design process behind Energex, a cutting-edge home energy monitoring app.',
      date: 'Jul 08, 2025',
      readTime: '4 min read',
      category: 'UI/UX Design, App Design',
      image: '/blogs/Energex_dp.jpg',
      slug: 'https://tharujaye.medium.com/designing-the-future-of-home-energy-monitoring-the-energex-ui-ux-journey-94c9fa3b7657',
    },  
    {
      id: 3,
      title: 'Typography Best Practices for Web Design: The Silent Workhorse of UX',
      excerpt: 'Typography is the silent workhorse of web design. It guides your eyes, sets the tone, builds trust, and most importantly it gets read. And if you’re a designer, ignoring typography is like building a Ferrari and forgetting the engine.',
      date: 'Apr 16, 2025',
      readTime: '3 min read',
      category: 'UI/UX Design, Typography',
      image: '/blogs/typography_dp.jpg',
      slug: 'https://medium.com/@tharujaye/typography-best-practices-for-web-design-the-silent-workhorse-of-ux-4fe1f9275507',
    },
    {
      id: 4,
      title: 'Lofi Music for productivity',
      excerpt: 'Lofi music has a magical way of wrapping around your thoughts, creating a cocoon of focus where creativity flows effortlessly. But what is it about these laid-back beats that make them such a powerful productivity tool?',
      date: 'Mar 15, 2025',
      readTime: '3 min read',
      category: 'Productivity, Music',
      image: '/blogs/lofi_music_dp.jpg',
      slug: 'https://medium.com/@tharujaye/lofi-music-for-productivity-c068b1d51533',
    },
 
  ];

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design, development, and creative technology.
          </p>
        </AnimatedSection>

        {/* Featured Post */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video overflow-hidden rounded-xl">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-sm px-3 py-1 bg-secondary rounded-full">{featuredPost.category}</span>
              <h3 className="text-2xl lg:text-3xl font-bold mt-4 mb-3">
                <a
                  href={featuredPost.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {featuredPost.title}
                </a>
              </h3>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <Button asChild>
                <a
                  href={featuredPost.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection 
              key={post.id}
              animation="fade-in"
              delay={200 + index * 100}  
            >
              <article className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden rounded-xl mb-4">
                  <a
                    href={post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </a>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 bg-secondary rounded-full flex items-center gap-1">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <CalendarDays size={12} />
                    {post.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  <a
                    href={post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>

                <a
                  href={post.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 mt-auto"
                >
                  Read More <MoveRight size={16} />
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
