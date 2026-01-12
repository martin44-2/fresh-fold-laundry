
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">FreshFold</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-blue-500'
                  } transition-colors duration-200 text-sm`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-xl font-bold mb-4">FreshFold Laundry Services</h3>
              <p className="max-w-md text-slate-400">
                Premium laundry care delivered to your doorstep. We take the hassle out of laundry so you can focus on what matters most. Quality, reliability, and convenience are the fabrics of our business.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/order" className="hover:text-blue-400 transition-colors">Book Order</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center">
            &copy; {new Date().getFullYear()} FreshFold Laundry Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
