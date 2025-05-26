
import { Github, ExternalLink, Shield, Bug, Monitor, Eye, Code, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Advanced Network Scanner',
      description: 'Comprehensive Python-based network vulnerability scanner with automated reporting, custom payload generation, and real-time threat assessment capabilities.',
      tech: ['Python', 'Nmap', 'SQLite', 'Flask', 'Docker'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Bug,
      status: 'Production',
      github: '#',
      live: '#',
      features: ['Automated Scanning', 'Custom Payloads', 'Report Generation']
    },
    {
      id: 2,
      title: 'SOC Dashboard Pro',
      description: 'Real-time security operations center dashboard with advanced threat visualization, incident management, and automated response workflows.',
      tech: ['React', 'Node.js', 'ELK Stack', 'WebSocket', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      status: 'Active',
      github: '#',
      live: '#',
      features: ['Real-time Monitoring', 'Threat Visualization', 'Incident Response']
    },
    {
      id: 3,
      title: 'Digital Forensics Suite',
      description: 'Comprehensive toolkit for digital evidence collection, analysis, and preservation with automated timeline reconstruction and reporting.',
      tech: ['Python', 'Volatility', 'Autopsy', 'PostgreSQL', 'React'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Shield,
      status: 'Beta',
      github: '#',
      live: '#',
      features: ['Evidence Analysis', 'Timeline Reconstruction', 'Chain of Custody']
    },
    {
      id: 4,
      title: 'Threat Intelligence Platform',
      description: 'AI-powered threat intelligence aggregation platform with machine learning-based threat classification and predictive analysis.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'Vue.js'],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Eye,
      status: 'Development',
      github: '#',
      live: '#',
      features: ['AI Classification', 'Predictive Analysis', 'Threat Feeds']
    },
    {
      id: 5,
      title: 'Secure Code Analyzer',
      description: 'Static application security testing tool with vulnerability detection, code quality assessment, and remediation suggestions.',
      tech: ['Python', 'AST', 'RegEx', 'Django', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Code,
      status: 'Production',
      github: '#',
      live: '#',
      features: ['Vulnerability Detection', 'Code Quality', 'Remediation Tips']
    },
    {
      id: 6,
      title: 'Incident Response Automation',
      description: 'Automated incident response orchestration platform with playbook execution, evidence collection, and stakeholder communication.',
      tech: ['Python', 'Ansible', 'Docker', 'Kafka', 'React'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      status: 'Active',
      github: '#',
      live: '#',
      features: ['Playbook Automation', 'Evidence Collection', 'Communication Hub']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'text-tech-emerald bg-tech-emerald/10 border-tech-emerald/30';
      case 'Active': return 'text-tech-blue bg-tech-blue/10 border-tech-blue/30';
      case 'Beta': return 'text-tech-amber bg-tech-amber/10 border-tech-amber/30';
      case 'Development': return 'text-tech-indigo bg-tech-indigo/10 border-tech-indigo/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-indigo mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Real-world applications demonstrating cybersecurity expertise and innovative problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group professional-border overflow-hidden card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-tech-blue/30">
                    <project.icon className="w-6 h-6 text-tech-blue" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-tech-blue/10 backdrop-blur-sm transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-tech-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-800/50 border border-slate-700 text-slate-300 rounded hover:border-tech-blue/50 hover:text-tech-blue transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-tech-blue/50 transition-all duration-300 text-sm rounded group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 border border-tech-blue/30 text-tech-blue hover:bg-tech-blue/20 transition-all duration-300 text-sm rounded group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.2s' }}>
          <button className="professional-border px-8 py-4 text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-all duration-300 font-medium hover-lift group">
            <span className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
