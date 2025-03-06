
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  tags?: string[];
}

const CourseCard = ({
  id,
  title,
  description,
  category,
  imageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  tags = []
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/course/${id}`}
      className="course-card block rounded-xl overflow-hidden bg-white border border-border shadow-sm h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 rounded-full text-primary backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-end mt-2">
          <span className={cn(
            "inline-flex items-center text-sm font-medium text-primary transition-all",
            isHovered ? "gap-2" : "gap-1"
          )}>
            View details <ArrowRight size={16} className={cn(
              "transition-transform",
              isHovered ? "translate-x-1" : ""
            )} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
