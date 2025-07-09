
import React from 'react';

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const UrduTafseer: React.FC = () => {
    const features = [
        {
            title: 'Multiple Translations',
            description: 'Access various Urdu translations to compare and gain a comprehensive understanding.',
        },
        {
            title: 'Detailed Tafaseer',
            description: 'Study celebrated commentaries from esteemed scholars like Ibn Kathir, Maariful Quran, and more.',
        },
        {
            title: 'Word-by-Word Analysis',
            description: 'Connect the original Arabic text with its Urdu equivalent for granular study.',
        },
        {
            title: 'Audio Recitations with Translation',
            description: 'Listen to translations alongside the beautiful recitation of the Arabic verses.',
        },
    ];

  return (
    <section id="tafseer" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore Urdu Translations & Tafaseer</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Dive deeper into the meanings of the Quran with renowned Urdu commentaries and translations, making profound wisdom accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">What We Offer</h3>
            <ul className="space-y-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                           <CheckCircleIcon className="h-6 w-6 text-teal-500" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1599599810624-94e8a8b03144?q=80&w=1887&auto=format&fit=crop"
              alt="An open Quran"
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrduTafseer;
