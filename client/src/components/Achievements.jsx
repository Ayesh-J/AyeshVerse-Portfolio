import { motion } from "framer-motion";
import { Award, Code, Users, Rocket } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Runner-Up — Technothon 2025",
    description:
      "Secured 2nd place in a 24-hour hackathon at Govt. College of Arts, Commerce & Science, Khandola. Built a full-stack web app under tight deadlines.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Production-Level Internship Project",
    description:
      "Developed 'CyberGenie', a production-ready project during my Full-Stack Development internship at Infipre IT Services Pvt. Ltd.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Lead — ByteForce Team",
    description:
      "Team lead for multiple inter-college hackathons and tech events, coordinating frontend & backend development.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "IGNITE 2.0 Event Coordinator",
    description:
      "Organized multiple tech events including CodeClash and Hackathons at Goa Multi-Faculty College under IGNITE Tech Week.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Milestones
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
