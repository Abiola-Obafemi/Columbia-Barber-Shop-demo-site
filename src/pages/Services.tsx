import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const services = [
  {
    name: "Classic Haircut",
    price: "$25",
    description: "Precision cut tailored to your style, finished with a straight razor neck shave.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Beard Trim",
    price: "$15",
    description: "Professional shaping and trimming to keep your beard looking sharp.",
    image: "https://images.unsplash.com/photo-1621605815841-2df47006684e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hot Towel Shave",
    price: "$20",
    description: "Traditional straight razor shave with hot towels and premium oils.",
    image: "https://images.unsplash.com/photo-1599351431247-f13b283253c9?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Color & Styling",
    price: "$30+",
    description: "Full color services and advanced styling for a completely new look.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <div className="bg-zinc-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Premium grooming services designed for the modern gentleman. 
            Quality you can see, service you can feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-zinc-900">{service.name}</h3>
                    <span className="text-xl font-bold text-zinc-900">{service.price}</span>
                  </div>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                </div>
                <a 
                  href="tel:4103810300"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-800 transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-zinc-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready for a fresh look?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Walk-ins are welcome, but appointments are recommended to ensure you get the time that works best for you.
          </p>
          <a 
            href="tel:4103810300"
            className="bg-white text-zinc-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors inline-block"
          >
            Call (410) 381-0300
          </a>
        </div>
      </div>
    </div>
  );
}
