
import { useState, useEffect } from 'react';
import { Shield, Download, Mail, Zap, Cpu } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = 'Defending Tomorrow\'s Digital Frontier';
  
  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden neural-network">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              width: `${4 + (i % 3)}px`,
              height: `${4 + (i % 3)}px`,
              background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#6366f1' : '#10b981',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.5}s`,
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#6366f1' : '#10b981'}`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 border border-tech-blue rotate-45 animate-spin" 
             style={{ top: '20%', right: '20%', animationDuration: '20s' }}></div>
        <div className="absolute w-24 h-24 border border-tech-indigo rotate-12 animate-spin" 
             style={{ bottom: '30%', left: '15%', animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`mb-12 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-64 h-64 mx-auto mb-8 relative float-animation">
            {/* Main central core */}
            <div className="w-full h-full rounded-full border-2 border-tech-blue/40 bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center professional-border pulse-glow hologram-effect">
              <Shield className="w-28 h-28 text-tech-blue cyber-text" />
            </div>
            
            {/* Multiple orbiting rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-blue/20 to-transparent animate-pulse"></div>
            
            {/* Outer ring with particles */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
              <div className="absolute w-4 h-4 bg-tech-blue/80 rounded-full -top-2 left-1/2 transform -translate-x-1/2 shadow-lg shadow-tech-blue/50"></div>
              <div className="absolute w-3 h-3 bg-tech-emerald/60 rounded-full top-1/4 -right-2 transform translate-x-1/2 shadow-lg shadow-tech-emerald/50"></div>
            </div>
            
            {/* Middle ring */}
            <div className="absolute inset-4 animate-spin border border-tech-indigo/30 rounded-full" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
              <div className="absolute w-2 h-2 bg-tech-indigo/70 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
              <Zap className="absolute w-4 h-4 text-tech-indigo/60 bottom-0 right-0 transform translate-x-1 translate-y-1" />
            </div>
            
            {/* Inner ring */}
            <div className="absolute inset-8 animate-spin border-dotted border border-tech-emerald/40 rounded-full" style={{ animationDuration: '12s' }}>
              <Cpu className="absolute w-3 h-3 text-tech-emerald/70 top-0 right-0 transform translate-x-1 -translate-y-1" />
            </div>
          </div>
        </div>
        
        <div className="stagger-animation" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-white tracking-wider relative">
            <span className="gradient-text cyber-text">PK. SINGH</span>
            <div className="absolute inset-0 gradient-text opacity-30 blur-sm">PK. SINGH</div>
          </h1>
        </div>
        
        <div className="h-20 mb-8 stagger-animation" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-4xl text-tech-blue font-medium tracking-wide cyber-text">
            {text}
            <span className="animate-pulse text-tech-emerald">|</span>
          </h2>
        </div>
        
        <div className="space-y-6 text-lg text-slate-300 max-w-4xl mx-auto mb-12 stagger-animation" style={{ animationDelay: '0.9s' }}>
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <div className="professional-border px-6 py-3 hover-lift card-hover">
              <span className="text-tech-blue text-xl">🛡️</span> Cyber Security Enthusiast
            </div>
            <div className="professional-border px-6 py-3 hover-lift card-hover">
              <span className="text-tech-indigo text-xl">🔍</span> Digital Forensics Intern
            </div>
            <div className="professional-border px-6 py-3 hover-lift card-hover">
              <span className="text-tech-emerald text-xl">⚡</span> Ethical Hacker-in-Training
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center stagger-animation" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={scrollToAbout}
            className="professional-border px-10 py-4 text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-all duration-500 font-semibold hover-lift group card-hover relative overflow-hidden"
          >
            <span className="flex items-center gap-3 relative z-10">
              <Shield className="w-5 h-5" />
              Explore Portfolio
            </span>
          </button>
          
          <div className="flex gap-4">
            <button className="professional-border p-4 text-slate-400 hover:text-tech-blue transition-all duration-500 hover-lift card-hover group">
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button className="professional-border p-4 text-slate-400 hover:text-tech-emerald transition-all duration-500 hover-lift card-hover group">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
