import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karthikeyan-a-281310296",
      icon: "💼",
      color: "#0077B5"
    },
    {
      name: "GitHub",
      url: "https://github.com/akarthikryan",
      icon: "🐙",
      color: "#181717"
    },
    {
      name: "Email",
      url: "karthikeyanprof2001@gmail.com",
      icon: "📧",
      color: "#EA4335"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
          >
            {/* Get in touch card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 flex-1">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">karthikeyanprof2001@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Chennai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    🕒
                  </div> */}
                  {/* <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Follow me card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 flex-1">
              <h3 className="text-2xl font-bold mb-6 text-white">Follow me</h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: link.color + "33" }} // ~20% opacity
                    >
                      <span className="text-xl">{link.icon}</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{link.name}</p>
                      <a
                        href={
                          link.name === "Email"
                            ? `mailto:${link.url}`
                            : link.url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:underline"
                      >
                        {link.name === "Email" ? link.url : `Visit ${link.name}`}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
