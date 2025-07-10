import React from 'react';

const Enrollment: React.FC = () => {
  return (
    <section id="enroll" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-indigo-600 rounded-xl shadow-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500 rounded-full opacity-50"></div>
          <div className="absolute -bottom-12 -right-8 w-32 h-32 bg-indigo-500 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">Be the First to Know</h2>
            <p className="text-lg text-indigo-200 mt-4 max-w-xl mx-auto">
              Our first courses are launching soon. Join the waitlist to get exclusive early access, special discounts, and updates.
            </p>
            {/* IMPORTANT: Replace YOUR_EMAIL@example.com with your actual email address. */}
            <form action="https://formsubmit.co/ahmedbashirtahir@gmail.com" method="POST" className="mt-8 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email Address"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 border border-indigo-400 bg-indigo-500/50 text-white placeholder-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-shadow"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-indigo-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                </button>
              </div>
              {/* This hidden field helps prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* This hidden field sets the subject of the email you receive */}
              <input type="hidden" name="_subject" value="New Waitlist Signup! - Visual Arabic Course" />
              <p className="text-sm mt-4 text-indigo-300">We respect your privacy. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
