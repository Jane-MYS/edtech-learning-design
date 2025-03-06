
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in' | 'slide-up' | 'scale-in' | 'fade-in-delayed';
}

const TransitionWrapper = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in'
}: TransitionWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={{ 
        willChange: 'opacity, transform',
        animationFillMode: 'forwards',
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
