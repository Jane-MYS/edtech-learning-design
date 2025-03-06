
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { higherEdCourses, eslCourses, nonProfitCourses, categories } from '@/data/courses';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="space-y-3 text-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="text-sm text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      
      <div id="portfolio">
        {categories.map((category, index) => {
          let coursesData;
          switch (category.id) {
            case 'higher-ed':
              coursesData = higherEdCourses;
              break;
            case 'esl-writing':
              coursesData = eslCourses;
              break;
            case 'non-profit':
              coursesData = nonProfitCourses;
              break;
            default:
              coursesData = [];
          }

          return (
            <CategorySection
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              courses={coursesData}
              index={index}
            />
          );
        })}
      </div>
      
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
