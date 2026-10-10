import React, { useState } from 'react';

// React + Tailwind translation of Madhu | CSE Portfolio
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontFamily: 'Outfit, sans-serif'
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#ffffffcc' }}
      >
        <div
          className="text-xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2563eb, #0284c7)'
          }}
        >
          Madhu | CSE Portfolio
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button
          className="px-4 py-2 text-sm font-semibold rounded-full text-white hover:opacity-95 transition"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2563eb, #0284c7)'
          }}
        >
          Get Started
        </button>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <span
          className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-white/10 border border-white/15"
          style={{ color: '#0284c7' }}
        >
          SiteGen AI Powered
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm Madhu. Final Year CSE Undergraduate.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Passionate about full-stack development, machine learning, and building robust software solutions. Ready for new engineering challenges.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-3 font-semibold rounded-full text-white hover:scale-105 transition shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2563eb, #0284c7)'
            }}
          >
            Start Building
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Madhu | CSE Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
