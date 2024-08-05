import { useState } from 'react';
import skillsData from '../assets/icons';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div id="skills" className="flex flex-col items-center justify-center py-16 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold text-teal-600 mb-8">My Technical Skills</h1>
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
          className={`px-4 py-2 rounded ${selectedCategory === 'backend' ? 'bg-teal-600 text-white' : 'bg-teal-200 text-teal-600'}`}
          onClick={() => setSelectedCategory('backend')}
        >
          Backend
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center justify-center p-4 bg-teal-100 rounded-lg shadow-lg">
            <img src={skill.img} alt="Skill icon" className="w-16 h-16 mb-4" />
            <p className="text-teal-600 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
