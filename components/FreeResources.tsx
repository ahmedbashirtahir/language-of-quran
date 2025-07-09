
import React from 'react';

const FreeResources: React.FC = () => {
  return (
    <section id="free-resources" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-100 p-8 rounded-2xl border border-slate-200">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">See the Method in Action</h2>
            <p className="text-lg text-gray-600 mb-6">
              Download a free chapter from our upcoming e-book, "Visual Vocabulary Vol. 1". Experience firsthand how we make learning beautiful and effective.
            </p>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Link to your PDF will go here!"); }}
              className="inline-block bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Free Chapter
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop" 
              alt="A preview of a beautifully designed e-book" 
              className="rounded-lg shadow-xl w-full max-w-md transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
