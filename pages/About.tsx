
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Professional Background */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&q=80&w=1920" 
          alt="Professional Laundry Care" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
                Crafting Freshness <br />Since 2015
              </h1>
              <p className="text-lg md:text-xl text-blue-50 font-medium leading-relaxed drop-shadow-md">
                Modern life is busy. We're here to give you your time back with professional, eco-friendly garment care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Excellence in Every Thread</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              FreshFold began with a simple observation: laundry is a time-consuming chore that takes people away from their passions and families. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              What started as a small local laundromat has evolved into a full-service professional cleaning ecosystem, utilizing state-of-the-art machinery and eco-friendly processes to deliver results that exceed traditional dry cleaning standards.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-blue-600">10k+</div>
                <div className="text-slate-500 font-semibold text-sm uppercase tracking-wide">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600">250k+</div>
                <div className="text-slate-500 font-semibold text-sm uppercase tracking-wide">Items Cleaned</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800" 
              alt="Quality Control" 
              className="relative rounded-3xl shadow-2xl transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Mission & Vision with Iconography */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To simplify our customers' lives by providing exceptional garment care with unparalleled convenience and environmental responsibility.
            </p>
          </div>
          <div className="bg-blue-600 p-12 rounded-[3rem] text-white">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6">👁️</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To become the world's most trusted name in laundry and fabric care, setting new standards for quality and service efficiency.
            </p>
          </div>
        </div>

        {/* Why Choose Us Icons */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16">Why Customers Choose Us</h2>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              { 
                title: 'Reliable Timing', 
                icon: '⏱️',
                desc: 'We value your time. Our schedules are strict and our deliveries are always punctual.' 
              },
              { 
                title: 'Expert Care', 
                icon: '👔',
                desc: 'Our technicians are trained in fabric science to ensure your clothes are treated correctly.' 
              },
              { 
                title: 'Eco-Friendly', 
                icon: '🌿',
                desc: 'We use biodegradable detergents and energy-efficient machines in all our facilities.' 
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
