
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ArticlesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const articles = [
    {
      title: "Building Scalable React Applications with Modern Architecture",
      description: "Learn how to structure large React applications using advanced patterns, state management solutions, and performance optimization techniques.",
      link: "https://medium.com/example",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Performance"]
    },
    {
      title: "The Future of Web Development: AI and Machine Learning Integration",
      description: "Exploring how AI and ML are transforming web development, from intelligent code completion to automated testing and user experience personalization.",
      link: "https://dev.to/example",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["AI", "ML", "Web Development"]
    },
    {
      title: "Mastering Three.js: Creating Immersive 3D Web Experiences",
      description: "A comprehensive guide to building interactive 3D experiences on the web using Three.js, covering everything from basics to advanced techniques.",
      link: "https://blog.example.com",
      date: "February 10, 2024",
      readTime: "15 min read",
      tags: ["Three.js", "3D", "WebGL"]
    },
    {
      title: "Optimizing Node.js Performance for High-Traffic Applications",
      description: "Best practices for scaling Node.js applications, including clustering, caching strategies, and database optimization techniques.",
      link: "https://hashnode.com/example",
      date: "January 22, 2024",
      readTime: "10 min read",
      tags: ["Node.js", "Performance", "Scaling"]
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
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
              Featured Articles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights and tutorials from my journey in web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
