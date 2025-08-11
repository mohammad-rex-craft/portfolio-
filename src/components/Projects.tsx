import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useData } from '../firebase/handleData';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: code[];
  github: string;
  demo: string;
  category: string;
}

type code = {
  color: string,
  code: string
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  let { dataList, loading, error } = useData()

  const projects: Project[] = dataList && dataList.length > 0 ? dataList.map((item: any, index: number) => ({
    id: index + 1,
    title: item.name || 'Project Title',
    description: item.description || 'Project description goes here.',
    image: item.backImg || 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tech: item.code || ['React', 'TypeScript'],
    github: item.github,
    demo: item.url || 'https://example.com',
    category: item.category || 'web'
  })) : [];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: '3d', label: '3D/WebGL' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <section id="projects" className="section-padding neural-bg">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-padding neural-bg">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-red-400">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding neural-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies,
            3D graphics, and user experience design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'glass text-gray-300 hover:text-white hover:border-blue-400'
                }`}
            >
              <Filter size={16} />
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl  overflow-hidden group hover:neon-blue transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs  bg-gray-800 text-blue-400 rounded-full border border-blue-500/30"
                    >
                      {tech?.code}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github ?
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a> :
                    <div className='flex gap-1 opacity-[0.4]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 9.6c-.6 0-1 .4-1 1c0 .4.3.7.6.8l-.3 1.4h1.3l-.3-1.4c.4-.1.6-.4.6-.8c.1-.6-.3-1-.9-1m.1-4.3c-.7 0-1.4.5-1.4 1.2V8h2.7V6.5c-.1-.7-.6-1.2-1.3-1.2M10 2L3 5v3c.1 4.4 2.9 8.3 7 9.9c4.1-1.6 6.9-5.5 7-9.9V5zm4 11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h.3V6.5C7.4 5.1 8.6 4 10 4s2.6 1.1 2.7 2.5V8h.3c.6 0 1 .4 1 1z" /></svg>
                      <span>code</span>
                    </div>
                  }
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}