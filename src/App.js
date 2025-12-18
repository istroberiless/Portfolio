import React, { useState } from 'react';
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
      image: "/campuseats.png"
    },
    {
      title: "Bituin Destinations",
      description: "A comprehensive travel planning platform designed through collaborative teamwork to make every journey seamless and inspiring. Provides an intuitive space for travelers to explore, compare, and book unique destinations and experiences.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/ElReyDeLosGorditos/IT342-BituinDestinations",
      live: "#",
      image: "/bituin.png"
    },
    {
      title: "TTPD Creative Design ✨",
      description: "A playful and experimental Figma design created purely for fun and creative expression. This passion project showcases artistic UI/UX exploration, interactive prototyping, and visual storytelling, born from inspiration and joy",
      tech: ["Figma", "Creative Design", "Personal Project", "Artistic Expression"],
      github: "#",
      live: "https://www.figma.com/proto/ym07zHyvstXfZXbaMGeMNS/TTPD?node-id=3-2&p=f&t=04eWs0lGwvkp5DSa-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      image: "/fun.png"
    },
    {
      title: "Campus Transportation Service",
      description: "A transportation service prototype developed through collaborative teamwork providing convenient and organized campus-related transportation. Features student request management and efficient driver response systems for campus mobility solutions.",
      tech: ["Figma", "UX Research", "Prototype Design", "User Testing"],
      github: "#",
      live: "https://www.figma.com/proto/JllVgrUS42gfit94KRrj7e/HCI-Prototype?node-id=129-116&p=f&t=dlF6p2Zg6JumIJRb-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=129%3A116",
      image: "/location.png"
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
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50/40 to-sage-50/30 relative overflow-hidden" style={{backgroundColor: '#f7f5f3'}}>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/15 to-orange-200/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-stone-300/15 to-neutral-300/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-warm-gray-200/15 to-stone-200/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-lg z-50 border-b border-stone-300/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
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
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center" style={{backgroundColor: '#faf9f7'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/50 to-amber-100/30"></div>
        
        {/* Enhanced Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-1/4 text-amber-300/30 text-6xl font-mono animate-pulse" style={{animationDelay: '0s'}}>{'<>'}</div>
          <div className="absolute top-48 right-1/3 text-emerald-300/30 text-4xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{'{ }'}</div>
          <div className="absolute bottom-32 left-1/3 text-teal-300/30 text-5xl font-mono animate-pulse" style={{animationDelay: '2s'}}>{'</>'}</div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-10 text-stone-300/20 text-2xl font-mono animate-pulse" style={{animationDelay: '3s'}}>function</div>
          <div className="absolute top-1/3 right-10 text-amber-300/20 text-3xl font-mono animate-pulse" style={{animationDelay: '2.5s'}}>react</div>
          <div className="absolute bottom-1/3 right-1/4 text-emerald-300/20 text-2xl font-mono animate-pulse" style={{animationDelay: '1.5s'}}>const</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left order-2 lg:order-1">
              <div className="inline-block mb-6">
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-stone-800 mb-6 leading-tight tracking-wide">
                <span className="relative">
                  Kyle Niña Inion
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full opacity-30"></div>
                </span>
              </h1>
              
              {/* Enhanced subtitle with typing effect */}
              <div className="mb-6">
                <p className="text-xl lg:text-2xl text-amber-700 font-medium">
                  ✨ UI/UX Designer | QA Tester
                </p>
                <div className="flex items-center gap-2 mt-2">
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-stone-600 mb-8 leading-relaxed max-w-xl font-light">
                A committed designer and problem-solver who thrives at the intersection of creativity and technology. 
                I blend thoughtful design with technical expertise to craft user-centered digital solutions that are both functional and delightful to use.
              </p>
              
              {/* Stats section */}
              <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">3+</div>
                  <div className="text-sm text-stone-600 font-light">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-700">100%</div>
                  <div className="text-sm text-stone-600 font-light">Passion Driven</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#projects" className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Explore My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="#contact" className="group bg-white/80 backdrop-blur-sm border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-700 font-medium flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                  Let's Connect
                </a>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-sm text-stone-500 font-light">Let's connect mindfully</div>
                <div className="flex gap-3">
                  <a href="https://github.com/istroberiless" className="p-3 bg-stone-100 hover:bg-amber-100 hover:text-amber-700 rounded-xl transition-all duration-300 group">
                    <Github size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a href="#" className="p-3 bg-stone-100 hover:bg-blue-100 hover:text-blue-600 rounded-xl transition-all duration-300 group">
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a href="#" className="p-3 bg-stone-100 hover:bg-red-100 hover:text-red-600 rounded-xl transition-all duration-300 group">
                    <Mail size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative group">
                {/* Enhanced animated rings with more variety */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 border border-amber-200/30 rounded-full"></div>
                </div>
                <div className="absolute inset-3 animate-spin-slow-reverse">
                  <div className="w-66 h-66 lg:w-74 lg:h-74 border border-emerald-200/30 rounded-full"></div>
                </div>
                <div className="absolute inset-6 animate-spin-slow" style={{animationDuration: '15s'}}>
                  <div className="w-60 h-60 lg:w-68 lg:h-68 border-dashed border border-teal-200/30 rounded-full"></div>
                </div>
                
                <div className="w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-amber-100/60 to-emerald-100/40 rounded-3xl rotate-3 absolute group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="w-64 h-64 lg:w-72 lg:h-72 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border border-stone-200/30 group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="/profile.png" 
                    alt="Kyle Niña" 
                    className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#f5f4f2'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4 tracking-wide">About Me</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-stone-800">Hello, I'm Kyle</h3>
              <p className="text-stone-600 leading-relaxed text-lg font-light">
                An enthusiastic UI/UX Designer and QA Tester who has <span className="font-medium text-amber-700">3+ years </span>
                 of learning experience and is motivated by the high level of communication skills and teamwork spirit. 
                I thrive in settings where design and technology are perfectly aligned and put my efforts in designing solutions that are purposeful and thoughtful to the actual needs of the users
              </p>
              <p className="text-stone-600 leading-relaxed font-light">
              I combine innovative design thinking and careful quality assurance measures, where all digital touchpoints will be both beautiful and functional. 
              In my opinion, innovation, usability, and technical excellence create great products when they are in the right measure.
              </p>
              <div className="flex flex-wrap gap-3 pt-6 justify-center">
                <span className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-light border border-amber-200">Mindful Creator</span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-light border border-emerald-200">Thoughtful Collaborator</span>
                <span className="px-4 py-2 bg-teal-50 text-teal-800 rounded-full text-sm font-light border border-teal-200">Continuous Learner</span>
              </div>
            </div>
          </div>

          {/* Core Values (Left) & Technical Skills (Right) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Core Values - Left Side */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl lg:text-2xl font-light text-stone-800 mb-3 tracking-wide">Core Values</h3>
                <div className="w-12 h-0.5 bg-stone-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group flex items-start gap-4 p-5 bg-stone-50/70 rounded-2xl border border-stone-300/40 hover:shadow-md transition-all duration-500 hover:bg-stone-100/50">
                    <div className="text-stone-600 group-hover:text-amber-700 transition-colors duration-300 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-stone-800 mb-2">{skill.name}</h4>
                      <p className="text-stone-700 font-light text-sm leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages Section - Moved here */}
              <div className="mt-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl lg:text-2xl font-light text-stone-800 mb-3 tracking-wide">Languages</h3>
                  <div className="w-12 h-0.5 bg-stone-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <span className="text-base font-medium text-stone-700">English</span>
                    <div className="w-3/4 bg-stone-200/70 rounded-full h-4">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-4 rounded-full transition-all duration-2000 ease-out" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <span className="text-base font-medium text-stone-700">Tagalog</span>
                    <div className="w-3/4 bg-stone-200/70 rounded-full h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-4 rounded-full transition-all duration-2000 ease-out" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <span className="text-base font-medium text-stone-700">Cebuano</span>
                    <div className="w-3/4 bg-stone-200/70 rounded-full h-4">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-4 rounded-full transition-all duration-2000 ease-out" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills - Right Side */}
            <div className="bg-stone-50/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-300/40">
              <div className="text-center mb-8">
                <h3 className="text-xl lg:text-2xl font-light text-stone-800 mb-3 tracking-wide">Technical Craft</h3>
                <div className="w-12 h-0.5 bg-stone-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills], index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-base lg:text-lg font-medium text-stone-800 flex items-center gap-2 border-b border-stone-300/40 pb-2">
                      {category === "Languages" && <Terminal size={18} className="text-amber-700" />}
                      {category === "Frontend" && <Code2 size={18} className="text-emerald-700" />}
                      {category === "Backend" && <Database size={18} className="text-teal-700" />}
                      {category === "Databases" && <Layers size={18} className="text-stone-700" />}
                      {category === "QA & Testing" && <Target size={18} className="text-blue-700" />}
                      {category === "Project Management" && <Users size={18} className="text-purple-700" />}
                      {category === "Tools & Others" && <Settings size={18} className="text-amber-700" />}
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2.5 py-1.5 bg-stone-100/80 text-stone-800 text-xs font-light rounded-lg border border-stone-300/50 hover:bg-amber-100/80 hover:text-amber-900 hover:border-amber-300/60 transition-all duration-300 text-center"
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/60" style={{backgroundColor: '#f0eeec'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4 tracking-wide">Projects</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-stone-50/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-300/40">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-stone-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">{project.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed font-light">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-stone-100/70 text-stone-700 text-sm font-light rounded-xl hover:bg-amber-100 hover:text-amber-800 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors font-medium px-4 py-2 border border-stone-200 rounded-xl hover:border-stone-300 duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center gap-2 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-medium px-4 py-2 rounded-xl duration-300"
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/70 relative overflow-hidden" style={{backgroundColor: '#f7f6f4'}}>
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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-800 text-white" style={{backgroundColor: '#2c2926'}}>
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

export default App;
