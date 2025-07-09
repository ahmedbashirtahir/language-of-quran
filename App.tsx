import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyVisual from './components/WhyVisual';
import CourseShowcase from './components/CourseShowcase';
import AboutInstructor from './components/AboutInstructor';
import Testimonials from './components/Testimonials';
import FreeResources from './components/FreeResources';
import Enrollment from './components/Enrollment';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <WhyVisual />
        <CourseShowcase />
        <AboutInstructor />
        <Testimonials />
        <FreeResources />
        <Enrollment />
      </main>
      <Footer />
    </div>
  );
};

export default App;
