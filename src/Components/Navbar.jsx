import { useState } from 'react';
import { FaMoon, FaSun, FaWater, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themes = [
    { id: 'dark', icon: FaMoon, label: 'Dark' },
    { id: 'light', icon: FaSun, label: 'Light' },
    { id: 'blue', icon: FaWater, label: 'Blue' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const getAccentColor = () => {
    if (theme === 'blue') return '#3b82f6';
    return '#6c63ff';
  };

  const accentColor = getAccentColor();

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${accentColor}33`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="text-2xl font-bold transition-colors duration-300"
            style={{ color: accentColor }}
          >
            M<span className="text-theme-primary">A</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-theme-secondary hover:text-theme-primary font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: accentColor }}
                ></span>
              </a>
            ))}
            
            <div className="flex items-center gap-2 ml-4">
              {themes.map((t) => {
                const Icon = t.icon;
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className="p-2 rounded-full transition-all duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: isActive ? accentColor : 'var(--bg-card)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      boxShadow: isActive ? `0 0 20px ${accentColor}40` : 'none',
                    }}
                    aria-label={t.label}
                    title={t.label}
                  >
                    <Icon size={14} />
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-theme-primary hover:bg-theme-card"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-theme-secondary hover:text-theme-primary font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-theme-card"
              >
                {link.label}
              </a>
            ))}
            
            <div 
              className="flex items-center gap-2 pt-2"
              style={{ borderTop: `1px solid ${accentColor}33` }}
            >
              {themes.map((t) => {
                const Icon = t.icon;
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      toggleMenu();
                    }}
                    className="p-2 rounded-full transition-all duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: isActive ? accentColor : 'var(--bg-card)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      boxShadow: isActive ? `0 0 20px ${accentColor}40` : 'none',
                    }}
                    aria-label={t.label}
                  >
                    <Icon size={14} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;