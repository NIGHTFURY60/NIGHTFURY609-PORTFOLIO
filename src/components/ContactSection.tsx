
import React, { useState, useRef, useEffect } from 'react';
import { revealText } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      revealText(contentRef.current, 0.2);
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="opacity-0">
            <span className="badge bg-secondary text-secondary-foreground mb-4">Contact</span>
            
            <h2 className="heading-lg mb-6">
              Let's Work Together
            </h2>
            
            <p className="subtitle mb-8">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-background p-2 rounded-full mr-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.25L12 13.5L3 5.25M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-background p-2 rounded-full mr-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 8.63996C20.2516 10.1518 19.8239 11.6343 19.012 12.9261C18.2 14.2179 17.0358 15.2723 15.65 15.9599L14.4 14.2999C15.4259 13.8028 16.285 13.0218 16.8708 12.0488C17.4566 11.0758 17.7434 9.95434 17.7 8.81996C17.6846 8.10345 17.5546 7.39476 17.315 6.71996C17.095 6.10284 16.7682 5.53266 16.35 5.03096C15.8857 4.50468 15.3229 4.07368 14.6913 3.76093C14.0597 3.44818 13.3724 3.25963 12.67 3.20496C11.9675 3.14208 11.2596 3.21455 10.5895 3.41812C9.91941 3.6217 9.30168 3.95228 8.775 4.38996C8.23339 4.85449 7.78953 5.42502 7.47115 6.06918C7.15278 6.71335 6.96592 7.41674 6.925 8.13996C6.87981 9.25668 7.1569 10.3621 7.73136 11.3214C8.30583 12.2807 9.14784 13.0562 10.15 13.5599L8.875 15.2299C7.4707 14.5536 6.29011 13.4961 5.47564 12.1954C4.66117 10.8948 4.2342 9.39883 4.25 7.87996C4.25 6.82996 4.445 5.78246 4.82 4.79996C5.1725 3.86552 5.715 3.01776 6.415 2.31096C7.13157 1.60596 7.99363 1.05742 8.94 0.699965C9.93249 0.324951 10.9899 0.129947 12.06 0.124965C13.1183 0.118326 14.166 0.307746 15.145 0.684965C16.0914 1.03996 16.9553 1.58396 17.675 2.28496C18.3949 2.99847 18.9524 3.85758 19.315 4.80996C19.6906 5.79209 19.8808 6.83472 19.875 7.88746C19.8808 8.13996 19.875 8.38996 19.85 8.63996H20.25Z" fill="currentColor"/>
                    <path d="M5.4 7.20001C5.17001 7.71077 5.03269 8.25867 5 8.81651C5.03266 9.93219 5.47331 10.9943 6.24324 11.7998C7.01318 12.6052 8.0513 13.0931 9.1625 13.175L8 14.7675C7.02078 14.5223 6.11609 14.0673 5.34933 13.4357C4.58257 12.804 3.97524 12.013 3.575 11.125C3.19648 10.3018 3.00044 9.41344 3 8.51501C2.99998 7.77055 3.13482 7.0332 3.4 6.33751L5.4 7.20001Z" fill="currentColor"/>
                    <path d="M19.9999 19.0999C19.9999 19.6303 19.7891 20.1391 19.4141 20.5141C19.0391 20.889 18.5303 21.0999 17.9999 21.0999H5.99992C5.46949 21.0999 4.96078 20.889 4.58571 20.5141C4.21064 20.1391 3.99992 19.6303 3.99992 19.0999V17.0999C3.99992 16.5694 4.21064 16.0607 4.58571 15.6857C4.96078 15.3106 5.46949 15.0999 5.99992 15.0999H17.9999C18.5303 15.0999 19.0391 15.3106 19.4141 15.6857C19.7891 16.0607 19.9999 16.5694 19.9999 17.0999V19.0999Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-background p-2 rounded-full mr-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className={cn(
            "glass-effect p-8 rounded-lg",
            "transform transition-all duration-500",
            isSubmitting ? "scale-[0.98] opacity-90" : "scale-100 opacity-100"
          )}>
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background/50",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50"
                  )}
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background/50",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50"
                  )}
                  placeholder="Your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background/50",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50",
                    "resize-none"
                  )}
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-6 py-3 rounded-md bg-primary text-primary-foreground",
                  "hover:bg-primary/90 transition-colors duration-300",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
