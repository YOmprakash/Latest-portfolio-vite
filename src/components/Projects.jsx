import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../assets/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full h-full py-16 mx-auto bg-custom-lt-green"
    >
      <h1 className="mb-8 text-3xl font-bold text-custom-white">My Projects</h1>
      <div className="flex mb-8 space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            selectedCategory === "all"
              ? "bg-custom-blue text-custom-simple-white"
              : "bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            selectedCategory === "frontend"
              ? "bg-custom-blue text-custom-simple-white"
              : "bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white"
          }`}
          onClick={() => setSelectedCategory("frontend")}
        >
          Frontend
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            selectedCategory === "fullstack"
              ? "bg-custom-blue text-custom-simple-white"
              : "bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white"
          }`}
          onClick={() => setSelectedCategory("fullstack")}
        >
          Full Stack
        </motion.button>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 mx-6 sm:grid-cols-2 md:grid-cols-3 md:mx-12"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col p-4 overflow-hidden rounded-lg bg-custom-white hover:shadow-2xl "
          >
            <img
              src={project.img}
              alt={`${project.title} image`}
              className="block object-cover w-full rounded-lg h-42"
            />
            <div className="flex flex-col flex-grow p-4">
              <h2 className="mb-2 text-xl font-bold text-center text-custom-blue">
                {project.title}
              </h2>
              <p className="flex-grow mb-4 text-gray-600">
                {project.description}
              </p>
              <p className="text-gray-500 ">
                <strong className="text-custom-blue">Tech Stack:</strong>
                {project.techStack.join(", ")}
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 my-2 md:justify-between">
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-custom-lt-green bg-custom-blue hover:text-custom-blue hover:bg-custom-green"
              >
                <FaGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-custom-lt-green bg-custom-blue hover:text-custom-blue hover:bg-custom-green"
              >
                <FaExternalLinkAlt className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
