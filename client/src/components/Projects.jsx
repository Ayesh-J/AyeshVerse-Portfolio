import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-6 py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-gray-800"
      >
       Project
      </motion.h2>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
        className="relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden max-w-2xl w-full"
      >
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Cybergenie
          </h3>
          <p className="text-gray-700 mb-6">
            A cybersafety awareness platform with interactive modules and campaigns for online safety.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">React</span>
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">Node.js</span>
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">Express</span>
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm">MySQL</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="https://cyber-genie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white shadow-sm transition"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ayesh-J/CyberGenie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
