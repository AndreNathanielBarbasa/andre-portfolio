import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Cpu, Layers, Sun, Moon, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import profilePhoto from './assets/profile.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C'],
    frontend: ['React', 'Tailwind CSS',  , 'HTML/CSS'],
    backend: ['FastAPI', 'Flask', 'Java (Swing & JavaFX)', ],
    database: ['MySQL', 'phpMyAdmin', 'Database Design'],
    tools: ['VS Code', 'Git & GitHub', 'XAMPP', 'PyCharm', 'Figma', 'NetBeans','IntelliJ','Embarcadero Dev-C++'],
    soft: ['Problem-Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Communication']
  };

  const projects = [
    {
      title: 'Community Alert & Notification System',
      description: 'A Java + MySQL desktop application that allows admins to send alerts and users to receive and confirm them. Features messaging modules, database logging, and a clean custom GUI (Swing/JavaFX).',
      tech: ['Java', 'MySQL', 'Swing/JavaFX'],
      icon: <Layers className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Health Chatbot',
      description: 'A web-based AI assistant that provides health information, built using Python (FastAPI), LLaMA API, HTML/CSS/JS, and MySQL. Designed to run locally with XAMPP.',
      tech: ['Python', 'FastAPI', 'LLaMA API', 'MySQL'],
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Trivia Quiz Game',
      description: 'A fun interactive quiz application with multiple-choice questions, scoring, and UI transitions. Built to practice logic, UI design, and user interaction flow.',
      tech: ['Java', 'Custom user interface design using Swing components', 'UI Design'],
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ISAT U Chatbot',
      description: 'A web-based AI chat assistant built for ISAT University students to provide quick answers, guidance, and support. Unlike typical chatbots, this project integrates a custom AI model similar to OLLAMA, enabling more intelligent and context-aware responses. The system is designed with a modern, responsive interface and includes features such as real-time messaging, Markdown rendering, and a clean chat UI.',
      tech: ['HTML', 'CSS', 'JavaScript','Custom AI model (similar to OLLAMA)','Node.js / Python backend' ],
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-blue-500'
    }
  ];

  const education = [
    {
      school: 'Iloilo Science and Technology University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 - 2026 (Expected)',
      status: 'current'
    },
    {
      school: 'Santa Barbara National Comprehensive High School',
      degree: 'High School Diploma',
      period: '2020 - 2022'
    },
    {
      school: 'Doane Conservatorium Integrated School, Inc.',
      degree: 'Junior High School',
      period: '2016 - 2020'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 text-gray-900 dark:text-white min-h-screen transition-all duration-500">
        
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
              ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' 
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              >
              
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex w-full justify-center items-center space-x-8">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.button 
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-3xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"

                    
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
              >
                <div className="px-4 py-4 space-y-2">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                >
                  <Sparkles size={16} />
                  <span className="text-sm font-medium">Available for opportunities</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Andre
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-blue-300"
                >
                  Full-Stack Developer & AI Builder
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I craft modern, efficient applications from intuitive frontend interfaces to powerful backend systems. 
                  Specializing in <span className="text-blue-600 dark:text-blue-400 font-semibold">Python/Java</span>, 
                  <span className="text-purple-600 dark:text-purple-400 font-semibold"> React</span>, and 
                  <span className="text-pink-600 dark:text-pink-400 font-semibold"> MySQL</span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="resume (BARBASA).docx"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download Resume
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all"
                  >
                    View Projects
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-2xl"
                  >
                    <img 
                      src={profilePhoto} 
                      alt="Andre Nathaniel Barbasa" 
                      className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={32} className="text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                Get to know me better
              </p>

              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate developer who enjoys <span className="text-blue-600 dark:text-blue-400 font-semibold">building, solving, and learning</span>. 
                    I love turning ideas into real applications — from intuitive front-end designs to powerful backend systems. 
                    Coding motivates me because every project is a chance to explore new technologies, improve my skills, and create something meaningful.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    With experience in <span className="text-purple-600 dark:text-purple-400 font-semibold">full-stack development</span>, 
                    <span className="text-pink-600 dark:text-pink-400 font-semibold"> AI/chatbot integration</span>, and 
                    <span className="text-blue-600 dark:text-blue-400 font-semibold"> database-driven systems</span>, 
                    I focus on writing clean, efficient, and reliable code. I enjoy challenges, especially when they push me to understand how systems work.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <Terminal className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400">10+</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <Code className="w-8 h-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                      <h3 className="font-bold text-2xl text-purple-600 dark:text-purple-400">5+</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-pink-600 dark:text-pink-400" />
                      <h3 className="font-bold text-2xl text-pink-600 dark:text-pink-400">100%</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dedication</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                Technologies I work with
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard title="Languages" skills={skills.languages} icon="💻" darkMode={darkMode} delay={0.1} />
                <SkillCard title="Frontend" skills={skills.frontend} icon="🎨" darkMode={darkMode} delay={0.2} />
                <SkillCard title="Backend" skills={skills.backend} icon="⚙️" darkMode={darkMode} delay={0.3} />
                <SkillCard title="Database" skills={skills.database} icon="🗄️" darkMode={darkMode} delay={0.4} />
                <SkillCard title="Tools" skills={skills.tools} icon="🛠️" darkMode={darkMode} delay={0.5} />
                <SkillCard title="Soft Skills" skills={skills.soft} icon="🌟" darkMode={darkMode} delay={0.6} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                Check out my recent work
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} darkMode={darkMode} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                My academic journey
              </p>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-20"
                    >
                      <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                      
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-slate-700">
                        {edu.status === 'current' && (
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full mb-2">
                            Currently Studying
                          </span>
                        )}
                        <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.degree}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.period}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-12">
                Feel free to reach out for collaborations or just a friendly hello
              </p>

              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="tel:09509138281"
                    className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="p-3 bg-blue-500 rounded-lg text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <p className="font-semibold group-hover:text-blue-500 transition">09509138281</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="mailto:dreisbetter@gmail.com"
                    className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="p-3 bg-purple-500 rounded-lg text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <p className="font-semibold group-hover:text-purple-500 transition">dreisbetter@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="https://github.com/AndreNathanielBarbasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="p-3 bg-pink-500 rounded-lg text-white">
                      <Github className="w-6 h-6" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                      <p className="font-semibold group-hover:text-pink-500 transition">AndreNathanielBarbasa</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    href="https://www.linkedin.com/in/andre-nathaniel-s-barbasa-2b8a12398/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="p-3 bg-cyan-500 rounded-lg text-white">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                      <p className="font-semibold group-hover:text-cyan-500 transition">Andre Barbasa</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Andre Nathaniel Barbasa  <span className="text-red-500"></span> 
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// SkillCard Component
function SkillCard({ title, skills, icon, darkMode, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-slate-700 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl group-hover:scale-110 transition-transform">{icon}</span>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.05 }}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// ProjectCard Component
function ProjectCard({ title, description, tech, icon, gradient, darkMode, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-slate-700 group"
    >
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`p-4 bg-gradient-to-r ${gradient} rounded-xl text-white shadow-lg`}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold flex-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}