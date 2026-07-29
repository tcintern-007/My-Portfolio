import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const iconMap = { FaGithub, FaExternalLinkAlt };

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Featured" highlight="Projects" subtitle="Some of my recent work" />
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
                  const Icon = iconMap[link.icon];
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