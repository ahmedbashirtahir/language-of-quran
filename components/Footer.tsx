
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-800">Visual Arabic</p>
            <p className="text-sm text-gray-600">The beautiful way to learn Classical Arabic.</p>
          </div>
          <div className="text-sm text-gray-600 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Visual Arabic. All Rights Reserved.</p>
              <p>
                  <a href="#" className="hover:text-indigo-600">Privacy Policy</a> &middot; <a href="#" className="hover:text-indigo-600">Terms of Service</a>
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
