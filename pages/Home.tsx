
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Professional Laundry Background */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1920" 
            alt="Freshly Folded Laundry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
              Clean Clothes, <br />
              <span className="text-blue-400">Fresh Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-10 font-medium drop-shadow-lg leading-relaxed">
              Experience the ultimate convenience with our premium door-to-door laundry and dry cleaning services. We handle the dirty work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/order"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1 text-center"
              >
                Book Pickup Now
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Description - Centered without image */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Quality You Can Trust</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            FreshFold isn't just a laundry service; we're your partner in garment care. We understand that your clothes are an investment, and we treat every item with the utmost precision and care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Free Pickup & Delivery', 'Eco-friendly Detergents', 'Expert Garment Handling', '48-hour Standard Turnaround'].map((item) => (
              <div key={item} className="flex items-center bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-slate-700 font-bold shadow-sm">
                <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Services Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Popular Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="text-blue-600 font-black text-lg">{service.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 text-lg group"
            >
              Explore all our care options
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
