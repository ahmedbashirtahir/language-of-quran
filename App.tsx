import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WhyVisual from './components/WhyVisual.tsx';
import CourseShowcase from './components/CourseShowcase.tsx';
import AboutInstructor from './components/AboutInstructor.tsx';
import Testimonials from './components/Testimonials.tsx';
import FreeResources from './components/FreeResources.tsx';
import Enrollment from './components/Enrollment.tsx';
import Footer from './components/Footer.tsx';

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
