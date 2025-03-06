
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TransitionWrapper from '@/components/TransitionWrapper';
import { 
  Check, 
  Code, 
  Monitor, 
  Database, 
  Wrench, 
  Server, 
  Webcam, 
  Lightbulb, 
  Brain, 
  Book, 
  GraduationCap, 
  Layers,
  Globe,
  Users,
  Hand,
  Search,
  SplitSquareVertical,
  Compass
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const philosophy = [
    {
      title: "Digital Equity",
      description: "Prioritizing accessibility and inclusion as a foundation for educational design",
      icon: <Globe size={24} className="text-emerald-500" />
    },
    {
      title: "Cultural Responsiveness",
      description: "Creating learning technology that honors diverse cultural perspectives and knowledge systems",
      icon: <Users size={24} className="text-indigo-500" />
    },
    {
      title: "Community Participation",
      description: "Engaging communities in co-designing educational experiences that meet their needs",
      icon: <Hand size={24} className="text-amber-500" />
    },
    {
      title: "Critical Pedagogy",
      description: "Questioning technology's role and challenging power dynamics in digital learning spaces",
      icon: <Search size={24} className="text-rose-500" />
    },
    {
      title: "Multimodal Learning",
      description: "Embracing diverse ways of knowing through varied representational and communication modes",
      icon: <SplitSquareVertical size={24} className="text-sky-500" />
    },
    {
      title: "Human-Centered Design",
      description: "Focusing on the needs, contexts, and experiences of learners throughout the design process",
      icon: <Compass size={24} className="text-purple-500" />
    }
  ];

  const learningTheories = [
    {
      name: "ADDIE Model",
      icon: <Layers size={24} className="text-purple-500" />,
      description: "Systematic instructional design through Analysis, Design, Development, Implementation, and Evaluation"
    },
    {
      name: "Behaviorism",
      icon: <Check size={24} className="text-emerald-500" />,
      description: "Learning as observable changes in behavior through stimulus-response connections"
    },
    {
      name: "Cognitive Psychology",
      icon: <Brain size={24} className="text-amber-500" />,
      description: "Focus on mental processes, information processing, and knowledge acquisition"
    },
    {
      name: "Constructivism",
      icon: <Lightbulb size={24} className="text-sky-500" />,
      description: "Learners actively construct knowledge through experience and social interactions"
    }
  ];

  const toolsAndTechnologies = [
    {
      category: "Design & Production",
      icon: <Monitor size={24} className="text-primary" />,
      tools: ["Adobe Creative Cloud", "Articulate", "Storyline", "Rise", "Captivate", "iSpring", "Figma", "Canva Pro"]
    },
    {
      category: "Learning Platforms",
      icon: <Server size={24} className="text-primary" />,
      tools: ["Canvas LMS", "Moodle", "Blackboard", "H5P", "EdX", "Google Classroom", "Teachable"]
    },
    {
      category: "Communication & Collaboration",
      icon: <Webcam size={24} className="text-primary" />,
      tools: ["Zoom", "Loom", "Google Meet", "Flipgrid", "Mentimeter"]
    },
    {
      category: "Development",
      icon: <Code size={24} className="text-primary" />,
      tools: ["HTML/CSS", "JavaScript", "React", "WordPress", "H5P", "GitHub"]
    },
    {
      category: "Assessment & Analytics",
      icon: <Database size={24} className="text-primary" />,
      tools: ["Grammarly", "Kahoot", "Duolingo", "Qualtrics", "Google Analytics", "MAXQDA", "Learning Analytics Dashboards"]
    }
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                  alt="Learning Designer workspace with laptop" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>
            </TransitionWrapper>
          </div>
          
          <TransitionWrapper animation="fade-in">
            <div className="mb-20">
              <h2 className="text-2xl font-display font-semibold mb-10 text-center">Design Philosophy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {philosophy.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(240,242,245,0.9) 100%)",
                      borderTop: "3px solid",
                      borderColor: index % 2 === 0 ? "#10b981" : "#6366f1",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <div className="h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-display font-semibold mb-8 text-center">Learning Theories & Models</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {learningTheories.map((theory, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl shadow-md flex flex-col transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(120deg, rgba(248,250,252,0.9) 0%, rgba(241,245,249,0.8) 100%)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        {theory.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{theory.name}</h3>
                    </div>
                    <p className="text-muted-foreground pl-0 md:pl-[4.5rem]">{theory.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up">
            <div className="mb-16">
              <h2 className="text-2xl font-display font-semibold mb-6 text-center">Tools & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {toolsAndTechnologies.map((category, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up" delay={100}>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-6 text-center">Specialized Skills</h2>
              <div className="flex flex-wrap justify-center gap-3">
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
          </TransitionWrapper>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

