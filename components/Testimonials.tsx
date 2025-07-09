
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-slate-200">
        <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover shadow-md" />
        <blockquote className="text-gray-600 italic mb-6 text-lg relative">
            <span className="absolute -top-4 -left-4 text-6xl text-indigo-100 font-serif">“</span>
            {quote}
        </blockquote>
        <div className="mt-auto pt-4 border-t border-slate-200 w-full">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "I never thought I could learn grammar this easily. Seeing the concepts animated made everything click instantly. This is a game-changer.",
            name: 'Fatima Ahmed',
            role: 'Visual Learner',
            avatarUrl: 'https://picsum.photos/200/200?image=1027',
        },
        {
            quote: "The quality of the videos and e-books is phenomenal. It feels less like studying and more like watching a documentary. Truly world-class.",
            name: 'Yusuf Khan',
            role: 'Design Enthusiast',
            avatarUrl: 'https://picsum.photos/200/200?image=1005',
        },
        {
            quote: "As someone who struggled with traditional textbooks, this visual approach was a blessing. I'm finally confident in my understanding of Arabic.",
            name: 'Aisha Williams',
            role: 'Lifelong Student',
            avatarUrl: 'https://picsum.photos/200/200?image=823',
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Don't Just Take Our Word For It</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        See how our unique visual method has transformed the learning journey for students worldwide.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
