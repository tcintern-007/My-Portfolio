import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const iconMap = { FaGithub, FaLinkedinIn, FaEnvelope };

const Footer = ({ socials, copyright }) => {
  return (
    <footer className="text-center py-10 border-t border-theme text-theme-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-2xl text-theme-secondary hover:text-[#6c63ff] dark:hover:text-[#6c63ff] light:hover:text-[#6c63ff] blue:hover:text-[#3b82f6] hover:-translate-y-1 transition-all duration-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p>&copy; {new Date().getFullYear()} {copyright}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;