
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

export const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Advanced Malware Analysis Techniques',
      excerpt: 'Deep dive into modern malware analysis methodologies, including static and dynamic analysis approaches for identifying sophisticated threats.',
      category: 'Digital Forensics',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Malware', 'DFIR', 'Analysis']
    },
    {
      id: 2,
      title: 'Building an Effective SOC Monitoring Strategy',
      excerpt: 'Learn how to design and implement a comprehensive security operations center monitoring strategy that scales with your organization.',
      category: 'SOC Operations',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['SOC', 'Monitoring', 'Strategy']
    },
    {
      id: 3,
      title: 'Web Application Penetration Testing Checklist',
      excerpt: 'A comprehensive checklist for conducting thorough web application penetration tests, covering OWASP Top 10 and beyond.',
      category: 'Penetration Testing',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['VAPT', 'Web Security', 'OWASP']
    },
    {
      id: 4,
      title: 'Python Automation for Cybersecurity',
      excerpt: 'Explore practical Python scripts and tools that can automate common cybersecurity tasks and enhance your workflow efficiency.',
      category: 'Technical',
      readTime: '10 min read',
      publishDate: '2023-12-28',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Automation', 'Scripting']
    },
    {
      id: 5,
      title: 'Incident Response Best Practices',
      excerpt: 'Essential guidelines and frameworks for effective incident response, from initial detection to post-incident analysis.',
      category: 'Incident Response',
      readTime: '14 min read',
      publishDate: '2023-12-20',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['IR', 'Best Practices', 'Framework']
    },
    {
      id: 6,
      title: 'Network Forensics Fundamentals',
      excerpt: 'Understanding the basics of network forensics, including packet analysis, traffic monitoring, and evidence preservation techniques.',
      category: 'Digital Forensics',
      readTime: '11 min read',
      publishDate: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Network', 'Forensics', 'Analysis']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Digital Forensics': return 'text-tech-blue bg-tech-blue/10 border-tech-blue/30';
      case 'SOC Operations': return 'text-tech-indigo bg-tech-indigo/10 border-tech-indigo/30';
      case 'Penetration Testing': return 'text-tech-emerald bg-tech-emerald/10 border-tech-emerald/30';
      case 'Technical': return 'text-tech-amber bg-tech-amber/10 border-tech-amber/30';
      case 'Incident Response': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  return (
    <section ref={sectionRef} id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-indigo mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Sharing knowledge and insights from the frontlines of cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group professional-border overflow-hidden card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Post Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Blog Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-tech-blue/30">
                    <BookOpen className="w-6 h-6 text-tech-blue" />
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-tech-blue transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-800/50 border border-slate-700 text-slate-300 rounded hover:border-tech-blue/50 hover:text-tech-blue transition-colors"
                    >
                      <Tag className="w-2 h-2" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-tech-blue hover:text-white transition-colors duration-300 text-sm font-medium group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.2s' }}>
          <button className="professional-border px-8 py-4 text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-all duration-300 font-medium hover-lift group">
            <span className="flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
