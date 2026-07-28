import { FaCertificate } from 'react-icons/fa';

const Education = () => {
  const certificates = [
    'Introduction to IoT',
    'C++ Essential 2 (OOP)',
    'C++ Advanced (Data Structures)',
    'IT Essentials',
    'SQL and Relational Databases',
    'Engaging Stakeholders',
    'Discovering Entrepreneurship',
  ];

  return (
    <section id="education" className="py-20 bg-theme-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Education &amp; <span className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]">Certificates</span>
        </h2>
        <p className="text-center text-theme-secondary max-w-2xl mx-auto mb-12">
          My academic journey and professional certifications
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-theme-card p-7 rounded-2xl border border-theme hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300">
            <h3 className="text-xl font-bold text-theme-primary">Riphah International University, Isb</h3>
            <p className="text-theme-secondary mb-2">BS Software Engineering &bull; Semester 5</p>
            <p className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] font-bold text-xl">CGPA: 3.87</p>
          </div>
          <div className="bg-theme-card p-7 rounded-2xl border border-theme hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300">
            <h3 className="text-xl font-bold text-theme-primary mb-4">Certifications</h3>
            <div className="flex flex-col gap-2">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2.5 bg-theme-primary rounded-lg border-l-4 border-[#6c63ff] dark:border-[#6c63ff] light:border-[#6c63ff] blue:border-[#3b82f6] hover:translate-x-1 transition-all duration-300"
                >
                  <span className="text-theme-secondary text-sm flex items-center gap-2">
                    <FaCertificate className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6]" /> {cert}
                  </span>
                  <a href="#" className="text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] text-sm font-medium hover:text-[#7c73ff] dark:hover:text-[#7c73ff] light:hover:text-[#7c73ff] blue:hover:text-[#60a5fa] transition-colors">
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;