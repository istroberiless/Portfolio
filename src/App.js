import React, { useState, useEffect } from 'react';
import './styles.css';
import heroStyles from './components/Hero.module.css';
import projectStyles from './components/Projects.module.css';
import aboutStyles from './components/About.module.css';

import profileImg from './assets/2x2.jpg';
import logoImg from './assets/logo.png';
import campuseatsImg from './assets/campuseats.png';
import bituinImg from './assets/bituin.png';
import funImg from './assets/fun.png';
import locationImg from './assets/location.png';

import {
  Menu, X, Github, Linkedin, Mail, ExternalLink, Code2,
  Smartphone, ArrowRight, Database, Globe, Terminal, Layers,
  Settings, Lightbulb, Target, Users, Zap, ChevronDown
} from 'lucide-react';

// ─── Shared Data ───────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Campus Eats",
    description: "An all-in-one food delivery platform built exclusively for university campuses through collaborative teamwork. Features mobile applications for customers and delivery riders, web-based vendor dashboards, and real-time delivery tracking with live selling streams.",
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase"],
    github: "https://github.com/Lraccc/campus_eats",
    live: "#",
    image: campuseatsImg,
    type: "collaborative"
  },
  {
    title: "Bituin Destinations",
    description: "A comprehensive travel planning platform designed through collaborative teamwork to make every journey seamless and inspiring. Provides an intuitive space for travelers to explore, compare, and book unique destinations and experiences.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/ElReyDeLosGorditos/IT342-BituinDestinations",
    live: "https://www.figma.com/proto/DmN5BW5cx8sSg2TPualg2E/BituinDestinations?node-id=0-1&p=f&t=4YROKn0YulwOpm5y-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A6",
    image: bituinImg,
    type: "collaborative"
  },
  {
    title: "TTPD Creative Design ✨",
    description: "A playful and experimental Figma design created purely for fun and creative expression. This passion project showcases artistic UI/UX exploration, interactive prototyping, and visual storytelling, born from inspiration and joy.",
    tech: ["Figma", "Creative Design", "Personal Project", "Artistic Expression"],
    github: "#",
    live: "https://www.figma.com/proto/ym07zHyvstXfZXbaMGeMNS/TTPD?node-id=3-2&p=f&t=04eWs0lGwvkp5DSa-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    image: funImg,
    type: "creative"
  },
  {
    title: "Campus Transportation Service",
    description: "A transportation service prototype developed through collaborative teamwork providing convenient and organized campus-related transportation. Features student request management and efficient driver response systems for campus mobility solutions.",
    tech: ["Figma", "UX Research", "Prototype Design", "User Testing"],
    github: "#",
    live: "https://www.figma.com/proto/JllVgrUS42gfit94KRrj7e/HCI-Prototype?node-id=129-116&p=f&t=dlF6p2Zg6JumIJRb-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=129%3A116",
    image: locationImg,
    type: "collaborative"
  }
];

const internshipEdits = [
  {
    title: "Internship Video Outputs",
    link: "YOUR_DRIVE_LINK_HERE",
    icon: <Layers size={20} />,
    bg: '#d1fae5',
    color: '#065f46'
  }
];

const technicalSkills = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
  "Frontend": ["React", "Tailwind CSS"],
  "Backend": ["Node.js", "Django", "REST APIs"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
  "QA & Testing": ["TestRail", "Testing Strategies"],
  "Tools & Others": ["Git", "Figma"]
};

const technicalSkillIcons = {
  "Languages":      { icon: <Terminal size={15} />,   bg: '#fef3c7', color: '#92400e' },
  "Frontend":       { icon: <Code2 size={15} />,      bg: '#d1fae5', color: '#065f46' },
  "Backend":        { icon: <Globe size={15} />,      bg: '#e0f2fe', color: '#0369a1' },
  "Databases":      { icon: <Database size={15} />,   bg: '#ede9fe', color: '#5b21b6' },
  "QA & Testing":   { icon: <Target size={15} />,     bg: '#fee2e2', color: '#991b1b' },
  "Tools & Others": { icon: <Settings size={15} />,   bg: '#f1f5f9', color: '#475569' },
};

