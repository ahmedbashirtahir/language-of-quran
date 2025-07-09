
import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, level, imageUrl }) => {
    const levelColor = {
        Beginner: 'bg-green-100 text-green-800',
        Intermediate: 'bg-blue-100 text-blue-800',
        Advanced: 'bg-purple-100 text-purple-800',
    };
    return (
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-slate-200">
            <img src={imageUrl} alt={`Cover for ${title}`} className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${levelColor[level]}`}>{level}</span>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow mb-4">{description}</p>
                <a href="#enroll" className="mt-4 bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors duration-300 self-start">
                    Get Notified
                </a>
            </div>
        </article>
    );
};


const CourseShowcase: React.FC = () => {
    const courses = [
        {
            title: "Arabic Foundations: The Visual Way",
            description: "Learn the alphabet, basic vocabulary, and sentence structure through our engaging, animation-first approach. No prior experience needed.",
            level: 'Beginner' as const,
            imageUrl: "https://images.unsplash.com/photo-1541829076-2489e5d434d2?q=80&w=1770&auto=format&fit=crop"
        },
        {
            title: "Quranic Grammar Unlocked",
            description: "Visually deconstruct the complex grammar of the Quran. Understand Nahw and Sarf like never before with interactive 3D models and graphics.",
            level: 'Intermediate' as const,
            imageUrl: "https://images.unsplash.com/photo-1598587184283-e02b3f463655?q=80&w=1770&auto=format&fit=crop"
        },
        {
            title: "Advanced Eloquence & Balagha",
            description: "Explore the literary beauty and rhetoric of the Quran. This course uses visual storytelling to break down advanced concepts of Balagha.",
            level: 'Advanced' as const,
            imageUrl: "https://images.unsplash.com/photo-1581454687663-57167727a20a?q=80&w=1770&auto=format&fit=crop"
        },
    ];
    return (
        <section id="courses" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Upcoming Courses</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Meticulously crafted to be the most beautiful and effective Arabic courses in the world.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseShowcase;
