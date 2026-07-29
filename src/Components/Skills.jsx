import { FaLaptopCode, FaGlobe, FaTools } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const iconMap = { FaLaptopCode, FaGlobe, FaTools };

const Skills = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 bg-theme-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="My" highlight="Skills" subtitle="Technologies & tools I work with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={index}
                className="bg-theme-card p-7 rounded-2xl border border-theme hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] mb-3 flex items-center gap-2">
                  <Icon /> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-theme-primary rounded-full text-sm text-theme-secondary border border-[rgba(108,99,255,0.08)] dark:border-[rgba(108,99,255,0.08)] light:border-[rgba(108,99,255,0.06)] blue:border-[rgba(59,130,246,0.08)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] hover:text-theme-primary hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;