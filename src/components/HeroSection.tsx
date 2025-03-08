
import TransitionWrapper from './TransitionWrapper';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <TransitionWrapper animation="fade-in" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Designing for <br className="hidden sm:block" />
              <span className="relative inline-block">
                Digital Equity
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-secondary"></span>
              </span>
            </h1>
          </TransitionWrapper>

          <TransitionWrapper animation="fade-in" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specialized in creating inclusive learning experiences that bridge technology and pedagogy for higher education, multilingual learners, and community organizations.
            </p>
          </TransitionWrapper>

          <TransitionWrapper animation="fade-in" delay={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              >
                View Portfolio
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2"
              >
                Get in Touch
              </a>
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
