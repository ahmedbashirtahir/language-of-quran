
import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import GrammarIcon from './icons/GrammarIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border-t-4 border-teal-500">
    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-teal-100 text-teal-600 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <BookOpenIcon className="h-8 w-8" />,
      title: 'Interactive Lessons',
      description: 'Engage with lessons designed to build your understanding of Quranic Arabic from the ground up, one step at a time.',
    },
    {
      icon: <ChatBubbleIcon className="h-8 w-8" />,
      title: 'Rich Vocabulary',
      description: 'Master essential Quranic vocabulary through spaced repetition and contextual examples from the holy text itself.',
    },
    {
      icon: <GrammarIcon className="h-8 w-8" />,
      title: 'Simplified Grammar',
      description: 'Demystify complex grammar rules with our clear, concise explanations and interactive exercises tailored for beginners.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Learn With Us?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a structured path to connect with the Quran on a deeper, more meaningful level.
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

export default Features;
