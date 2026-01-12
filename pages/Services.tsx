
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const SERVICE_IMAGES: Record<string, string> = {
  'wash-fold': 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800',
  'dry-cleaning': 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800',
  'ironing': 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=800',
  'express': 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800'
};

const Services: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  const calculateEstimate = () => {
    const service = SERVICES.find(s => s.id === selectedService);
    if (!service) return 0;
    const price = typeof service.basePrice === 'number' ? service.basePrice : 0;
    return (price * weight).toFixed(2);
  };

  return (
    <div className="bg-white">
      {/* Services Hero Header with New Laundry Background */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Laundry Facility" 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1920';
          }}
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-2xl tracking-tight">
              Premium Garment Care
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
              We treat your clothes with the precision and care they deserve, using the latest eco-friendly technology.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
          <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col md:flex-row gap-0 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img 
                  src={SERVICE_IMAGES[service.id]} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="p-10 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{service.name}</h3>
                </div>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">{service.description}</p>
                <div className="mt-auto">
                  <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md shadow-blue-100">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Calculator Section */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Estimate Your Cost</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Plan your laundry day better. Select your service and estimated load to get an instant pricing overview.
              </p>
              <div className="space-y-8 max-w-md">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-blue-400 mb-3">Select Service</label>
                  <div className="relative">
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all appearance-none"
                    >
                      {SERVICES.map(s => <option key={s.id} value={s.id} className="text-slate-900">{s.name}</option>)}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-blue-400 mb-3">Estimated Weight / Quantity</label>
                  <input 
                    type="number"
                    min="0"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. 5kg or 3 items"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-12 text-slate-900 text-center shadow-2xl">
              <span className="text-slate-500 uppercase tracking-widest text-xs font-black">Estimated Bill Total</span>
              <div className="text-6xl md:text-7xl font-black text-blue-600 my-6">
                GH₵ {calculateEstimate()}
              </div>
              <div className="h-1 bg-slate-100 w-24 mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-500 text-sm font-medium">
                Standard delivery included. Express surcharges applied during checkout.
              </p>
              <button className="mt-8 w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                Book This Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
