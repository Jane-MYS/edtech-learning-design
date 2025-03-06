
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TransitionWrapper from '@/components/TransitionWrapper';
import { Check } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const experiences = [
    {
      title: "Learning Experience Designer",
      company: "Digital Education Innovation Lab",
      period: "2020 - Present",
      description: "Lead the design of digital learning experiences for graduate programs in education and media studies. Collaborate with faculty to create interactive courses that integrate design thinking, game-based learning, and digital storytelling."
    },
    {
      title: "Educational Technology Specialist",
      company: "Center for Digital Equity",
      period: "2017 - 2020",
      description: "Developed training programs for educators on implementing culturally responsive digital pedagogies. Created resources supporting multilingual learners in technology-enhanced learning environments."
    },
    {
      title: "ESL Instructor & Curriculum Developer",
      company: "International Education Institute",
      period: "2014 - 2017",
      description: "Designed and taught academic writing courses for international students. Created digital resources for language acquisition with a focus on academic and professional contexts."
    }
  ];
  
  const education = [
    {
      degree: "Ph.D. in Learning Design & Technology",
      institution: "University of California, Berkeley",
      year: "2019"
    },
    {
      degree: "M.A. in TESOL & Digital Media",
      institution: "New York University",
      year: "2014"
    },
    {
      degree: "B.A. in Comparative Literature",
      institution: "Brown University",
      year: "2012"
    }
  ];
  
  const philosophy = [
    "Digital equity as a foundation for educational design",
    "Culturally responsive approaches to learning technology",
    "Community-based participatory design practices",
    "Critical digital pedagogy that questions technology's role",
    "Multimodal learning that embraces diverse ways of knowing"
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
                Learning designer with a passion for creating equitable digital experiences that engage, inspire, and transform.
              </p>
            </div>
          </TransitionWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <TransitionWrapper animation="slide-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">My Approach</h2>
                <p className="text-muted-foreground mb-6">
                  My work lives at the intersection of learning design, digital media, and cultural equity. With experience spanning higher education, language learning, and community-based organizations, I bring a multidisciplinary perspective to educational design challenges.
                </p>
                <p className="text-muted-foreground mb-6">
                  I believe that effective digital learning must be grounded in principles of inclusion and accessibility. My designs prioritize learner agency, cultural responsiveness, and meaningful technology integration that serves pedagogical goals rather than technological novelty.
                </p>
                <p className="text-muted-foreground">
                  As an Asian American woman working in educational technology, I'm particularly committed to creating learning experiences that challenge stereotypes, amplify diverse voices, and create pathways to leadership for underrepresented groups in digital spaces.
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
                      "Digital Media Production", 
                      "Multilingual Education", 
                      "Game-Based Learning", 
                      "Design Thinking",
                      "Inclusive Design",
                      "Interactive Storytelling",
                      "Educational Technology",
                      "Community-Based Research"
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
