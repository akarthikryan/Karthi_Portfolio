
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ProjectCard3D from './ProjectCard3D';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Organic E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include payment integration, admin dashboard, and real-time inventory management.",
      techStack: ["React", "Node.js", "MongoDB", "Bootstrap"],
      liveDemo: "https://example.com",
      github: "https://github.com/akarthikryan/Organic-Ecommerce",
      color: "#8B5CF6"
    },
    {
      title: "Bike Gear Sales",
      description: "Full-stack ecommerce solution with Node.js, Express, and MongoDB. Features include payment integration, admin dashboard, and real-time inventory management.",
      techStack: ["Node.js", "Express.js","MongoDB", "Javascript"],
      liveDemo: "https://example.com",
      github: "https://github.com/akarthikryan/BIKEGEARS",
      color: "#06B6D4"
    },
    {
      title: "Spotify-Clone",
      description: "Developed a Spotify-Clone with React, TailwindCSS, Shadecn UI . Features include user authentication, playlist creation, and song streaming.",
      techStack: ["React", "TailwindCSS", "Shadecn UI"],
      liveDemo: "https://spotify-clone-sm6o.vercel.app/",
      github: "https://github.com/akarthikryan/SpotifyClone",
      color: "#10B981"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis with D3.js charts, real-time updates, and customizable reporting features.",
      techStack: ["Vue.js", "D3.js", "FastAPI", "ClickHouse"],
      liveDemo: "https://example.com",
      github: "https://github.com/example",
      color: "#F59E0B"
    },
    {
      title: "Fitness Tracker",
      description: "Fitness tracking with workout plans, progress analytics, and social features.",
      techStack: ["React", "JavaScript", "Three.js", "Framermotion"],
      liveDemo: "https://fit-track-nine-ashen.vercel.app",
      github: "https://github.com/akarthikryan/Fit-Track",
      color: "#EF4444"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting platform built on Ethereum with smart contracts ensuring transparency and immutable vote records.",
      techStack: ["Solidity", "Web3.js", "React", "IPFS"],
      liveDemo: "https://example.com",
      github: "https://github.com/example",
      color: "#8B5CF6"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-80 relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
                {/* 3D Background */}
                <div className="absolute inset-0">
                  <Canvas camera={{ position: [0, 0, 5] }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.3} />
                      <pointLight position={[5, 5, 5]} />
                      <ProjectCard3D color={project.color} />
                    </Suspense>
                  </Canvas>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between bg-gradient-to-t from-gray-900/90 to-transparent">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-3 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-lg text-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
