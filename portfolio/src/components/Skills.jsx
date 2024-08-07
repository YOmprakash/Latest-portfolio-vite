import { useState } from 'react';
import skillsData from '../assets/icons';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div id="skills" className="flex flex-col items-center justify-center w-full  h-full py-8 md:h-screen bg-custom-blue">
      <h1 className="text-4xl font-bold mb-12 text-custom-green">My Technical Skills</h1>
      <div className="flex space-x-4 mb-12">
        <button
          className={`px-4 py-2 rounded transition-all duration-300 ${selectedCategory === 'all' ? 'bg-custom-green text-custom-white' : 'bg-custom-blue text-custom-green hover:text-custom-blue hover:bg-custom-lt-green'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded transition-all duration-300 ${selectedCategory === 'frontend' ? 'bg-custom-green text-custom-white' : 'bg-custom-blue text-custom-green hover:text-custom-blue hover:bg-custom-lt-green'}`}
          onClick={() => setSelectedCategory('frontend')}
        >
          Frontend
        </button>
        <button
          className={`px-4 py-2 rounded transition-all duration-300 ${selectedCategory === 'backend' ? 'bg-custom-green text-custom-white' : 'bg-custom-blue text-custom-green hover:text-custom-blue hover:bg-custom-lt-green'}`}
          onClick={() => setSelectedCategory('backend')}
        >
          Backend
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-custom-white">
            <img src={skill.img} alt={`${skill.name} icon`} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold text-custom-blue">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
