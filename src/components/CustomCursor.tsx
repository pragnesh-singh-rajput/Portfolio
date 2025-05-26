
import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor tracking
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-6 h-6 border-2 border-tech-blue rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          borderColor: isHovering ? '#10b981' : '#3b82f6',
          boxShadow: isHovering 
            ? '0 0 20px rgba(16, 185, 129, 0.5)' 
            : '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed w-2 h-2 bg-tech-blue rounded-full pointer-events-none z-[9998] transition-all duration-500 ease-out opacity-60"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
          backgroundColor: isHovering ? '#10b981' : '#3b82f6'
        }}
      />
    </>
  );
};
