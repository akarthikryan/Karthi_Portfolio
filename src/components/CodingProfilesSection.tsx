
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodingProfilesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const profiles = [
    {
      platform: "LeetCode",
      username: "Karthikeyan_VR46",
      stats: "2000+ problems solved",
      rank: "Top 5%",
      link: "https://leetcode.com/u/karthi_VR46/",
      color: "#FFA116",
      icon: "🧩"
    },
    {
      platform: "GitHub",
      username: "akarthikryan",
      stats: "500+ contributions",
      rank: "100+ repositories",
      link: "https://github.com/akarthikryan",
      color: "#181717",
      icon: "🐙"
    },
    {
      platform: "HackerRank",
      username: "akarthikeyan9876",
      stats: "5-star Python",
      rank: "Gold badge",
      link: "https://www.hackerrank.com/profile/akarthikeyan9876",
      color: "#00EA64",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 relative">
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
              Coding Profiles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My competitive programming journey and open source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-6xl mb-4"
                  >
                    {profile.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {profile.platform}
                  </h3>

                  <div className="space-y-2">
                    <p className="text-gray-300 font-mono text-sm">
                      @{profile.username}
                    </p>
                    
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">{profile.stats}</p>
                      <p className="text-cyan-400 font-semibold">{profile.rank}</p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300"
                  >
                    View Profile
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
