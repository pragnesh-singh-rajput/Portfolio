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
                A cybersecurity expert is a digital guardian, standing at the frontline of the ever-evolving battlefield of cyber threats. With a sharp eye for vulnerabilities and a deep understanding of network defense, they work tirelessly to secure systems, detect intrusions, and thwart malicious attacks. Whether analyzing forensic evidence, strengthening firewalls, or conducting ethical hacking to expose weaknesses, their role is critical in protecting sensitive data and ensuring the integrity of digital landscapes. In a world where cyber threats grow more sophisticated by the day, cybersecurity experts are the unsung heroes keeping businesses, governments, and individuals safe from digital chaos.
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
                title: "Sharenrypt",
                description: "This project demonstrates how to establish reliable peer-to-peer connections without WebRTC, using a custom relay server approach.",
                image: "https://www.divshare.com/wp-content/uploads/2024/12/P2P-File-Sharing-.jpeg",
                tech: ["Zero Trust", "Encryption", "Security"],
                demo: "",
                github: "https://github.com/pragnesh-singh-rajput/Sharenrypt-p2p-file-sharing"
              },
              {
                title: "Twitter-News-Bot",
                description: "A Telegram bot that fetches news articles, allows an admin to approve or reject them, and posts approved articles to X (formerly Twitter).",
                image: "https://realpython.com/cdn-cgi/image/width=960,format=auto/https://files.realpython.com/media/How-to-Make-a-Twitter-Bot-in-Python-with-Tweepy_Watermarked.e0e3b3e8f6ce.jpg",
                tech: ["API Security", "Automation", "Programming"],
                demo: "",
                github: "https://github.com/pragnesh-singh-rajput/Twitter-News-Bot"
              },
              {
                title: "AWS Rekognition",
                description: "This repository contains Python scripts to use AWS Rekognition for detecting objects in images 🖼️ and faces in videos 🎥, displaying results with bounding boxes 🟦, and storing face detection results in a pandas DataFrame 📊.",
                image: "https://www.awsgeek.com/Amazon-Rekognition/Amazon-Rekognition.jpg",
                tech: ["AI/ML", "Cloud Computing", "Computer Vision"],
                demo: "",
                github: "https://github.com/pragnesh-singh-rajput/image-and-video-rekognition-with-aws"
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
                  <a href="mailto:singhpragnesh89@gmail.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                    singhpragnesh89@gmail.com.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-neon-blue" />
                  <a href="tel:+916355736986" className="text-gray-300 hover:text-neon-blue transition-colors">
                    +91 6355736986
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-neon-blue" />
                  <span className="text-gray-300">Gujarat, India</span>
                </div>
              </div>
              <div className="flex space-x-6 pt-6">
                <a href="https://github.com/pragnesh-singh-rajput" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-neon-blue transition-colors"
                   title="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/pragnesh-singh-rajput" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-neon-blue transition-colors"
                   title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/pragnesh_singh_rajput" target="_blank" rel="noopener noreferrer"
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
