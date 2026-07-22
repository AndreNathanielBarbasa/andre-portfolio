import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Server,
  Sparkles,
  Sun,
  Terminal,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import profilePhoto from './assets/profile.jpg';

const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Stack', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Education', section: 'education' },
  { label: 'Contact', section: 'contact' },
];

const skills = [
  {
    title: 'Languages',
    icon: Code,
    color: 'blue',
    items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C', 'PHP'],
  },

   {
    title: 'Backend',
    icon: Server,
    color: 'cyan',
    items: ['FastAPI', 'Flask',  'REST API', 'Socket Programming', 'Multithreading','Pydantic','Third-party API integration' ],
  },

  {
    title: 'Database',
    icon: Database,
    color: 'emerald',
    items: ['MySQL', 'phpMyAdmin', 'PostgreSQL','PgAdmin 4'],
  },

  {
    title: 'Frontend',
    icon: Palette,
    color: 'violet',
    items: ['React', 'Tailwind CSS', 'HTML/CSS' , 'JavaScript'],
  },

  {
    title: 'Tools',
    icon: Wrench,
    color: 'amber',
    items: ['VS Code', 'Git & GitHub', 'XAMPP', 'PyCharm', 'Docker', 'NetBeans', 'IntelliJ', 'Dev-C++', 'Laragon', 'PuTTY / SSH, Linux Server Administration'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'rose',
    items: ['Problem-Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Communication'],
  },
];

const projects = [
  {
    title: 'Afternic Marketplace Search API',
    description:
      'A production-grade REST API built during my OJT, handling a combined dataset of 325 million rows (Afternic marketplace listings + ICANN domain registry). Implemented PostgreSQL trigram indexing for fast fuzzy search, paginated search endpoints, and a single-query domain lookup using SQL window functions. Deployed on a Linux server via SSH.',
    tech: ['Python', 'Flask', 'PostgreSQL', ' REST API', 'SQL Optimization','Linux'],
    icon: Layers,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI Health Chatbot',
    description:
      'A web-based AI chatbot that provides general health information and answers user questions using a large language model (LLM). The application features a responsive user interface, a Python Flask backend for handling requests, and a MySQL database for managing chat-related data. It demonstrates backend API development, database integration, and AI-powered conversational functionality while emphasizing that the chatbot is intended for informational purposes only and not as a substitute for professional medical advice.',
    tech: ['Python', 'Flask', 'Groq API', 'MySQL', 'PostgreSQL','HTML/CSS','JavaScript','Render'],
    icon: Cpu,
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: ' RxExpress Medicine Delivery Prototype',
    description:
      'A medicine delivery web prototype with a PHP/MySQL backend — handling user registration, login authentication, pharmacy comparison, and order placement with persistent database storage.',
    tech: ['PHP', 'MySQL', 'REST-style API' , 'Authentication', 'JavaScript','HTML/CSS'],
    icon: Code,
    gradient: 'from-emerald-500 to-teal-500',
  },

  {
    title: 'Community Alert & Notification System',
    description:
      'A multithreaded Java TCP server built with raw sockets, designed as the middleware layer for a community alert system. The server accepts multiple concurrent client connections, each handled on its own thread, and processes a custom lightweight text-based protocol for admin login and user registration. Includes a Swing-based admin console for starting/stopping the server and viewing real-time connection logs.',
    tech: ['Java', 'MySQL', 'Swing', 'Multithreading', 'Client-Server Architecture'],
    icon: Layers,
    gradient: 'from-blue-500 to-cyan-500',
  },

   {
    title: 'Fitness web',
    description:
      'A fitness tracking web app with a FastAPI backend, storing user form submissions in a MySQL database (managed via phpMyAdmin). Uses Pydantic for data validation, containerized with Docker and Docker Compose.',
    tech: ['Python', 'FastAPI', 'Pydantic', 'MySQL', 'Docker','JavaScript', 'HTML/CSS'],
    icon: Layers,
    gradient: 'from-blue-500 to-cyan-500',
  },
];

const education = [
  {
    school: 'Iloilo Science and Technology University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022 - 2026',
    status: 'Graduated 2026',
  },
  {
    school: 'Wadhwani Foundation — Ignite Philippines',
    degree: 'Certificate',
    period: 'January 9, 2026',
  },
  {
    school: 'Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals — TESDA',
    degree: 'Certificate',
    period: 'June 29, 2026',
  },
  {
    school: 'Machine Learning — DataCamp',
    degree: 'Course completed',
    period: 'April 29, 2024',
  },
];

const stats = [
  { label: ' Rows Handled in Production API', value: '325M+', icon: Terminal, color: 'blue' },
  { label: 'Projects Deployed', value: '3 ', icon: Code, color: 'violet' },
  { label: 'Focus On Growth', value: '100%', icon: Sparkles, color: 'rose' },
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900',
  violet:
    'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-100 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-900',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900',
  amber:
    'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900',
  rose: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900',
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 antialiased transition-colors duration-500 dark:bg-slate-950 dark:text-white">
        <SiteNav
          scrolled={scrolled}
          darkMode={darkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setDarkMode={setDarkMode}
          scrollToSection={scrollToSection}
        />

        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />

        <footer className="border-t border-slate-200 px-4 py-8 dark:border-slate-800">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row">
            <p>© 2026 Andre Nathaniel Barbasa. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SiteNav({ scrolled, darkMode, isMenuOpen, setIsMenuOpen, setDarkMode, scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 rounded-lg text-left font-semibold tracking-normal text-slate-900 dark:text-white"
          aria-label="Go to home"
        >
          
          <span className="hidden leading-tight sm:block">
            Andre Nathaniel Barbasa
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Backend Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_34%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles size={16} />
            Available for opportunities
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-rose-500 bg-clip-text text-transparent">
              Andre
            </span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-blue-200">
            Backend Developer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I specialize in building APIs and backend services using Python, Flask, and PostgreSQL.
             I focus on writing clean code, designing efficient databases, and creating systems that are reliable and easy to scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="public/AndreNathaniel_Barbasa_CV.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-blue-700"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/70 p-3 shadow-2xl shadow-slate-300/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-200 dark:bg-slate-800">
              <img src={profilePhoto} alt="Andre Nathaniel Barbasa" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Backend Developer</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Python, Flask, PostgreSQL, SQL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about" eyebrow="Get to know me better" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8"
        >
          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            <p>
              I'm a backend developer who enjoys solving real problems with code — from designing efficient databases to building APIs that can handle real scale. During my OJT, I built and deployed a REST API serving a 325-million-row dataset,
               which taught me a lot about performance, indexing, and writing backend systems that hold up under real load.
            </p>
            <p>
             I also have experience integrating AI/LLM APIs (like Groq) into backend applications, and building full-stack prototypes when a project calls for it.
              My focus is always on writing clean, reliable, and efficient code.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border p-5 shadow-sm ${colorClasses[stat.color]}`}
              >
                <Icon className="mb-3 h-7 w-7" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm font-medium opacity-80">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Technologies I work with" title="Skills & Expertise" muted>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} {...skill} delay={index * 0.06} />
        ))}
      </div>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Backend Projects & Systems" title="Featured Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" eyebrow="My academic journey" title="Education" muted narrow>
      <div className="relative space-y-5">
        <div className="absolute bottom-0 left-5 top-2 hidden w-px bg-gradient-to-b from-blue-500 to-violet-500 sm:block" />
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.08 }}
            className="relative sm:pl-14"
          >
            <span className="absolute left-3 top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950 sm:block" />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white sm:text-xl">{edu.school}</h3>
                  <p className="mt-1 font-semibold text-blue-700 dark:text-blue-300">{edu.degree}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                </div>
                {edu.status && (
                  <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {edu.status}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  const contacts = [
    { label: 'Phone', value: '09509138281', href: 'tel:09509138281', icon: Phone, color: 'blue' },
    { label: 'Email', value: 'dreisbetter@gmail.com', href: 'mailto:dreisbetter@gmail.com', icon: Mail, color: 'violet' },
    {
      label: 'GitHub',
      value: 'AndreNathanielBarbasa',
      href: 'https://github.com/AndreNathanielBarbasa',
      icon: Github,
      color: 'rose',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Andre Barbasa',
      href: 'https://www.linkedin.com/in/andrenathanielbarbasa/',
      icon: Linkedin,
      color: 'cyan',
      external: true,
    },
  ];

  return (
    <Section id="contact" eyebrow="Open to Software Developer opportunities" title="Let's Connect" narrow>
      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.06 }}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-900"
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${colorClasses[contact.color]}`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-sm text-slate-500 dark:text-slate-400">{contact.label}</span>
                <span className="block truncate font-semibold text-slate-900 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                  {contact.value}
                </span>
              </span>
              {contact.external && <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-600" />}
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}

function Section({ id, eyebrow, title, children, muted = false, narrow = false }) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${muted ? 'bg-white dark:bg-slate-900/45' : ''}`}>
      <div className={`mx-auto ${narrow ? 'max-w-4xl' : 'max-w-6xl'}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function SkillCard({ title, items, icon: Icon, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay, duration: 0.45 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-xl border ${colorClasses[color]}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, tech, icon: Icon, gradient, index }) {
  const isFitnessProject = title === 'Fitness web';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 ${
        isFitnessProject ? 'flex flex-col justify-center lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]' : ''
      }`}
    >
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
      <div className={`p-5 sm:p-6 ${isFitnessProject ? 'flex flex-1 flex-col items-center justify-center text-center' : ''}`}>
        <div className={`mb-4 flex gap-4 ${isFitnessProject ? 'flex-col items-center justify-center' : 'items-start'}`}>
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-r text-white ${gradient}`}>
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-bold leading-snug text-slate-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-xl">
            {title}
          </h3>
        </div>
        <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">{description}</p>
        <div className={`flex flex-wrap gap-2 ${isFitnessProject ? 'justify-center' : ''}`}>
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
