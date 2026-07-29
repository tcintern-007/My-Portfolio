const Button = ({ children, variant = 'primary', href, icon: Icon, className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1';
  const variants = {
    primary: 'bg-[#6c63ff] dark:bg-[#6c63ff] light:bg-[#6c63ff] blue:bg-[#3b82f6] text-white shadow-lg shadow-[#6c63ff]/25 hover:bg-[#7c73ff] dark:hover:bg-[#7c73ff] light:hover:bg-[#7c73ff] blue:hover:bg-[#60a5fa]',
    outline: 'bg-transparent border-2 border-[#6c63ff] dark:border-[#6c63ff] light:border-[#6c63ff] blue:border-[#3b82f6] text-theme-primary hover:bg-[#6c63ff] dark:hover:bg-[#6c63ff] light:hover:bg-[#6c63ff] blue:hover:bg-[#3b82f6] hover:text-white',
  };
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {Icon && <Icon />}
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;