import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8"
            >
              Get in Touch
            </motion.h1>
            <p className="text-zinc-600 text-lg mb-12 max-w-md">
              Have questions about our services or want to book an appointment? We're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Phone</h3>
                  <p className="text-zinc-600 mb-4">(410) 381-0300</p>
                  <a 
                    href="tel:4103810300"
                    className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:underline"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Address</h3>
                  <p className="text-zinc-600">
                    7104 Minstrel Way<br />
                    Columbia, MD 21045
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Email</h3>
                  <p className="text-zinc-600">info@columbiabarbershop.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <p className="text-zinc-500 italic text-sm">
                "This demo site can be live at <span className="font-bold text-zinc-900">columbiabarbershop.com</span> if approved."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-50 p-8 md:p-12 rounded-[3rem] border border-zinc-100"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h2>
                <p className="text-zinc-600">We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-zinc-900 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Service Requested</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all appearance-none">
                    <option>Classic Haircut</option>
                    <option>Beard Trim</option>
                    <option>Hot Towel Shave</option>
                    <option>Color & Styling</option>
                    <option>Other / Question</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-zinc-900 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
