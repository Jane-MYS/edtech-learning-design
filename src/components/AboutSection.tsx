
import { Check } from 'lucide-react';
import TransitionWrapper from './TransitionWrapper';

const AboutSection = () => {
  const skills = [
    "Learning Experience Design",
    "Digital Media Production",
    "Inclusive Pedagogy",
    "Multilingual Education",
    "Game-Based Learning",
    "Educational Technology",
    "Design Thinking",
    "Community-Based Learning",
    "Multicultural Education"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <TransitionWrapper animation="slide-in">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
                About My Approach
              </h2>
              
              <p className="text-muted-foreground mb-6">
                I create learning experiences at the intersection of technology, culture, and education. With expertise in digital media production and instructional design, I develop innovative courses that engage diverse learners across higher education, corporate, and community settings.
              </p>
              
              <p className="text-muted-foreground mb-8">
                My work is guided by principles of digital equity and inclusive design. As an educator with experience supporting multilingual learners and developing community-based programs, I'm passionate about creating learning environments that celebrate diverse perspectives and provide meaningful opportunities for growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2"
                  >
                    <Check size={16} className="text-primary min-w-[16px]" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </TransitionWrapper>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <TransitionWrapper animation="fade-in-delayed">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=90"
                  alt="Person holding a glowing lightbulb against dark background" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/40 blur-xl"></div>
            </TransitionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
