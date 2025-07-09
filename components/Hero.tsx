
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight text-gray-900">
            Master Classical Arabic, <span className="text-indigo-600">Visually.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto mb-8">
            Stop memorizing, start understanding. Experience the world's first Arabic course designed for visual learners, brought to life with stunning graphics and animations.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#courses" className="bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Explore Courses
            </a>
             <a href="#free-resources" className="bg-slate-200 text-slate-800 font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-300 transition-all duration-300 transform hover:scale-105">
              Get a Free Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
