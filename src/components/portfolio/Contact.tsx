
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, MapPin, Clock, Shield, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      console.log('Email response:', data);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll respond within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly at shiv@cybersec.dev",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-tech-blue to-tech-indigo mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges, collaboration opportunities, or just connect with fellow security enthusiasts
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="professional-border p-8 subtle-glow">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-tech-blue" />
                  <h3 className="text-2xl text-white font-semibold">Connect With Me</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-tech-blue/10 border border-tech-blue/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-slate-400">shiv@cybersec.dev</p>
                      <p className="text-xs text-tech-blue">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-tech-indigo/10 border border-tech-indigo/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-tech-indigo" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-slate-400">Available for remote collaboration</p>
                      <p className="text-xs text-tech-indigo">Global timezone flexibility</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-tech-emerald/10 border border-tech-emerald/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-tech-emerald" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Availability</h4>
                      <p className="text-slate-400">UTC+5:30 (IST)</p>
                      <p className="text-xs text-tech-emerald">Open to new opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/shiv-cybersec"
                      className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-tech-blue hover:text-tech-blue transition-all duration-300 hover-lift"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/shiv-cybersec"
                      className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-tech-indigo hover:text-tech-indigo transition-all duration-300 hover-lift"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:shiv@cybersec.dev"
                      className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-tech-emerald hover:text-tech-emerald transition-all duration-300 hover-lift"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="professional-border p-6 bg-gradient-to-r from-tech-blue/5 to-tech-indigo/5">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-tech-blue" />
                  <h4 className="text-white font-medium">Security Notice</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  All communications are encrypted and monitored for security. Professional inquiries only.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <div className="professional-border p-8 subtle-glow">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-6 h-6 text-tech-blue" />
                  <h3 className="text-2xl text-white font-semibold">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-tech-blue focus:outline-none transition-colors"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-tech-blue focus:outline-none transition-colors"
                        placeholder="your.email@domain.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-tech-blue focus:outline-none transition-colors"
                      placeholder="Project collaboration, consultation, etc."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-tech-blue focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, requirements, or how we can work together..."
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full professional-border px-6 py-4 text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-all duration-300 font-medium hover-lift group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                      {isSubmitting ? 'Sending Secure Message...' : 'Send Secure Message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
          <div className="border-t border-slate-800 pt-8">
            <div className="professional-border p-6 inline-block">
              <p className="text-slate-400 font-medium">
                © 2024 SHIV • Cybersecurity Professional
              </p>
              <p className="text-tech-blue text-sm mt-2">
                "Building secure digital futures, one line of code at a time"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
