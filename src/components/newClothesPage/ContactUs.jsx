import React, { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    previousSource: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us. Our sales team will reply within 12 hours.");
  };

  return (
    <section className="relative py-16 lg:py-24 my-12 rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center" 
      style={{ backgroundImage: `url('https://hissenglobal.com/wp-content/uploads/2025/04/bg2.webp')` }}>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Get in Touch Now
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Column: Get a Quote Form */}
          <div className="bg-white p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
              Get a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="whatsapp"
                  placeholder="Your Whatsapp*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="previousSource"
                  placeholder="Where did you purchase from before?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>

              <select
                name="quantity"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                onChange={handleChange}
              >
                <option value="" disabled selected>Your Quantity</option>
                <option value="≥100bales(4500kg)">≥100bales (4500kg)</option>
                <option value="≥One 20ft Container(13000kg)">≥One 20ft Container (13000kg)</option>
                <option value="≥One 40ft Container(28000kg)">≥One 40ft Container (28000kg)</option>
                <option value="≥Two 40ft Container(56000kg)">≥Two 40ft Container (56000kg)</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Get Price Now
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column: Factory Info */}
          <div className="relative p-8 lg:p-12 text-white flex flex-col justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('https://hissenglobal.com/wp-content/uploads/2025/03/bg.webp')` }}>
            
            {/* Darker Overlay for Right Side */}
            <div className="absolute inset-0 bg-blue-900/80"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Welcome to visit our factory
                <span className="block h-1 w-12 bg-[#FFD700]"></span>
              </h3>

              <div className="space-y-8 mt-10">
                <a href="mailto:sales@hissenglobal.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg hover:text-[#FFD700] transition-colors">sales@hissenglobal.com</span>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <span className="text-lg">+8619128294940</span>
                </div>

                <a href="https://wa.me/8617665079065" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 transition-transform group-hover:scale-110">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-lg hover:text-[#FFD700] transition-colors">+8617665079065</span>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 shrink-0 transition-transform group-hover:scale-110">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg leading-relaxed">
                    No. 21, Changyuan Road, Tianhe District, Guangzhou City, Guangdong, China
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;