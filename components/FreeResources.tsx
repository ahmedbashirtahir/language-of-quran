import React from 'react';

const FreeResources: React.FC = () => {
  return (
    <section id="free-resources" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-100 p-8 rounded-2xl border border-slate-200">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">See the Method in Action</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get notified when the free chapter from our upcoming e-book, "Visual Vocabulary Vol. 1" is available. Experience firsthand how we make learning beautiful and effective.
            </p>
            {/* IMPORTANT: Replace YOUR_EMAIL@example.com with your actual email address. */}
            <form action="https://formsubmit.co/ahmedbashirtahir@gmail.com" method="POST" className="w-full">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  aria-label="Email Address for free chapter"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 border border-slate-300 bg-white text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              {/* This hidden field helps prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* This hidden field sets the subject of the email you receive */}
              <input type="hidden" name="_subject" value="Free Chapter Request! - Visual Arabic Course" />
            </form>
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
