import React from 'react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'tools' },
    { name: 'Bootstrap', category: 'tools' },
    { name: 'Three.js', category: 'tools' },
    { name: 'Firebase', category: 'backend' },
    { name: 'Supabase', category: 'backend' },
    { name: 'Flutter', category: 'frontend' },
    { name: 'Git', category: 'tools' },
    { name: 'Figma', category: 'tools' },
    { name: 'jQuery', category: 'frontend' },
    { name: 'Electron', category: 'frontend' },
    { name: 'Adaptability', category: 'soft' },
    { name: 'Equipment Maintenance', category: 'soft' },
    { name: 'Technical Troubleshooting', category: 'soft' },
    { name: 'oop', category: 'soft' },
    { name: 'Rest api ', category: 'soft' },
    { name: 'Team Collaboration', category: 'soft' },
    { name: 'Web Solutions', category: 'soft' },
    { name: ' Process Improvement', category: 'soft' },
    { name: 'Multitasking Ski ls', category: 'soft' },

  ];

  const categories = {
    frontend: 'Frontend',
    
    tools: 'Tools & Others',
    soft: 'Soft Skills',
    backend: 'Backend'
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-purple-500 to-pink-500',
    tools: 'from-green-500 to-emerald-500',
    soft: 'from-orange-500 to-red-500'
  };

  return (
    <section id="skills" className="section-padding bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various technologies and frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([key, label]) => (
            <div key={key} className="glass rounded-2xl p-6 neon-blue">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-neon-blue">
                {label}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills
                  .filter(skill => skill.category === key)
                  .map((skill) => (
                    <div key={skill.name} className="bg-gray-800/50 rounded-lg p-2 md:p-3 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                      <span className="text-white font-medium text-[10px] md:text-sm group-hover:text-neon-blue transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}