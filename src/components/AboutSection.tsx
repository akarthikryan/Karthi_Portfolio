import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Karthikeyan_2_leaf.pdf'; // now this will work
  link.download = 'Karthikeyan_2_leaf.pdf'; // what the user sees
  link.click();
};

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer, building scalable web applications and solving complex problems.
                I love working with modern technologies and creating user-centric solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across React, Node.js, Python, and cloud technologies.
                I'm always eager to learn new technologies and take on challenging projects
                that push the boundaries of what's possible.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-gray-300">2+ years of professional experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-gray-300">10+ projects completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span className="text-gray-300">Agile development methodologies</span>
                </div>
              </div>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Download Resume
              </motion.button>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
              <div className="w-80 h-80 mx-auto relative rounded-full p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="/karthi pic2.jpg"
                    alt="Karthikeyan"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
