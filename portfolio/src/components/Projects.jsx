import { useState } from 'react';
import projectsData from '../assets/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="flex flex-col items-center py-16 h-full container mx-auto w-full max-w-[90%]">
      <h1 className="text-3xl font-bold text-teal-600 mb-8">My Projects</h1>
      <div className="flex space-x-4 mb-8">
        <button 
          className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-teal-600 text-white' : 'bg-teal-200 text-teal-600'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All 
        </button>
        <button 
          className={`px-4 py-2 rounded ${selectedCategory === 'frontend' ? 'bg-teal-600 text-white' : 'bg-teal-200 text-teal-600'}`}
          onClick={() => setSelectedCategory('frontend')}
        >
          Frontend 
        </button>
        
        <button 
          className={`px-4 py-2 rounded ${selectedCategory === 'fullstack' ? 'bg-teal-600 text-white' : 'bg-teal-200 text-teal-600'}`}
          onClick={() => setSelectedCategory('fullstack')}
        >
          Full Stack 
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 bg-white rounded-lg shadow-lg">
            <img src={project.img} alt={`${project.title} image`} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-700 mb-2"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="flex justify-center items-center gap-11">
              <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 ">
                <FaGithub className="w-8 h-8" />
               
              </a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 ">
                <FaExternalLinkAlt className="w-6 h-6" />
               
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
