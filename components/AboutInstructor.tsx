
import React from 'react';

const AboutInstructor: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Your Instructor</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm not just an Arabic teacher; I'm a visual designer and storyteller with over a decade of experience. I've spent the last 13 months pouring my heart and soul into a single mission: to create the learning resource I wish I had when I started.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My expertise in the Adobe Suite, DaVinci Resolve, and Blender 3D isn't just a bullet point—it's the engine behind this entire course. Every lesson is a piece of art, meticulously designed to make complex topics beautiful and intuitive.
            </p>
            <a href="#enroll" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              Join me on this journey &rarr;
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
              alt="A professional and friendly instructor"
              className="rounded-xl shadow-2xl w-full max-w-sm h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;
