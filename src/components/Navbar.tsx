import React from 'react';
import { NavLink } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="bg-zinc-900 p-1 rounded-lg group-hover:rotate-12 transition-transform overflow-hidden w-10 h-10 flex items-center justify-center">
                <img 
                  src="https://i.imgur.com/JfTETGG.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) parent.classList.add('bg-zinc-900', 'text-white');
                  }}
                />
                <Scissors className="w-6 h-6 text-white absolute" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900">COLUMBIA BARBER</span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-zinc-900 ${
                    isActive ? 'text-zinc-900' : 'text-zinc-500'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="tel:4103810300"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
            >
              (410) 381-0300
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'bg-zinc-50 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="tel:4103810300"
            className="block w-full text-center bg-zinc-900 text-white px-6 py-4 rounded-xl text-base font-semibold mt-4"
          >
            Call Now: (410) 381-0300
          </a>
        </div>
      )}
    </nav>
  );
}
