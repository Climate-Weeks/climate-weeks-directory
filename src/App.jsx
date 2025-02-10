// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ClimateWeeksDirectory from './ClimateWeeksDirectory';
import ClimateWeekDetail from './ClimateWeekDetail';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            {/* Subtle brand icon or text */}
            <span className="text-2xl font-semibold tracking-tight">
              ClimateWeeks
            </span>
          </Link>
          {/* Right side navigation if needed */}
          <nav>
            {/* Could add links: e.g. <Link to="/about" className="ml-4">About</Link> */}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<ClimateWeeksDirectory />} />
          <Route path="/event/:slug" element={<ClimateWeekDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        Climate Weeks by{" "}
        <a
          href="https://linkedin.com/in/alecturnbull"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alec Turnbull
        </a>
        {" • "}
        <a
          href="https://linkedin.com/in/jackiemoe"
          className="text-accent hover:underline" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Jackie Moe
        </a>
        {" • "}
        <a
          href="https://linkedin.com/in/jazoff"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jon Azoff
        </a>
        <div className="mt-2">
          <a
            href="https://github.com/alecturnbull/climateweeks"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" • "}
          <a
            href="mailto:alec@climatetechcities.com"
            className="text-accent hover:underline"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
