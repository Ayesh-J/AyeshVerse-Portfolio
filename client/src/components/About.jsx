import { motion } from "framer-motion";

const About = () => {
  const skills = {
    Languages: ["JavaScript", "Python", "PHP", "HTML5", "CSS3"],
    Frameworks: ["React", "Node.js", "Express.js", "Laravel", "Tailwind CSS"],
    Libraries: ["Framer Motion", "Three.js", "Drei", "jQuery", "Axios"],
    "Version Control": ["Git", "GitHub", "GitLab"],
    DevOps: ["Docker", "CI/CD (GitHub Actions)", "Netlify", "Vercel"]
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-8 py-20"
    >
      {/* Background accent blur shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-300 to-purple-300 opacity-20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-gray-200 space-y-10"
      >
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Hi, I’m <span className="font-semibold text-blue-500">Ayesh Jamadar</span>, a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            I focus on building scalable, efficient, and visually engaging digital experiences with an emphasis on motion-based UI and modern interaction design. My expertise extends to RESTful API development, database architecture, and creating seamless integrations between frontend and backend systems. I take pride in writing clean, maintainable code and crafting interfaces that not only perform well but also feel alive through smooth transitions and responsive layouts.
          </p>
        </motion.div>

        {/* Tools/Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Tools & Technologies</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, list], index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100/60 backdrop-blur-md p-4 rounded-xl shadow-md border border-gray-200"
              >
                <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