const softSkills = [
  { icon: <Lightbulb size={28} />, name: "Creative Problem Solving", desc: "Innovative approaches to complex challenges with out-of-the-box thinking" },
  { icon: <Target size={28} />,    name: "Strategic Planning",        desc: "Long-term vision with attention to detail in project execution" },
  { icon: <Users size={28} />,     name: "Team Collaboration",        desc: "Strong communication in cross-functional teams" },
  { icon: <Zap size={28} />,       name: "Adaptability",              desc: "Quick learner who thrives in fast-paced, evolving environments" }
];

// ─── Section Header Helper ─────────────────────────────────────────────────────

function SectionHeader({ title }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1c1917', letterSpacing: '0.03em', marginBottom: '6px' }}>
        {title}
      </h3>
      <div style={{ width: '2.5rem', height: '2px', background: 'linear-gradient(to right, #f59e0b, #34d399)', borderRadius: '999px' }}></div>
    </div>
  );
}

// ─── Shared Nav ────────────────────────────────────────────────────────────────

function Nav({ currentPage, navigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = (page, label, anchor) => {
    const isActive = currentPage === page;
    const handleClick = (e) => {
      e.preventDefault();
      setIsMenuOpen(false);
      if (anchor && currentPage === page) {
        document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(page);
        if (anchor) setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    };
    return (
      <a
        href="#"
        onClick={handleClick}
        className="text-sm font-medium transition-colors duration-300 px-3 py-2"
        style={{ color: isActive ? '#92400e' : '#57534e', fontWeight: isActive ? '600' : '500' }}
      >
        {label}
      </a>
    );
  };

  const mobileLink = (page, label) => (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); navigate(page); setIsMenuOpen(false); }}
      className="text-sm font-medium py-2 transition-colors"
      style={{ color: currentPage === page ? '#92400e' : '#57534e' }}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-lg z-50 border-b border-stone-300/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <img src={logoImg} alt="KNI Logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navLink('home', 'Home', '#home')}
            {navLink('home', 'About', '#about')}
            {navLink('projects', 'Projects')}
            {navLink('creative', 'Creative Works')}
            {navLink('home', 'Skills', '#skills')}
            {navLink('home', 'Contact', '#contact')}
          </div>
          <button className="md:hidden p-2 text-stone-600 hover:text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-3">
              {mobileLink('home', 'Home')}
              {mobileLink('home', 'About')}
              {mobileLink('projects', 'Projects')}
              {mobileLink('creative', 'Creative Works')}
              {mobileLink('home', 'Skills')}
              {mobileLink('home', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Shared Footer ─────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: '#2c2926' }}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <div className="text-2xl font-light mb-3">
            <span className="text-amber-400">Kyle Niña</span> Inion
          </div>
          <p className="text-stone-400 font-light">Mindful Developer • Thoughtful Creator • Purpose-Driven Builder</p>
        </div>
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://github.com/istroberiless" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/kyle-ni%C3%B1a-inion-6083083a4/" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:kyle.inion@gmail.com" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300"><Mail size={20} /></a>
        </div>
        <div className="border-t border-stone-700 pt-8">
          <p className="text-stone-400 font-light">&copy; 2025 Kyle Niña Inion. Made with intention. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page: Home ────────────────────────────────────────────────────────────────

function HomePage({ navigate }) {
  return (
    <>
      {/* Hero */}
      <section id="home" className={heroStyles.hero}>
        <div className={heroStyles.heroContainer}>
          <div className={heroStyles.heroGrid}>
            <div className={heroStyles.heroContent}>
              <h1 className={heroStyles.heroTitle}>
                <span className="relative">
                  Kyle Niña Inion
                  <div className={heroStyles.heroTitleUnderline}></div>
                </span>
              </h1>
              <div className={heroStyles.heroSubtitle}>✨ UI/UX Designer | Aspiring Team Leader ✨</div>
              <p className={heroStyles.heroDescription}>
                A committed designer and problem-solver who thrives at the intersection of creativity and technology.
                I blend thoughtful design with technical expertise to craft user-centered digital solutions that are both functional and delightful to use.
              </p>
              <div className={heroStyles.heroStats}>
                <div className={heroStyles.heroStatItem}>
                  <div className={`${heroStyles.heroStatNumber} ${heroStyles.amber}`}>24/7</div>
                  <div className={heroStyles.heroStatLabel}>Creative Mind</div>
                </div>
                <div className={heroStyles.heroStatItem}>
                  <div className={`${heroStyles.heroStatNumber} ${heroStyles.teal}`}>100%</div>
                  <div className={heroStyles.heroStatLabel}>Passion Driven</div>
                </div>
              </div>
              <div className={heroStyles.heroButtons}>
                <button onClick={() => document.querySelector('#mywork')?.scrollIntoView({ behavior: 'smooth' })} className={heroStyles.heroPrimaryButton} style={{ border: 'none', cursor: 'pointer' }}>
                  Explore My Work <ArrowRight size={16} />
                </button>
                <a href="#contact" className={heroStyles.heroSecondaryButton}>Let's Connect</a>
              </div>
              <div className={heroStyles.heroSocial}>
                <div className={heroStyles.heroSocialText}>Let's connect mindfully</div>
                <div className={heroStyles.heroSocialLinks}>
                  <a href="https://github.com/istroberiless" className={`${heroStyles.heroSocialLink} ${heroStyles.github}`} target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/in/kyle-ni%C3%B1a-inion-6083083a4/" className={`${heroStyles.heroSocialLink} ${heroStyles.linkedin}`} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                  <a href="mailto:kyle.inion@gmail.com" className={`${heroStyles.heroSocialLink} ${heroStyles.email}`}><Mail size={18} /></a>
                </div>
              </div>
            </div>
            <div className={heroStyles.heroImageSection}>
              <div className={heroStyles.heroImageContainer}>
                <div className={`${heroStyles.heroImageRing} ${heroStyles.ring1}`}></div>
                <div className={`${heroStyles.heroImageRing} ${heroStyles.ring2}`}></div>
                <div className={`${heroStyles.heroImageRing} ${heroStyles.ring3}`}></div>
                <div className={heroStyles.heroImageBackground}></div>
                <div className={heroStyles.heroImageWrapper}>
                  <img src={profileImg} alt="Kyle Niña" className={heroStyles.heroImage} />
                  <div className={heroStyles.heroImageOverlay}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={aboutStyles.about}>
        <div className={aboutStyles.aboutContainer}>
          <div className={aboutStyles.aboutHeader}>
            <h2 className={aboutStyles.aboutTitle}>About Me</h2>
            <div className={aboutStyles.aboutUnderline}></div>
          </div>
          <div className={aboutStyles.aboutIntro}>
            <div className={aboutStyles.aboutIntroContent}>
              <h3 className={aboutStyles.aboutGreeting}>Hello, I'm Kyle</h3>
              <p className={aboutStyles.aboutDescription}>
                As someone passionate about <span className={aboutStyles.aboutHighlight}>Creative Design</span>,
                I focus on creating thoughtful digital experiences that prioritize user needs. I enjoy the process of turning
                complex problems into simple, intuitive solutions through careful research and iterative design.
              </p>
              <div className={aboutStyles.aboutTags}>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.mindful}`}>Mindful Creator</span>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.collaborative}`}>Thoughtful Collaborator</span>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.learner}`}>Continuous Learner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Work */}
      <section id="mywork" style={{ padding: '4rem 1rem 2rem', backgroundColor: '#f7f6f4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '300', color: '#1c1917', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              My Work
            </h2>
            <div style={{ width: '5rem', height: '2px', background: 'linear-gradient(to right, #f59e0b, #34d399)', margin: '0 auto', borderRadius: '999px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <button
              onClick={() => navigate('projects')}
              style={{
                background: 'white', border: '1px solid rgba(214,211,209,0.6)',
                borderRadius: '1.25rem', padding: '2rem', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#f59e0b'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'rgba(214,211,209,0.6)'; }}
            >
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>💻</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: '#1c1917', margin: '0 0 6px' }}>Projects</h3>
                <p style={{ fontSize: '14px', color: '#78716c', fontWeight: '300', lineHeight: '1.6', margin: 0 }}>
                  Web apps, mobile platforms, and UI/UX prototypes built through collaborative teamwork and personal exploration.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#92400e', fontSize: '13px', fontWeight: '500', marginTop: 'auto' }}>
                View Projects <ArrowRight size={14} />
              </div>
            </button>
            <button
              onClick={() => navigate('creative')}
              style={{
                background: 'white', border: '1px solid rgba(214,211,209,0.6)',
                borderRadius: '1.25rem', padding: '2rem', cursor: 'pointer',
                textAlign: 'left', transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = '#34d399'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'rgba(214,211,209,0.6)'; }}
            >
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>✨</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: '#1c1917', margin: '0 0 6px' }}>Creative Works</h3>
                <p style={{ fontSize: '14px', color: '#78716c', fontWeight: '300', lineHeight: '1.6', margin: 0 }}>
                  Video edits, motion design, and artistic experiments across social media platforms.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#065f46', fontSize: '13px', fontWeight: '500', marginTop: 'auto' }}>
                View Creative Works <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={aboutStyles.about}>
        <div className={aboutStyles.aboutContainer}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <div className={aboutStyles.aboutSectionHeader}>
                <h3 className={aboutStyles.aboutSectionTitle}>Core Values</h3>
                <div className={aboutStyles.aboutSectionUnderline}></div>
              </div>
              <div className={aboutStyles.coreValues}>
                {softSkills.map((skill, index) => (
                  <div key={index} className={aboutStyles.coreValueItem}>
                    <div className={aboutStyles.coreValueIcon}>{skill.icon}</div>
                    <div className={aboutStyles.coreValueContent}>
                      <h4>{skill.name}</h4>
                      <p>{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={aboutStyles.aboutSectionHeader}>
                <h3 className={aboutStyles.aboutSectionTitle}>Languages</h3>
                <div className={aboutStyles.aboutSectionUnderline}></div>
              </div>
              <div className={aboutStyles.languagesList}>
                <div className={aboutStyles.languageItem}>
                  <span className={aboutStyles.languageName}>English</span>
                  <div className={aboutStyles.languageBar}><div className={`${aboutStyles.languageProgress} ${aboutStyles.english}`}></div></div>
                </div>
                <div className={aboutStyles.languageItem}>
                  <span className={aboutStyles.languageName}>Tagalog</span>
                  <div className={aboutStyles.languageBar}><div className={`${aboutStyles.languageProgress} ${aboutStyles.tagalog}`}></div></div>
                </div>
                <div className={aboutStyles.languageItem}>
                  <span className={aboutStyles.languageName}>Cebuano</span>
                  <div className={aboutStyles.languageBar}><div className={`${aboutStyles.languageProgress} ${aboutStyles.cebuano}`}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#f7f6f4' }}>
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-10 left-10 text-6xl text-stone-400/30">✨</div>
          <div className="absolute top-20 right-20 text-4xl text-stone-400/30">🌟</div>
          <div className="absolute bottom-20 left-20 text-5xl text-stone-400/30">💫</div>
          <div className="absolute bottom-10 right-10 text-6xl text-stone-400/30">⭐</div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 tracking-wide">Get in Touch</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Feel free to reach out to me through any of these platforms.
          </p>
          <div className="flex justify-center items-center gap-6 lg:gap-8 flex-wrap">
            <a href="mailto:kyle.inion@gmail.com" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 group-hover:from-red-200 group-hover:to-red-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Mail size={20} className="text-red-600" />
              </div>
              <div className="text-center"><span className="font-medium text-stone-800 text-xs block">Email</span><span className="text-stone-600 text-xs font-light">kyle.inion@gmail.com</span></div>
            </a>
            <a href="tel:+639273644928" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Smartphone size={20} className="text-green-600" />
              </div>
              <div className="text-center"><span className="font-medium text-stone-800 text-xs block">Phone</span><span className="text-stone-600 text-xs font-light">09273644928</span></div>
            </a>
            <div className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Globe size={20} className="text-purple-600" />
              </div>
              <div className="text-center"><span className="font-medium text-stone-800 text-xs block">Location</span><span className="text-stone-600 text-xs font-light">Cebu City, Philippines</span></div>
            </div>
            <a href="https://www.linkedin.com/in/kyle-ni%C3%B1a-inion-6083083a4/" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Linkedin size={20} className="text-blue-600" />
              </div>
              <div className="text-center"><span className="font-medium text-stone-800 text-xs block">LinkedIn</span><span className="text-stone-600 text-xs font-light">Connect professionally</span></div>
            </a>
            <a href="https://github.com/istroberiless" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 bg-gradient-to-br from-stone-200 to-stone-300 group-hover:from-stone-300 group-hover:to-stone-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Github size={20} className="text-stone-600" />
              </div>
              <div className="text-center"><span className="font-medium text-stone-800 text-xs block">GitHub</span><span className="text-stone-600 text-xs font-light">View my code</span></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Page: Projects ────────────────────────────────────────────────────────────

function ProjectsPage({ navigate }) {
  return (
    <section className={projectStyles.projects} style={{ paddingTop: '6rem' }}>
      <div className={projectStyles.projectsContainer}>
        <div style={{ marginBottom: '0.5rem' }}>
          <button
            onClick={() => navigate('home')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#78716c', fontSize: '14px', fontWeight: '500',
              padding: '6px 0', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#92400e'}
            onMouseLeave={e => e.currentTarget.style.color = '#78716c'}
          >
            ← Back to Home
          </button>
        </div>
        <div className={projectStyles.projectsHeader}>
          <h2 className={projectStyles.projectsTitle}>Projects</h2>
          <div className={projectStyles.projectsUnderline}></div>
        </div>
        <p style={{ color: '#78716c', marginBottom: '2.5rem', fontSize: '15px', fontWeight: '300', lineHeight: '1.7' }}>
          A collection of collaborative and school projects spanning mobile apps, web platforms, and UI/UX prototypes.
        </p>
        <div className={projectStyles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${projectStyles.projectCard} ${project.type === 'creative' ? projectStyles.special : ''}`}>
              <div className={projectStyles.projectImageContainer}>
                <img src={project.image} alt={project.title} className={projectStyles.projectImage} />
                <div className={projectStyles.projectImageOverlay}></div>
              </div>
              <div className={projectStyles.projectContent}>
                <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                <p className={projectStyles.projectDescription}>{project.description}</p>
                <div className={projectStyles.projectTechList}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={projectStyles.projectTech}>{tech}</span>
                  ))}
                </div>
                <div className={projectStyles.projectLinks}>
                  <a href={project.github} className={projectStyles.projectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                  <a href={project.live} className={`${projectStyles.projectLink} ${projectStyles.primary}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Craft */}
        <div style={{ marginTop: '4rem' }}>
          <div className={aboutStyles.aboutSectionHeader}>
            <h3 className={aboutStyles.aboutSectionTitle}>Technical Craft</h3>
            <div className={aboutStyles.aboutSectionUnderline}></div>
          </div>
          <p style={{ color: '#78716c', fontSize: '14px', fontWeight: '300', lineHeight: '1.7', marginBottom: '2rem' }}>
            The tools and technologies I work with across design, development, and quality assurance.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {Object.entries(technicalSkills).map(([category, skills], index) => {
              const { icon, bg, color } = technicalSkillIcons[category] || {};
              return (
                <div key={index} style={{ background: 'white', border: '1px solid rgba(214,211,209,0.5)', borderRadius: '12px', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: bg, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500', color: '#78716c', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {skills.map((skill, i) => (
                      <span key={i} style={{ fontSize: '12px', color: '#78716c', background: '#f7f6f4', border: '1px solid rgba(214,211,209,0.5)', borderRadius: '999px', padding: '3px 10px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page: Creative Works ──────────────────────────────────────────────────────

function CreativePage({ navigate }) {
  return (
    <section style={{ paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: '#faf9f7' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Back */}
        <button
          onClick={() => navigate('home')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '6px',
            color: '#78716c', fontSize: '14px', fontWeight: '500',
            padding: '6px 0', marginBottom: '1.5rem', transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#92400e'}
          onMouseLeave={e => e.currentTarget.style.color = '#78716c'}
        >
          ← Back to Home
        </button>

        {/* Page Title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '300', color: '#1c1917', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
            Creative Works
          </h2>
          <div style={{ width: '3.5rem', height: '2px', background: 'linear-gradient(to right, #f59e0b, #34d399)', borderRadius: '999px', marginBottom: '1rem' }}></div>
        </div>

                {/* ── Sections 2 & 3: Internship Work + Tools Used ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'start' }}>

          {/* Internship Work */}
          <div>
            <SectionHeader title="Internship Work" />
            <p style={{ color: '#78716c', fontSize: '13px', fontWeight: '300', lineHeight: '1.7', marginBottom: '1rem' }}>
              Selected video outputs and edited content published and produced during my internship, stored on Google Drive.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {internshipEdits.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'white', border: '1px solid rgba(214,211,209,0.5)',
                    borderRadius: '10px', padding: '16px', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1c1917', marginBottom: '2px' }}>{item.title}</div>
                    <p style={{ fontSize: '11px', color: '#78716c', fontWeight: '300', margin: 0, lineHeight: '1.5' }}>{item.description}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: '500', color: item.color, flexShrink: 0 }}>
                    Open in Drive <ArrowRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div>
            <SectionHeader title="Tools Used" />
            <p style={{ color: '#78716c', fontSize: '13px', fontWeight: '300', lineHeight: '1.7', marginBottom: '1rem' }}>
              Creative software I use for video editing, motion design, and visual production.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { emoji: '🎨', name: 'Canva',               bg: '#e0f2fe'},
                { emoji: '✂️', name: 'CapCut',              bg: '#f3e8ff'},
                { emoji: '🎬', name: 'DaVinci Resolve',     bg: '#fef3c7'},
                { emoji: '⚡', name: 'After Effects',       bg: '#fee2e2'},
              ].map((tool, index) => (
                <div key={index} style={{
                  background: 'white', border: '1px solid rgba(214,211,209,0.5)',
                  borderRadius: '10px', padding: '14px',
                  display: 'flex', flexDirection: 'column', gap: '8px'
                }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: tool.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '16px' }}>{tool.emoji}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#1c1917', marginBottom: '2px' }}>{tool.name}</div>
                    <p style={{ fontSize: '11px', color: '#78716c', fontWeight: '300', lineHeight: '1.4', margin: 0 }}>{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Section 1: Social Media ── */}
        <div style={{ marginBottom: '3rem' }}>
          <SectionHeader title="Social Media" />
          <p style={{ color: '#78716c', fontSize: '13px', fontWeight: '300', lineHeight: '1.7', marginBottom: '1.25rem' }}>
            Find my personal content and creative edits across these platforms.
          </p>

          {/* Embeds row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
            {/* TikTok embed */}
            <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
              <iframe
                src="https://www.tiktok.com/embed/7597125165817908496"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
                allow="autoplay; encrypted-media"
                title="TikTok video"
              />
            </div>
            {/* YouTube embed */}
            <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '10px', overflow: 'hidden', background: '#000' }}>
              <iframe
                src="https://www.youtube.com/embed/6HUgc77P-Ec"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
                allow="autoplay; encrypted-media"
                title="YouTube video"
              />
            </div>
          </div>

          {/* Link cards row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* TikTok card */}
            <a
              href="https://www.tiktok.com/@farmigascreams"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white', border: '1px solid rgba(214,211,209,0.5)',
                borderRadius: '10px', padding: '16px', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f3e8ff', color: '#6b21a8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1c1917' }}>TikTok</div>
                <div style={{ fontSize: '12px', color: '#6b21a8', fontWeight: '500' }}>@farmigascreams</div>
              </div>
              <ArrowRight size={14} style={{ color: '#6b21a8', flexShrink: 0, marginLeft: 'auto' }} />
            </a>

            {/* YouTube card */}
            <a
              href="https://www.youtube.com/@farmigascreams"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white', border: '1px solid rgba(214,211,209,0.5)',
                borderRadius: '10px', padding: '16px', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fee2e2', color: '#991b1b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ExternalLink size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1c1917' }}>YouTube</div>
                <div style={{ fontSize: '12px', color: '#991b1b', fontWeight: '500' }}>@farmigascreams</div>
              </div>
              <ArrowRight size={14} style={{ color: '#991b1b', flexShrink: 0, marginLeft: 'auto' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── App Root ──────────────────────────────────────────────────────────────────

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-bg-primary relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/15 to-orange-200/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-stone-300/15 to-neutral-300/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-warm-gray-200/15 to-stone-200/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <Nav currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'projects' && <ProjectsPage navigate={navigate} />}
        {currentPage === 'creative' && <CreativePage navigate={navigate} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;