import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const iconMap = { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedinIn };

const Contact = ({ contactInfo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Get In" highlight="Touch" subtitle="Have a question or want to work together? Reach out!" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-theme-card p-4 rounded-2xl border border-theme hover:translate-x-1.5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300"
                >
                  <Icon className="text-2xl text-[#6c63ff] dark:text-[#6c63ff] light:text-[#6c63ff] blue:text-[#3b82f6] w-7 text-center flex-shrink-0" />
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-theme-secondary hover:text-[#6c63ff] dark:hover:text-[#6c63ff] light:hover:text-[#6c63ff] blue:hover:text-[#3b82f6] transition-colors break-all">
                    {item.label}
                  </a>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="bg-theme-card p-8 rounded-2xl border border-theme hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] light:hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#6c63ff] dark:hover:border-[#6c63ff] light:hover:border-[#6c63ff] blue:hover:border-[#3b82f6] transition-all duration-300">
            {/* form fields unchanged */}
            <div className="mb-5">
              <label htmlFor="name" className="block font-semibold mb-1.5 text-theme-primary">Your Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required
                className="w-full px-4 py-3 rounded-lg border-2 border-[rgba(108,99,255,0.2] dark:border-[rgba(108,99,255,0.2] light:border-[rgba(108,99,255,0.12] blue:border-[rgba(59,130,246,0.2] bg-theme-primary text-theme-primary transition-all duration-300 focus:outline-none focus:border-[#6c63ff] dark:focus:border-[#6c63ff] light:focus:border-[#6c63ff] blue:focus:border-[#3b82f6] focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] dark:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] light:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] blue:focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block font-semibold mb-1.5 text-theme-primary">Your Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required
                className="w-full px-4 py-3 rounded-lg border-2 border-[rgba(108,99,255,0.2] dark:border-[rgba(108,99,255,0.2] light:border-[rgba(108,99,255,0.12] blue:border-[rgba(59,130,246,0.2] bg-theme-primary text-theme-primary transition-all duration-300 focus:outline-none focus:border-[#6c63ff] dark:focus:border-[#6c63ff] light:focus:border-[#6c63ff] blue:focus:border-[#3b82f6] focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] dark:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] light:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] blue:focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block font-semibold mb-1.5 text-theme-primary">Message <span className="text-red-500">*</span></label>
              <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required rows="5"
                className="w-full px-4 py-3 rounded-lg border-2 border-[rgba(108,99,255,0.2] dark:border-[rgba(108,99,255,0.2] light:border-[rgba(108,99,255,0.12] blue:border-[rgba(59,130,246,0.2] bg-theme-primary text-theme-primary transition-all duration-300 focus:outline-none focus:border-[#6c63ff] dark:focus:border-[#6c63ff] light:focus:border-[#6c63ff] blue:focus:border-[#3b82f6] focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] dark:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] light:focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)] blue:focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)] resize-y min-h-[140px]"
              />
            </div>
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#6c63ff] dark:bg-[#6c63ff] light:bg-[#6c63ff] blue:bg-[#3b82f6] text-white font-semibold rounded-full hover:bg-[#7c73ff] dark:hover:bg-[#7c73ff] light:hover:bg-[#7c73ff] blue:hover:bg-[#60a5fa] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#6c63ff]/25 dark:shadow-[#6c63ff]/25 light:shadow-[#6c63ff]/25 blue:shadow-[#3b82f6]/25"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;