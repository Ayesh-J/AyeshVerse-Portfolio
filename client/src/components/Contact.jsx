import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      info: "jamadarayesh9@gmail.com",
      link: "mailto:jamadarayesh9@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn",
      info: "linkedin.com/in/Ayesh-Jamadar",
      link: "https://www.linkedin.com/in/ayesh-jamadar-2676172a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600" />,
      title: "GitHub",
      info: "github.com/Ayesh-J",
      link: "https://github.com/Ayesh-J",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Location",
      info: "Goa, India",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m always open to networking, collaborations, or discussing new
          projects. Feel free to reach out through any of the following
          platforms.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {contactDetails.map((detail, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                {detail.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {detail.title}
              </h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {detail.info}
                </a>
              ) : (
                <p className="text-gray-600">{detail.info}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
