import { FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, title: 'MERN Stack', desc: 'Building responsive web apps.' },
    { icon: FaDesktop, title: 'Java Desktop', desc: 'Robust system development.' },
    { icon: FaMobileAlt, title: 'Learning', desc: 'Android App Development.' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          About <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">Me</span>
        </h2>
        <p className="text-center text-theme-secondary max-w-2xl mx-auto mb-12">
          Get to know the person behind the code
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-theme-secondary text-lg leading-relaxed mb-4">
              I am a Software Engineer and MERN developer focused on building impactful digital products.
              With a strong foundation in both web and desktop application development, I bridge the gap
              between design and engineering. My passion lies in architecting systems that are not only
              scalable and efficient under the hood, but also incredibly intuitive and engaging for the end user.
            </p>
            <p className="text-theme-secondary text-lg leading-relaxed">
              Currently, I am expanding my horizons into Android App Development to deliver seamless
              cross-platform experiences. My ultimate career goal is to build my own software products
              that solve genuine problems at a global scale.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
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
          <div>{/* Empty div for spacing */}</div>
        </div>
      </div>
    </section>
  );
};

export default About;