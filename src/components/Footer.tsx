import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-zinc-900 p-1 rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center relative">
                <img 
                  src="https://i.imgur.com/JfTETGG.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <Scissors className="w-5 h-5 text-white absolute" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900">COLUMBIA BARBER</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium grooming for the modern gentleman. Serving the Columbia community with pride and precision.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>9am - 7pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>10am - 5pm</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-3 rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-3 rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-3 rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} Columbia Barber Shop. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
