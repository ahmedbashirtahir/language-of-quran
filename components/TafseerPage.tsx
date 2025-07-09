
import React, { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanityClient';

interface Tafseer {
    _id: string;
    title: string;
    author: string;
    description: string;
    coverUrl: string;
}

interface TafseerCardProps {
    title: string;
    author: string;
    description: string;
    coverUrl: string;
}

const TafseerCard: React.FC<TafseerCardProps> = ({ title, author, description, coverUrl }) => (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col" aria-labelledby={`tafsir-title-${title.replace(/\s+/g, '-')}`}>
        <img src={coverUrl} alt={`Cover for ${title}`} className="h-48 w-full object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 id={`tafsir-title-${title.replace(/\s+/g, '-')}`} className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">By {author}</p>
            <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
            <button className="mt-6 bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-200 transition-colors duration-300 self-start">
                Read More
            </button>
        </div>
    </article>
);

const TafseerPage: React.FC = () => {
    const [tafaseerData, setTafaseerData] = useState<Tafseer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTafaseer = async () => {
            setIsLoading(true);
            try {
                // This is a GROQ query to fetch all documents of type 'tafseer'
                const query = '*[_type == "tafseer"]{_id, title, author, description, coverUrl}';
                const data = await sanityClient.fetch<Tafseer[]>(query);
                setTafaseerData(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch data from Sanity:", err);
                setError("Failed to load Tafaseer. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchTafaseer();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <section className="bg-teal-700 text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Urdu Translations & Tafaseer</h1>
                    <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
                        Explore the depths of the Quranic message with our curated collection of celebrated commentaries and translations.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-6">
                    {isLoading && <p className="text-center text-lg text-gray-600">Loading Tafaseer...</p>}
                    {error && <p className="text-center text-lg text-red-500">{error}</p>}
                    {!isLoading && !error && (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {tafaseerData.map((tafsir) => (
                                <TafseerCard key={tafsir._id} {...tafsir} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default TafseerPage;
