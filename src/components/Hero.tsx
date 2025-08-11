import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { BrainModel } from './BrainModel';
import { ChevronDown, Link } from 'lucide-react';

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative neural-bg">
      <div className="absolute inset-0 md:hidden opacity-20 z-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <BrainModel />
          </Suspense>
        </Canvas>
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center mx-4 relative z-10">
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-orbitron font-bold">
              <p className="text-white text-[35px] md:text-4xl lg:text-5xl">Frontend</p>
              <p className="gradient-text text-[35px] md:text-4xl lg:text-5xl">Developer</p>
            </h1>
            <p className="text-sm md:text-md lg:text-lg text-gray-300 max-w-lg">
              Crafting immersive digital experiences with cutting-edge technologies
              and innovative design patterns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href='#projects' className="px-8 py-3  bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1r_x-9XhqMHehydH4WWNPLSWWwdVTNQKK/view?usp=drive_link', '_blank')}
              className="px-8 py-3  border border-gray-600 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Download CV
            </button>
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <div className="text-sm md:text-md lg:text-lg text-center">
              <span className="text-neon-blue font-semibold ">3+</span>
              <br />Years Experience
            </div>
            <div className="text-sm md:text-md lg:text-lg text-center ">
              <span className="text-neon-blue font-semibold">4+</span>
              <br />Projects Completed
            </div>
            <div className="text-sm md:text-md lg:text-lg text-center ">
              <span className="text-neon-blue font-semibold">20+</span>
              <br />Technologies Mastered
            </div>
          </div>
        </div>

        <div className="hidden md:block h-96 lg:h-[500px] relative">
          <Canvas className="w-full h-full">
            <Suspense fallback={null}>
              <BrainModel />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300" 
          size={32} 
          onClick={scrollToNextSection}
        />
      </div>
    </section>
  );
}