
import { useState } from 'react';
import { Check, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import TransitionWrapper from './TransitionWrapper';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <TransitionWrapper animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
              Let's Collaborate
            </h2>
            <p className="text-muted-foreground">
              Interested in working together? Reach out to discuss how I can help with your learning design needs.
            </p>
          </div>
        </TransitionWrapper>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <TransitionWrapper animation="slide-in">
            <div className="bg-secondary/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Connect</p>
                    <p className="text-sm text-muted-foreground">
                      Available for freelance projects and full-time opportunities in learning design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-in" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"></span>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check size={18} />
                    Message Sent
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
