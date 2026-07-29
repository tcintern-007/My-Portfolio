import { FaPaperPlane, FaCode } from 'react-icons/fa';
import Button from './Button';
import AdeelImage from '../assets/Adeel.jpeg';

const Hero = ({ name, title, description, image }) => {
  const lines = description.split('\n');
  return (
    <section id="home" className="min-h-screen flex items-center pt-[90px] pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              {name.split(' ')[0]}{' '}
              <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">
                {name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary font-medium mb-3">{title}</p>
            <div className="text-theme-secondary max-w-lg mx-auto md:mx-0 mb-7 leading-relaxed">
              {lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href="#contact" icon={FaPaperPlane}>
                Contact Me
              </Button>
              <Button href="#projects" variant="outline" icon={FaCode}>
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#6c63ff] dark:border-[#6c63ff] light:border-[#6c63ff] blue:border-[#3b82f6] shadow-[0_0_60px_rgba(108,99,255,0.15)] dark:shadow-[0_0_60px_rgba(108,99,255,0.15)] light:shadow-[0_0_60px_rgba(108,99,255,0.15)] blue:shadow-[0_0_60px_rgba(59,130,246,0.15)] hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] dark:hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] light:hover:shadow-[0_0_80px_rgba(108,99,255,0.25)] blue:hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] transition-all duration-300 bg-theme-card">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;