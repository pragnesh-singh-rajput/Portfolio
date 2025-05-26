
import { useState, useEffect } from 'react';
import { Shield, Zap, Cpu } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEMS...');
  
  const loadingSteps = [
    'INITIALIZING SYSTEMS...',
    'ESTABLISHING SECURE CONNECTION...',
    'LOADING CYBER DEFENSE PROTOCOLS...',
    'ACTIVATING NEURAL NETWORKS...',
    'PREPARING PORTFOLIO INTERFACE...',
    'READY FOR DEPLOYMENT'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="tech-grid h-full w-full"></div>
      </div>
      
      {/* Fixed animated scanning lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" 
             style={{
               top: '20%',
               animation: 'scan-line-move 3s ease-in-out infinite'
             }}></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" 
             style={{
               top: '60%',
               animation: 'scan-line-move 3s ease-in-out infinite',
               animationDelay: '1.5s'
             }}></div>
      </div>

      {/* Central loading interface */}
      <div className="relative z-10 text-center">
        {/* Main icon with enhanced animations */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '4s' }}>
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -top-1.5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-blue-400/50"></div>
            </div>
            <div className="absolute inset-2 rounded-full border border-indigo-400/40 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
              <div className="absolute w-2 h-2 bg-indigo-400 rounded-full -top-1 -right-1 shadow-lg shadow-indigo-400/50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-12 h-12 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced progress bar */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden professional-border">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-blue-400 text-sm mt-3 font-mono tracking-wider">
            {progress}% COMPLETE
          </div>
        </div>

        {/* Enhanced loading text */}
        <div className="text-slate-300 font-mono text-lg mb-6 h-6 cyber-text">
          {loadingText}
        </div>

        {/* Enhanced status indicators */}
        <div className="flex justify-center space-x-8 text-xs">
          <div className="flex items-center space-x-2 group">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="text-slate-400 font-mono group-hover:text-emerald-400 transition-colors">SECURE</span>
          </div>
          <div className="flex items-center space-x-2 group">
            <Cpu className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '2s' }} />
            <span className="text-slate-400 font-mono group-hover:text-blue-400 transition-colors">PROCESSING</span>
          </div>
          <div className="flex items-center space-x-2 group">
            <Zap className="w-4 h-4 text-indigo-400 animate-bounce" />
            <span className="text-slate-400 font-mono group-hover:text-indigo-400 transition-colors">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
