
import { useRef, useEffect, useState } from 'react';
import CourseCard, { CourseCardProps } from './CourseCard';
import TransitionWrapper from './TransitionWrapper';
import { cn } from '@/lib/utils';

interface CategorySectionProps {
  title: string;
  description: string;
  courses: CourseCardProps[];
  id: string;
  index: number;
}

const CategorySection = ({ 
  title, 
  description, 
  courses, 
  id,
  index
}: CategorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        "py-20 overflow-hidden category-section",
        index % 2 === 0 ? "bg-white" : "bg-gray-50/80"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <TransitionWrapper animation="slide-up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </TransitionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <TransitionWrapper 
              key={course.id} 
              delay={100 * index} 
              animation="scale-in"
            >
              <CourseCard {...course} />
            </TransitionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
