
import React from 'react';

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
);
const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const GrammarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border-t-4 border-indigo-500">
    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-indigo-100 text-indigo-600 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

const WhyVisual: React.FC = () => {
  const featuresData = [
    {
      icon: <BrainIcon />,
      title: 'Learn Faster, Retain More',
      description: 'Your brain processes visuals 60,000x faster than text. Our method is scientifically designed for deeper, long-term learning.',
    },
    {
      icon: <VideoIcon />,
      title: 'Engaging Video Lessons',
      description: 'Master concepts with beautiful motion graphics and animations from a DaVinci Resolve & Blender 3D expert.',
    },
    {
      icon: <GrammarIcon />,
      title: 'Complex Grammar Simplified',
      description: 'Finally understand difficult grammar rules as we break them down into simple, animated concepts that just make sense.',
    },
  ];

  return (
    <section id="why-visual" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Radically Better Way to Learn Arabic</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Traditional methods are slow and boring. We leverage the power of visual learning to make your journey effective and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisual;
