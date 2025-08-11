import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding neural-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-orbitron font-bold gradient-text">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Frontend Developer with over 3 years of experience 
                crafting exceptional digital experiences. My expertise spans modern 
                web technologies, with a particular focus on React, Next.js, and 
                cutting-edge 3D web experiences.
              </p>
              <p>
                I believe in the power of clean code, innovative design, and 
                user-centered development. Every project is an opportunity to 
                push boundaries and create something extraordinary.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-neon-blue" />
                Egypt, Giza
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-neon-purple" />
                Available for Freelance
              </div>
            </div>

            <button onClick={() => window.open('https://drive.google.com/file/d/1r_x-9XhqMHehydH4WWNPLSWWwdVTNQKK/view?usp=drive_link', '_blank')} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="glass rounded-2xl p-8 neon-blue">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
              Experience Highlights
            </h3>
            <div className="space-y-6">
              
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Frontend Developer</h4>
                <p className="text-neon-purple font-medium">Mapping Solutions • 2022 - 2024</p>
                <p className="text-gray-300 text-sm mt-2">
                  Built responsive web apps with modern JavaScript frameworks
                </p>
              </div>
              
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Frontend Developer</h4>
                <p className="text-neon-blue font-medium">Digital Craft • 2021 - 2022</p>
                <p className="text-gray-300 text-sm mt-2">
                  Developed client websites and learned modern development practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}