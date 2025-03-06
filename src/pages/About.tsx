
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TransitionWrapper from '@/components/TransitionWrapper';
import AboutSection from '@/components/AboutSection';
import { Check } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const experiences = [
    {
      title: "Senior Learning Designer",
      company: "University Innovation Lab",
      period: "2019 - Present",
      description: "Lead design of innovative digital learning experiences for undergraduate and graduate programs. Collaborated with faculty to develop interactive courses that increase student engagement and learning outcomes."
    },
    {
      title: "Instructional Designer",
      company: "Corporate Learning Solutions",
      period: "2016 - 2019",
      description: "Designed and developed training programs for corporate clients across various industries. Specialized in leadership development and digital transformation training initiatives."
    },
    {
      title: "ESL Curriculum Developer",
      company: "Global Language Institute",
      period: "2013 - 2016",
      description: "Created comprehensive ESL curriculum for adult learners with a focus on academic and professional contexts. Developed innovative teaching materials and assessment strategies."
    }
  ];
  
  const education = [
    {
      degree: "M.Ed. in Learning Design and Technology",
      institution: "Stanford University",
      year: "2013"
    },
    {
      degree: "B.A. in English and Education",
      institution: "University of California, Berkeley",
      year: "2011"
    },
    {
      degree: "Certificate in TESOL",
      institution: "Cambridge University",
      year: "2012"
    }
  ];
  
  const philosophy = [
    "Learner-centered design that puts user needs at the forefront",
    "Evidence-based approaches grounded in learning science",
    "Inclusive design principles that address diverse learning needs",
    "Technology integration that enhances rather than complicates learning",
    "Continuous improvement through meaningful assessment and iteration"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <TransitionWrapper animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground">
                Learning designer with a passion for creating educational experiences that engage, inspire, and transform.
              </p>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <TransitionWrapper animation="slide-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">My Approach</h2>
                <p className="text-muted-foreground mb-6">
                  With over a decade of experience in learning design, I've developed a deep understanding of how to create educational experiences that truly resonate with learners. My work spans higher education, corporate training, language acquisition, and non-profit initiatives.
                </p>
                <p className="text-muted-foreground mb-6">
                  I believe that effective learning experiences should be both engaging and transformative. By combining sound pedagogical principles with innovative design approaches, I create courses that not only deliver content but inspire genuine curiosity and foster meaningful growth.
                </p>
                <p className="text-muted-foreground">
                  My specialty lies in designing for diverse audiences and contexts, ensuring that learning is accessible, inclusive, and relevant to all participants regardless of their background or prior knowledge.
                </p>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-in" delay={100}>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Learning Designer at work" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>
            </TransitionWrapper>
          </div>
          
          <TransitionWrapper animation="fade-in">
            <div className="mb-16">
              <h2 className="text-2xl font-display font-semibold mb-6 text-center">Design Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {philosophy.map((principle, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/30 rounded-xl p-6 flex items-start gap-3"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p>{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <TransitionWrapper animation="slide-up">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Professional Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-border">
                      <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-up" delay={100}>
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Education & Credentials</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-secondary/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-display font-semibold mb-6">Specialized Skills</h2>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Learning Experience Design", 
                      "Curriculum Development", 
                      "ESL Instruction", 
                      "Educational Technology", 
                      "Assessment Design",
                      "Inclusive Learning",
                      "Multimedia Production",
                      "Instructional Design",
                      "Workshop Facilitation"
                    ].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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

export default About;
