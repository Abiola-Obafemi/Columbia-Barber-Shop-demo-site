import React from 'react';
import { MapPin, Phone, Clock, Scissors, Globe, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000"
            alt="Barber Shop Interior"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Professional Haircuts & Grooming
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Experience the finest barbering services in Columbia, MD. We combine classic techniques with modern style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:4103810300"
                className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors text-center"
              >
                Book Your Chair
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="bg-zinc-900 p-4 rounded-2xl mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900">Our Location</h3>
              <p className="text-zinc-600">7104 Minstrel Way<br />Columbia, MD 21045</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="bg-zinc-900 p-4 rounded-2xl mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900">Contact Us</h3>
              <p className="text-zinc-600">(410) 381-0300<br />Call for Appointments</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="bg-zinc-900 p-4 rounded-2xl mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900">Business Hours</h3>
              <p className="text-zinc-600">Mon–Sat: 9am–7pm<br />Sun: 10am–5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Pricing Section (For the Shop Owner) */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-800/50 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital Growth Packages</h2>
            <p className="text-zinc-400 max-w-2xl">
              Specialized web solutions for Columbia Barber Shop. Let's take your business to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-zinc-800 p-8 rounded-3xl border border-zinc-700"
            >
              <Globe className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-2">Website Setup</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">$150</span>
                <span className="text-zinc-500">one-time</span>
              </div>
              <ul className="space-y-4 text-zinc-400 mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Mobile-friendly design
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  SEO Optimization
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Custom Domain Ready
                </li>
              </ul>
            </motion.div>

            {/* Package 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white text-zinc-900 p-8 rounded-3xl border border-white"
            >
              <Scissors className="w-12 h-12 text-zinc-900 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Maintenance</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="space-y-4 text-zinc-600 mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-900" />
                  Monthly Content Updates
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-900" />
                  Security Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-900" />
                  Performance Reports
                </li>
              </ul>
            </motion.div>

            {/* Package 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-zinc-800 p-8 rounded-3xl border border-zinc-700"
            >
              <MessageSquare className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-2">AI Chat Agent</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-zinc-500">setup</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold">$30</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="space-y-4 text-zinc-400 mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  24/7 FAQ Handling
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Appointment Inquiries
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Instant Customer Support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
