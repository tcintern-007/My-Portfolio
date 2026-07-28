import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'DineXis',
      subtitle: 'Online Web First App',
      description: 'A comprehensive MERN stack food delivery application featuring real-time order tracking, smart variations, and a mood-based recommendation engine. Built for scale with modern React.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      links: [
        { label: 'View Code', icon: FaGithub, href: '#' },
        { label: 'Live Demo', icon: FaExternalLinkAlt, href: '#' }
      ],
    },
    {
      title: 'CartSy',
      subtitle: 'Online Shopping System',
      description: 'A robust Java-based desktop e-commerce application handling inventory management, user authentication, and secure checkout processes.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      links: [{ label: 'View Code', icon: FaGithub, href: '#' }],
    },
    {
      title: 'TileDesk',
      subtitle: 'Factory Management System',
      description: 'An industrial management system designed in Java to streamline factory operations, monitor raw materials, and track production efficiency.',
      tech: ['Java', 'OOP', 'File Handling'],
      links: [{ label: 'View Code', icon: FaGithub, href: '#' }],
    },
    {
      title: 'Bank Management System',
      subtitle: 'Core Banking Engine',
      description: 'A highly optimized terminal-based banking application built with C++ utilizing advanced data structures for secure transaction processing.',
      tech: ['C++', 'Data Structures'],
      links: [{ label: 'View Code', icon: FaGithub, href: '#' }],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Featured <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">Projects</span>
        </h2>
        <p className="text-center text-theme-secondary max-w-2xl mx-auto mb-12">
          Some of my recent work
        </p>
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-theme-card p-7 rounded-2xl border border-theme hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-theme-primary">{project.title}</h3>
              <p className="text-theme-secondary text-sm font-medium mb-3">{project.subtitle}</p>
              <p className="text-theme-secondary flex-grow mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-theme-primary rounded-full text-xs text-theme-secondary border border-[rgba(108,99,255,0.08)] dark:border-[rgba(108,99,255,0.08)] light:border-[rgba(108,99,255,0.06)] blue:border-[rgba(59,130,246,0.08)] hover:scale-105 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                {project.links.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.href}
                      className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] hover:text-[#7c73ff] dark:hover:text-[#7c73ff] light:hover:text-[#7c73ff] blue:hover:text-[#60a5fa] font-medium transition-colors inline-flex items-center gap-1 hover:translate-x-1 transform transition-transform"
                    >
                      <Icon /> {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;