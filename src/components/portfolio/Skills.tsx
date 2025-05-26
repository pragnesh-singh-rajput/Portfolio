
import { Code, Shield, Search, Database, Network, Bug, Brain, Lock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Record<string, boolean>>({});
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

  const skillCategories = [
    {
      title: 'Security Operations',
      icon: Shield,
      color: 'tech-blue',
      skills: [
        { name: 'SOC Operations', level: 85 },
        { name: 'Incident Response', level: 78 },
        { name: 'Threat Detection', level: 82 },
        { name: 'Security Monitoring', level: 80 }
      ]
    },
    {
      title: 'Digital Forensics',
      icon: Search,
      color: 'tech-indigo',
      skills: [
        { name: 'DFIR', level: 76 },
        { name: 'Malware Analysis', level: 70 },
        { name: 'Evidence Recovery', level: 74 },
        { name: 'Memory Forensics', level: 68 }
      ]
    },
    {
      title: 'Penetration Testing',
      icon: Bug,
      color: 'tech-emerald',
      skills: [
        { name: 'VAPT', level: 72 },
        { name: 'Web Security', level: 80 },
        { name: 'Network Pentesting', level: 75 },
        { name: 'Mobile Security', level: 65 }
      ]
    },
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'tech-amber',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Linux/Kali', level: 88 },
        { name: 'Network Security', level: 80 },
        { name: 'Scripting', level: 75 }
      ]
    }
  ];

  const handleSkillHover = (categoryIndex: number, skillIndex: number) => {
    const key = `${categoryIndex}-${skillIndex}`;
    setAnimatedBars(prev => ({ ...prev, [key]: true }));
  };

  const getProgressBarGradient = (color: string) => {
    switch (color) {
      case 'tech-blue':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'tech-indigo':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600';
      case 'tech-emerald':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'tech-amber':
        return 'bg-gradient-to-r from-amber-500 to-amber-600';
      default:
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'tech-blue':
        return 'text-blue-500';
      case 'tech-indigo':
        return 'text-indigo-500';
      case 'tech-emerald':
        return 'text-emerald-500';
      case 'tech-amber':
        return 'text-amber-500';
      default:
        return 'text-blue-500';
    }
  };

  const getPercentageColor = (color: string) => {
    switch (color) {
      case 'tech-blue':
        return 'text-blue-400';
      case 'tech-indigo':
        return 'text-indigo-400';
      case 'tech-emerald':
        return 'text-emerald-400';
      case 'tech-amber':
        return 'text-amber-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-indigo mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Comprehensive skill set spanning multiple domains of cybersecurity, from threat detection to digital forensics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`professional-border p-6 subtle-glow card-hover group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-8 h-8 ${getIconColor(category.color)}`} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-tech-blue transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${categoryIndex}-${skillIndex}`;
                  const isAnimated = animatedBars[key];
                  
                  return (
                    <div 
                      key={skill.name} 
                      className="space-y-2"
                      onMouseEnter={() => handleSkillHover(categoryIndex, skillIndex)}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className={`${getPercentageColor(category.color)} font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full ${getProgressBarGradient(category.color)} transition-all duration-1000 ease-out ${isAnimated ? 'animate-pulse' : ''}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Additional <span className="gradient-text">Competencies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Network, name: 'Network Analysis', level: 'Advanced' },
              { icon: Database, name: 'Database Security', level: 'Intermediate' },
              { icon: Brain, name: 'Threat Intelligence', level: 'Advanced' },
              { icon: Lock, name: 'Cryptography', level: 'Intermediate' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`professional-border p-4 text-center hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <skill.icon className="w-8 h-8 text-tech-blue mx-auto mb-2" />
                <div className="text-sm font-medium text-white mb-1">{skill.name}</div>
                <div className="text-xs text-slate-400">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1s' }}>
          <div className="professional-border p-6 inline-block pulse-glow">
            <p className="text-tech-blue font-medium">
              ⚡ Continuously evolving • Industry certified • Hands-on experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
