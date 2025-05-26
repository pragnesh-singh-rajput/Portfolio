import { useState, useEffect, useRef } from 'react';
import { Shield, User, Target, Award, Code, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollAnimation<HTMLDivElement>();
  const { isVisible: statsVisible, elementRef: statsRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { isVisible: cardsVisible, elementRef: cardsRef } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const stats = [
    { icon: Code, value: '15+', label: 'Projects Completed' },
    { icon: Shield, value: '3+', label: 'Certifications' },
    { icon: Globe, value: '2+', label: 'Years Learning' },
    { icon: Award, value: '5+', label: 'Skills Mastered' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-indigo mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about protecting digital infrastructure and staying ahead of emerging cyber threats
          </p>
        </div>

        {/* Stats Section with staggered animations */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`professional-border p-6 text-center hover-lift scroll-scale-in ${statsVisible ? 'animate' : ''}`}
              style={{ 
                transitionDelay: statsVisible ? `${index * 0.1}s` : '0s'
              }}
            >
              <stat.icon className="w-8 h-8 text-tech-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={cardsRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <div className={`professional-border p-8 subtle-glow card-hover scroll-slide-left ${cardsVisible ? 'animate' : ''}`}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-tech-blue" />
                  <h3 className="text-2xl text-white font-semibold">Professional Background</h3>
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Dedicated cybersecurity professional with a strong foundation in digital forensics 
                    and ethical hacking. Currently serving as a Digital Forensics Intern, where I'm 
                    actively expanding my expertise in threat detection and incident response.
                  </p>
                  <p>
                    My specialization encompasses vulnerability assessment, penetration testing, 
                    and security operations center (SOC) activities. I'm committed to safeguarding 
                    digital infrastructure against sophisticated cyber threats.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-lg text-tech-blue font-medium mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['DFIR', 'VAPT', 'SOC Operations', 'Python', 'Linux/Kali', 'Network Security'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs bg-tech-blue/10 border border-tech-blue/30 text-tech-blue rounded-full hover:bg-tech-blue/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Goals Card */}
            <div className={`professional-border p-8 subtle-glow card-hover scroll-slide-right ${cardsVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-tech-indigo" />
                  <h3 className="text-2xl text-white font-semibold">Professional Objectives</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { text: 'Master advanced penetration testing methodologies', color: 'tech-blue' },
                    { text: 'Develop expertise in malware analysis and reverse engineering', color: 'tech-indigo' },
                    { text: 'Contribute to open-source cybersecurity tools', color: 'tech-emerald' },
                    { text: 'Build robust defense systems for enterprise environments', color: 'tech-amber' }
                  ].map((goal, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <div className="bg-gradient-to-r from-tech-blue/5 to-tech-indigo/5 border border-tech-blue/20 rounded-lg p-4">
                  <p className="text-tech-blue text-sm text-center font-medium">
                    🎯 Mission: Protecting tomorrow's digital landscape today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
