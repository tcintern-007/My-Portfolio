import { FaPaperPlane, FaCode } from 'react-icons/fa';
import AdeelImage from '../assets/Adeel.jpeg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-[90px] pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              Muhammad <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">Adeel</span>
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary font-medium mb-3">
              Full Stack MERN &amp; Java Developer
            </p>
            <p className="text-theme-secondary max-w-lg mx-auto md:mx-0 mb-7 leading-relaxed">
              I build modern, scalable, and user-focused applications.<br />
              Transforming complex problems into elegant, highly usable software products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#6c63ff] dark:bg-[#6c63ff] light:bg-[#6c63ff] blue:bg-[#3b82f6] text-white font-semibold rounded-full hover:bg-[#7c73ff] dark:hover:bg-[#7c73ff] light:hover:bg-[#7c73ff] blue:hover:bg-[#60a5fa] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#6c63ff]/25 dark:shadow-[#6c63ff]/25 light:shadow-[#6c63ff]/25 blue:shadow-[#3b82f6]/25"
              >
                <FaPaperPlane /> Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#6c63ff] dark:border-[#6c63ff] light:border-[#6c63ff] blue:border-[#3b82f6] text-theme-primary font-semibold rounded-full hover:bg-[#6c63ff] dark:hover:bg-[#6c63ff] light:hover:bg-[#6c63ff] blue:hover:bg-[#3b82f6] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaCode /> View Projects
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#6c63ff] dark:border-[#6c63ff] light:border-[#6c63ff] blue:border-[#3b82f6] shadow-[0_0_60px_rgba(108,99,255,0.15)] dark:shadow-[0_0_60px_rgba(108,99,255,0.15)] light:shadow-[0_0_60px_rgba(108,99,255,0.15)] blue:shadow-[0_0_60px_rgba(59,130,246,0.15)] hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] dark:hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] light:hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] blue:hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] transition-all duration-300 bg-theme-card">
              <img
                src={AdeelImage}
                alt="Muhammad Adeel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;