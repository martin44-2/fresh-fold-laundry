
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Order: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: SERVICES[0].id,
    pickupDate: '',
    deliveryOption: 'standard'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/[- ]/g, ''))) newErrors.phone = 'Enter a valid phone number';
    if (!formData.pickupDate) newErrors.pickupDate = 'Please select a pickup date';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Confirmed!</h2>
          <p className="text-slate-600 mb-8">
            Thank you, {formData.name}. We've received your request for {SERVICES.find(s => s.id === formData.serviceType)?.name}. A member of our team will contact you shortly to confirm the pickup time.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Small Hero Background for Order Page */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1920" 
          alt="Freshly Laundered Clothes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg tracking-tight">
              Book Your Service
            </h1>
            <p className="text-blue-100 mt-2 font-medium">Simple, fast, and professional garment care.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-blue-600 py-8 px-8 text-white text-center">
            <p className="text-blue-100 font-medium">Fill in the details below and we'll handle the rest.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Customer Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-5 py-4 rounded-2xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-5 py-4 rounded-2xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all`}
                  placeholder="(233) 00-000-0000"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Service Type</label>
                <div className="relative">
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none"
                  >
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Preferred Pickup Date</label>
                <input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className={`w-full px-5 py-4 rounded-2xl border ${errors.pickupDate ? 'border-red-500' : 'border-slate-200'} bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all`}
                />
                {errors.pickupDate && <p className="text-red-500 text-xs mt-1 font-medium">{errors.pickupDate}</p>}
              </div>
            </div>

            {/* Delivery Option */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">Delivery Speed</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, deliveryOption: 'standard' })}
                  className={`p-6 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${formData.deliveryOption === 'standard' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.deliveryOption === 'standard' ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                    {formData.deliveryOption === 'standard' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <div className="font-black text-slate-900">Standard</div>
                    <div className="text-xs text-slate-500 font-medium">48-hour turnaround</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, deliveryOption: 'express' })}
                  className={`p-6 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${formData.deliveryOption === 'express' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.deliveryOption === 'express' ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                    {formData.deliveryOption === 'express' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <div className="font-black text-slate-900">Express</div>
                    <div className="text-xs text-slate-500 font-medium">Same-day delivery (+50%)</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Complete Booking
            </button>
          </form>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-8 font-medium">
          By booking, you agree to our terms of service regarding garment handling and insurance.
        </p>
      </div>
    </div>
  );
};

export default Order;
