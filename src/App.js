import React, { useState } from 'react';
import './styles.css';
import heroStyles from './components/Hero.module.css';
import projectStyles from './components/Projects.module.css';
import aboutStyles from './components/About.module.css';

// Import all images from assets folder
import profileImg from './assets/profile.png';
import logoImg from './assets/logo.png';
import campuseatsImg from './assets/campuseats.png';
import bituinImg from './assets/bituin.png';
import funImg from './assets/fun.png';
import locationImg from './assets/location.png';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Download,
  ArrowRight,
  Database,
  Cloud,
  Globe,
  Terminal,
  Layers,
  Settings,
  Lightbulb,
  Target,
  Users,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      live: "#",
      image: bituinImg,
      type: "collaborative"
    },
    {
      title: "TTPD Creative Design ✨",
      description: "A playful and experimental Figma design created purely for fun and creative expression. This passion project showcases artistic UI/UX exploration, interactive prototyping, and visual storytelling, born from inspiration and joy",
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

  const technicalSkills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
    "Frontend": ["React", "Tailwind CSS"],
    "Backend": ["Node.js", "Django", "REST APIs"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
    "QA & Testing": ["TestRail", "Testing Strategies"],
    "Tools & Others": ["Git", "Figma"]
  };

  const softSkills = [
    {
      icon: <Lightbulb size={28} />,
      name: "Creative Problem Solving",
      desc: "Innovative approaches to complex challenges with out-of-the-box thinking"
    },
    {
      icon: <Target size={28} />,
      name: "Strategic Planning",
      desc: "Long-term vision with attention to detail in project execution"
    },
    {
      icon: <Users size={28} />,
      name: "Team Collaboration",
      desc: "Strong communication in cross-functional teams"
    },
    {
      icon: <Zap size={28} />,
      name: "Adaptability",
      desc: "Quick learner who thrives in fast-paced, evolving environments"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg-primary relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/15 to-orange-200/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-stone-300/15 to-neutral-300/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-warm-gray-200/15 to-stone-200/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-lg z-50 border-b border-stone-300/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg}
                alt="KNI Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-300 px-3 py-2">Home</a>
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-300 px-3 py-2">About</a>
              <a href="#projects" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-300 px-3 py-2">Projects</a>
              <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-300 px-3 py-2">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stone-600 hover:text-stone-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-sm font-medium text-stone-600 hover:text-amber-700 py-2 transition-colors">Home</a>
                <a href="#about" className="text-sm font-medium text-stone-600 hover:text-amber-700 py-2 transition-colors">About</a>
                <a href="#projects" className="text-sm font-medium text-stone-600 hover:text-amber-700 py-2 transition-colors">Projects</a>
                <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-amber-700 py-2 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

              <div className={heroStyles.heroSubtitle}>
                ✨ UI/UX Designer | QA Tester
              </div>

              <p className={heroStyles.heroDescription}>
                A committed designer and problem-solver who thrives at the intersection of creativity and technology.
                I blend thoughtful design with technical expertise to craft user-centered digital solutions that are both functional and delightful to use.
              </p>

              <div className={heroStyles.heroStats}>
                <div className={heroStyles.heroStatItem}>
                  <div className={`${heroStyles.heroStatNumber} ${heroStyles.amber}`}>3+</div>
                  <div className={heroStyles.heroStatLabel}>Years Learning</div>
                </div>
                <div className={heroStyles.heroStatItem}>
                  <div className={`${heroStyles.heroStatNumber} ${heroStyles.teal}`}>100%</div>
                  <div className={heroStyles.heroStatLabel}>Passion Driven</div>
                </div>
              </div>

              <div className={heroStyles.heroButtons}>
                <a href="#projects" className={heroStyles.heroPrimaryButton}>
                  Explore My Work
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className={heroStyles.heroSecondaryButton}>
                  Let's Connect
                </a>
              </div>

              <div className={heroStyles.heroSocial}>
                <div className={heroStyles.heroSocialText}>Let's connect mindfully</div>
                <div className={heroStyles.heroSocialLinks}>
                  <a href="https://github.com/istroberiless" className={`${heroStyles.heroSocialLink} ${heroStyles.github}`}>
                    <Github size={18} />
                  </a>
                  <a href="#" className={`${heroStyles.heroSocialLink} ${heroStyles.linkedin}`}>
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className={`${heroStyles.heroSocialLink} ${heroStyles.email}`}>
                    <Mail size={18} />
                  </a>
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
                  <img 
                    src={profileImg}
                    alt="Kyle Niña" 
                    className={heroStyles.heroImage}
                  />
                  <div className={heroStyles.heroImageOverlay}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                An enthusiastic UI/UX Designer and QA Tester who has <span className={aboutStyles.aboutHighlight}>3+ years </span>
                of learning experience and is motivated by the high level of communication skills and teamwork spirit.
                I thrive in settings where design and technology are perfectly aligned and put my efforts in designing solutions that are purposeful and thoughtful to the actual needs of the users
              </p>
              <p className={aboutStyles.aboutDescription}>
                I combine innovative design thinking and careful quality assurance measures, where all digital touchpoints will be both beautiful and functional.
                In my opinion, innovation, usability, and technical excellence create great products when they are in the right measure.
              </p>
              <div className={aboutStyles.aboutTags}>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.mindful}`}>Mindful Creator</span>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.collaborative}`}>Thoughtful Collaborator</span>
                <span className={`${aboutStyles.aboutTag} ${aboutStyles.learner}`}>Continuous Learner</span>
              </div>
            </div>
          </div>

          <div className={aboutStyles.aboutContent}>
            <div className={aboutStyles.aboutSection}>
              <div className={aboutStyles.aboutSectionHeader}>
                <h3 className={aboutStyles.aboutSectionTitle}>Core Values</h3>
                <div className={aboutStyles.aboutSectionUnderline}></div>
              </div>

              <div className={aboutStyles.coreValues}>
                {softSkills.map((skill, index) => (
                  <div key={index} className={aboutStyles.coreValueItem}>
                    <div className={aboutStyles.coreValueIcon}>
                      {skill.icon}
                    </div>
                    <div className={aboutStyles.coreValueContent}>
                      <h4>{skill.name}</h4>
                      <p>{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={aboutStyles.languages}>
                <div className={aboutStyles.aboutSectionHeader}>
                  <h3 className={aboutStyles.aboutSectionTitle}>Languages</h3>
                  <div className={aboutStyles.aboutSectionUnderline}></div>
                </div>

                <div className={aboutStyles.languagesList}>
                  <div className={aboutStyles.languageItem}>
                    <span className={aboutStyles.languageName}>English</span>
                    <div className={aboutStyles.languageBar}>
                      <div className={`${aboutStyles.languageProgress} ${aboutStyles.english}`}></div>
                    </div>
                  </div>

                  <div className={aboutStyles.languageItem}>
                    <span className={aboutStyles.languageName}>Tagalog</span>
                    <div className={aboutStyles.languageBar}>
                      <div className={`${aboutStyles.languageProgress} ${aboutStyles.tagalog}`}></div>
                    </div>
                  </div>

                  <div className={aboutStyles.languageItem}>
                    <span className={aboutStyles.languageName}>Cebuano</span>
                    <div className={aboutStyles.languageBar}>
                      <div className={`${aboutStyles.languageProgress} ${aboutStyles.cebuano}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={aboutStyles.technicalSkills}>
              <div className={aboutStyles.aboutSectionHeader}>
                <h3 className={aboutStyles.aboutSectionTitle}>Technical Craft</h3>
                <div className={aboutStyles.aboutSectionUnderline}></div>
              </div>

              <div className={aboutStyles.technicalSkillsList}>
                {Object.entries(technicalSkills).map(([category, skills], index) => (
                  <div key={index} className={aboutStyles.technicalSkillCategory}>
                    <h4 className={aboutStyles.technicalSkillHeader}>
                      {category === "Languages" && <Terminal size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.languages}`} />}
                      {category === "Frontend" && <Code2 size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.frontend}`} />}
                      {category === "Backend" && <Database size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.backend}`} />}
                      {category === "Databases" && <Layers size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.databases}`} />}
                      {category === "QA & Testing" && <Target size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.testing}`} />}
                      {category === "Tools & Others" && <Settings size={18} className={`${aboutStyles.technicalSkillIcon} ${aboutStyles.tools}`} />}
                      {category}
                    </h4>
                    <div className={aboutStyles.technicalSkillGrid}>
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={aboutStyles.technicalSkillItem}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={projectStyles.projects}>
        <div className={projectStyles.projectsContainer}>
          <div className={projectStyles.projectsHeader}>
            <h2 className={projectStyles.projectsTitle}>Projects</h2>
            <div className={projectStyles.projectsUnderline}></div>
          </div>

          <div className={projectStyles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={`${projectStyles.projectCard} ${project.type === 'creative' ? projectStyles.special : ''}`}>
                <div className={projectStyles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={projectStyles.projectImage}
                  />
                  <div className={projectStyles.projectImageOverlay}></div>
                </div>
                <div className={projectStyles.projectContent}>
                  <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                  <p className={projectStyles.projectDescription}>{project.description}</p>

                  <div className={projectStyles.projectTechList}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={projectStyles.projectTech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={projectStyles.projectLinks}>
                    <a
                      href={project.github}
                      className={projectStyles.projectLink}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className={`${projectStyles.projectLink} ${projectStyles.primary}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/70 relative overflow-hidden" style={{ backgroundColor: '#f7f6f4' }}>
        {/* Background Pattern */}
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
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 group-hover:from-red-200 group-hover:to-red-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Mail size={20} className="text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                </div>
              </div>
              <div className="text-center">
                <span className="font-medium text-stone-800 text-xs block">Email</span>
                <span className="text-stone-600 text-xs font-light">kyle.inion@gmail.com</span>
              </div>
            </a>

            <a href="tel:+639273644928" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Smartphone size={20} className="text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                </div>
              </div>
              <div className="text-center">
                <span className="font-medium text-stone-800 text-xs block">Phone</span>
                <span className="text-stone-600 text-xs font-light">09273644928</span>
              </div>
            </a>

            <div className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Globe size={20} className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                </div>
              </div>
              <div className="text-center">
                <span className="font-medium text-stone-800 text-xs block">Location</span>
                <span className="text-stone-600 text-xs font-light">Cebu City, Philippines</span>
              </div>
            </div>

            <a href="#" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Linkedin size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
              </div>
              <div className="text-center">
                <span className="font-medium text-stone-800 text-xs block">LinkedIn</span>
                <span className="text-stone-600 text-xs font-light">Connect professionally</span>
              </div>
            </a>

            <a href="https://github.com/istroberiless" className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-stone-200 to-stone-300 group-hover:from-stone-300 group-hover:to-stone-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Github size={20} className="text-stone-600 group-hover:text-stone-700 transition-colors duration-300" />
                </div>
              </div>
              <div className="text-center">
                <span className="font-medium text-stone-800 text-xs block">GitHub</span>
                <span className="text-stone-600 text-xs font-light">View my code</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-800 text-white" style={{ backgroundColor: '#2c2926' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10">
            <div className="text-2xl font-light mb-3">
              <span className="text-amber-400">Kyle Niña</span> Inion
            </div>
            <p className="text-stone-400 font-light">Mindful Developer • Thoughtful Creator • Purpose-Driven Builder</p>
          </div>

          <div className="flex justify-center gap-6 mb-10">
            <a href="https://github.com/istroberiless" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-4 bg-stone-700 hover:bg-amber-600 rounded-2xl transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-stone-700 pt-8">
            <p className="text-stone-400 font-light">&copy; 2025 Kyle Niña Inion. Made with intention. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
