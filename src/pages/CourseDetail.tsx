import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, CheckCircle, FileText } from 'lucide-react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TransitionWrapper from '@/components/TransitionWrapper';
import { getCourseById, courseDetails } from '@/data/courses';
import { cn } from '@/lib/utils';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  
  const course = id ? getCourseById(id) : undefined;
  const details = id ? courseDetails[id] : undefined;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="space-y-3 text-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="text-sm text-muted-foreground">Loading course details...</p>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h2 className="text-2xl font-display font-bold mb-4">Course Not Found</h2>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const getResourceUrl = (courseId: string) => {
    const resourceMap: Record<string, string> = {
      "he-4": "/course-materials/he-4-syllabus.pdf",
      "he-5": "/course-materials/he-5-syllabus.pdf",
      "he-6": "/course-materials/he-6-syllabus.pdf",
      "np-1": "/course-materials/np-1-syllabus.pdf",
      "np-2": "/course-materials/np-2-syllabus.pdf",
      "np-3": "/course-materials/np-3-syllabus.pdf"
    };
    
    return resourceMap[courseId] || "#";
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
          
          <TransitionWrapper animation="fade-in">
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-12">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white rounded-full text-primary mb-4">
                  {course.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  {course.title}
                </h1>
                
                <div className="flex flex-wrap gap-2">
                  {course.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <TransitionWrapper 
              animation="slide-in" 
              className="lg:col-span-2"
            >
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">
                  Course Overview
                </h2>
                <p className="text-muted-foreground mb-8">
                  {course.description}
                </p>
                
                {details && (
                  <>
                    <h3 className="text-xl font-semibold mb-3">Learning Objectives</h3>
                    <ul className="space-y-2 mb-8">
                      {details.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Methodology</h3>
                    <p className="text-muted-foreground mb-8">
                      {details.methodology}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Learning Outcomes</h3>
                    <ul className="space-y-2 mb-8">
                      {details.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {details.testimonial && (
                      <div className="bg-secondary/50 rounded-xl p-6 mb-8 relative">
                        <div className="text-5xl text-primary/20 absolute top-3 left-4">"</div>
                        <blockquote className="relative z-10">
                          <p className="italic text-lg mb-4">
                            {details.testimonial.quote}
                          </p>
                          <footer>
                            <p className="font-semibold">{details.testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {details.testimonial.title}
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                    )}
                  </>
                )}
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-in" delay={100}>
              <div className="bg-secondary/30 rounded-xl p-6 h-fit sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Course Details</h3>
                
                {details && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Target Audience</p>
                        <p className="text-sm text-muted-foreground">{details.audience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Category</p>
                        <p className="text-sm text-muted-foreground">{course.category}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={getResourceUrl(course.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full py-3 px-4 text-center bg-primary text-primary-foreground rounded-md font-medium",
                      "transition-all hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98]",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                      "inline-flex items-center justify-center gap-2"
                    )}
                  >
                    <FileText size={16} />
                    Learn More Details
                  </a>
                </div>
              </div>
            </TransitionWrapper>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
