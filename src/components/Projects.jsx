import { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../assets/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust this value for better timing
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
    <section id="projects" className="flex flex-col items-center py-16 h-full mx-auto w-full bg-custom-lt-green">
      <h1 className="text-3xl font-bold text-custom-white mb-8">My Projects</h1>
      <div className="flex space-x-4 mb-8">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${selectedCategory === 'all' ? 'bg-custom-blue text-custom-simple-white' : 'bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All 
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${selectedCategory === 'frontend' ? 'bg-custom-blue text-custom-simple-white' : 'bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white'}`}
          onClick={() => setSelectedCategory('frontend')}
        >
          Frontend 
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${selectedCategory === 'fullstack' ? 'bg-custom-blue text-custom-simple-white' : 'bg-custom-simple-white text-custom-blue hover:bg-custom-blue hover:text-custom-simple-white'}`}
          onClick={() => setSelectedCategory('fullstack')}
        >
          Full Stack 
        </motion.button>
      </div>
      <motion.div 
        initial="hidden"
      
        animate="show"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
           
            variants={itemVariants}
            className="p-4 bg-custom-white rounded-lg hover:shadow-2xl"
          >
            <img src={project.img} alt={`${project.title} image`} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold text-custom-blue mb-2 text-center">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 mb-2"><strong className="text-custom-blue">Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="flex justify-start items-center mt-4 gap-8">
              <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-lt-green">
                <FaGithub className="w-8 h-8" />
              </a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-lt-green">
                <FaExternalLinkAlt className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
