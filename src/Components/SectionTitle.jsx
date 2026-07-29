const SectionTitle = ({ title, highlight, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-3">
      {title}{' '}
      {highlight && (
        <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && <p className="text-theme-secondary max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;