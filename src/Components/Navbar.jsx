import { useState } from 'react';
import { FaMoon, FaSun, FaWater, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, setTheme, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const themes = [
    { id: 'dark', icon: FaMoon, label: 'Dark' },
    { id: 'light', icon: FaSun, label: 'Light' },
    { id: 'blue', icon: FaWater, label: 'Blue' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    closeMenu();
  };

  const accentColor = theme === 'blue' ? '#3b82f6' : '#6c63ff';

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
            onClick={() => handleLinkClick('#home')}
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            M<span className="text-theme-primary">A</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-theme-secondary hover:text-theme-primary font-medium transition-colors duration-300 relative group ${
                  activeLink === link.href ? 'text-theme-primary' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ backgroundColor: accentColor }}
                ></span>
              </a>
            ))}

            {/* Theme Buttons */}
            <div className="flex items-center gap-2 ml-4">
              {themes.map((t) => {
                const Icon = t.icon;
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className="p-2 rounded-full transition-all duration-300"
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

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-theme-primary hover:bg-theme-card"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                onClick={() => handleLinkClick(link.href)}
                className={`text-theme-secondary hover:text-theme-primary font-medium px-3 py-2 rounded-lg hover:bg-theme-card ${
                  activeLink === link.href ? 'text-theme-primary bg-theme-card' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2" style={{ borderTop: `1px solid ${accentColor}33` }}>
              {themes.map((t) => {
                const Icon = t.icon;
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      closeMenu();
                    }}
                    className="p-2 rounded-full transition-all duration-300"
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