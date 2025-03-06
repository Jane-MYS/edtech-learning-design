
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import TransitionWrapper from '@/components/TransitionWrapper';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <TransitionWrapper animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Interested in collaborating or have questions about my learning design services? I'd love to hear from you.
              </p>
            </div>
          </TransitionWrapper>
          
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
