import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Shield, 
  Lock, 
  Code, 
  Server,
  Menu,
  X,
  ExternalLink,
  Eye,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen grid-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <span className="text-2xl font-serif font-bold text-white">PKS</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-charcoal/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            PragneshKumar Singh
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
            The Custodian of Digital Realms
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Protecting digital assets and securing cyber landscapes with innovative solutions
            and cutting-edge expertise.
          </p>
          <a href="#about" className="btn-primary">
            Learn More
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity Workspace"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6">
                With over a decade of experience in cybersecurity, I specialize in protecting
                organizations from evolving digital threats. My expertise spans across network
                security, penetration testing, and security architecture design.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I hold advanced certifications in cybersecurity and regularly contribute to
                the security community through research and speaking engagements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Security Architecture", desc: "Designing robust security systems" },
              { icon: Lock, title: "Penetration Testing", desc: "Identifying vulnerabilities" },
              { icon: Code, title: "Security Automation", desc: "Streamlining security processes" },
              { icon: Server, title: "Network Security", desc: "Protecting digital infrastructure" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-midnight/50 p-6 rounded-lg hover:shadow-lg hover:shadow-neon-blue/10 
                         transition-all duration-300 transform hover:-translate-y-2"
              >
                <skill.icon className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SecureNet Framework",
                description: "Enterprise-grade security framework implementing zero-trust architecture and advanced threat detection.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                tech: ["Zero Trust", "AI/ML", "Threat Detection"],
                demo: "https://demo.example.com",
                github: "https://github.com"
              },
              {
                title: "CyberGuard Pro",
                description: "Automated security assessment tool for cloud infrastructure with real-time vulnerability scanning.",
                image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80",
                tech: ["Cloud Security", "Automation", "DevSecOps"],
                demo: "https://demo.example.com",
                github: "https://github.com"
              },
              {
                title: "BlockGuard",
                description: "Blockchain security analysis platform for smart contract auditing and vulnerability detection.",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
                tech: ["Blockchain", "Smart Contracts", "Security Auditing"],
                demo: "https://demo.example.com",
                github: "https://github.com"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal/50 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-neon-blue/10 
                         transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-midnight/50 rounded-full text-sm text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      <Eye size={18} />
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-neon-blue" />
                  <a href="mailto:email@example.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                    email@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-neon-blue" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-neon-blue" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
              <div className="flex space-x-6 pt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-neon-blue transition-colors"
                   title="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-neon-blue transition-colors"
                   title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-neon-blue transition-colors"
                   title="Instagram">
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-midnight/50 p-8 rounded-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-charcoal/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-charcoal/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-charcoal/50 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                {formStatus.message && (
                  <div className={`p-3 rounded-lg ${
                    formStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 Pragnesh Kumar Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;