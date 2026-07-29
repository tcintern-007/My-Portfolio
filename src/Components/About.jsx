import { FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

// Icon mapping
const iconMap = {
  FaCode,
  FaDesktop,
  FaMobileAlt,
};

const About = ({ descriptionParagraphs, stats }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="About" highlight="Me" subtitle="Get to know the person behind the code" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {descriptionParagraphs.map((paragraph, i) => (
              <p key={i} className="text-theme-secondary text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div
                    key={index}
                    className="bg-theme-card p-5 rounded-2xl border border-theme text-center hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300"
                  >
                    <Icon className="text-3xl text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] mb-2 mx-auto" />
                    <h4 className="font-semibold text-theme-primary">{stat.title}</h4>
                    <p className="text-sm text-theme-secondary">{stat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>{/* empty for layout */}</div>
        </div>
      </div>
    </section>
  );
};

export default About;