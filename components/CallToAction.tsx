
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-teal-700 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Sacred Journey?</h2>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
          Join thousands of learners and start your path towards a deeper understanding of the Quran today.
        </p>
        <button className="bg-white text-teal-700 font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
