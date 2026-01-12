
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "What is your standard turnaround time?",
    answer: "Our standard turnaround time is 48 hours. For urgent needs, we offer an Express Service with same-day delivery if picked up before 10:00 AM."
  },
  {
    question: "Do you handle delicate items like silk or lace?",
    answer: "Yes, our team is trained in specialized fabric care. We recommend selecting our Dry Cleaning service for delicate items to ensure they receive the appropriate chemical-free treatment."
  },
  {
    question: "Is there a minimum order amount for free delivery?",
    answer: "Free pickup and delivery are available for all orders over GH₵ 250. For smaller orders, a modest GH₵ 40 convenience fee is applied."
  },
  {
    question: "How do I prep my clothes for pickup?",
    answer: "Simply place your items in any disposable bag or a reusable laundry bag. No need to sort them—our team will handle sorting by color and fabric type at our facility."
  }
];

const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[350px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1920" 
          alt="Contact FreshFold Support" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg tracking-tight">Let's Get Your Laundry Done</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
              Our support team is available 7 days a week to help with your orders, specialized requests, or business inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 text-xl font-bold">📍</div>
              <div>
                <h3 className="font-bold text-slate-900">Main Station</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Accra, Dansoman<br />Dr. Rose Junction, Adole ST
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="bg-green-50 p-3 rounded-2xl text-green-600 text-xl font-bold">📞</div>
              <div>
                <h3 className="font-bold text-slate-900">Quick Support</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Call: (233) 59-399-7536<br />Mon - Sun: 8am - 8pm
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 text-xl font-bold">✉️</div>
              <div>
                <h3 className="font-bold text-slate-900">Email Inquiries</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Support: adinkrahmartin15@gmail.com<br />Business: sales@freshfold.com
                </p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="font-bold text-xl mb-4">Pickup & Delivery</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Save time by booking a pickup online. We service the greater Accra area including Dansoman, East Legon, and Cantonments.
              </p>
            </div>
          </div>

          {/* Form and FAQ Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {formSent && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
                    <span className="text-xl">✅</span>
                    <p className="font-medium">Success! Our team will get back to you shortly.</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600 uppercase tracking-wide">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" 
                      placeholder="Jane Smith" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600 uppercase tracking-wide">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" 
                      placeholder="jane@example.com" 
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600 uppercase tracking-wide">Subject</label>
                  <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Tracking</option>
                    <option>Corporate Partnership</option>
                    <option>Billing Question</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600 uppercase tracking-wide">Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none" 
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200 disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>

            {/* FAQ Accordion Section */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                <span className="text-blue-600">❓</span> Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full flex items-center justify-between text-left py-2 hover:text-blue-600 transition-colors"
                    >
                      <span className="font-bold text-slate-800">{faq.question}</span>
                      <span className={`text-xl transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                        ⌄
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
