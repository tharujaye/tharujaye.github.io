import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, MoveRight, Search, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'LifeTrack: The Health App That Puts Humans Before Data',
      excerpt: 'In a world where data is abundant, LifeTrack stands out by prioritizing user experience and emotional well-being. This article delves into the design philosophy behind LifeTrack, a health app that truly understands its users.',
      date: 'Jul 08, 2025',
      readTime: '4 min read',
      category: 'UI/UX Design, App Design',
      image: '/blogs/LifeTrack_dp.jpg',
      slug: 'https://medium.com/design-bootcamp/lifetrack-the-health-app-that-puts-humans-before-data-2e048800997f',  
    },
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
      excerpt: "Typography is the silent workhorse of web design. It guides your eyes, sets the tone, builds trust, and most importantly it gets read. And if you're a designer, ignoring typography is like building a Ferrari and forgetting the engine.",
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
  const categories = ['all', 'UI/UX Design', 'Development', 'Design Systems', 'Animation', 'Workflow'];
  
  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) && 
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">Blog</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Articles &amp; <span className="highlight-gradient">Insights</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                Thoughts, tutorials, and insights on design, development, and the creative industry.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24">
          <div className="container">
            {/* Search and filter */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection animation="fade-in" delay={200} className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Search articles..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <div className="flex gap-2 overflow-x-auto pb-2 md:justify-end">
                    {categories.slice(0, 4).map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                        className="whitespace-nowrap"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <AnimatedSection 
                    key={post.id}
                    animation="fade-in"
                    delay={200 + (index % 3) * 100}  
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

                      <div className="flex items-center gap-2 mb-3 flex-wrap">
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
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

            {/* Newsletter Section */}
            <AnimatedSection className="text-center mt-20">
              <div className="bg-card border border-border p-12 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Stay updated with the latest articles, tutorials, and insights on design and development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="sm:flex-1" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
