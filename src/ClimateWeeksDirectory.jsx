// src/ClimateWeeksDirectory.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Globe, Users, FileText } from 'lucide-react';
import { climateWeeks } from './data/climateWeeks';

const ClimateWeeksDirectory = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const months = [...new Set(climateWeeks.flatMap(e => e.months))].sort(
    (a, b) => new Date(`${a} 1, 2025`) - new Date(`${b} 1, 2025`)
  );
  const cities = [...new Set(climateWeeks.map(e => e.city))].sort();

  // Filter / sort
  const filteredEvents = climateWeeks
    .filter(event => {
      if (selectedCity !== 'all' && event.city !== selectedCity) return false;
      if (selectedMonth !== 'all' && !event.months.includes(selectedMonth)) return false;
      return true;
    })
    .sort((a, b) => {
      if (a.startDate && b.startDate) {
        return new Date(a.startDate) - new Date(b.startDate);
      }
      if (!a.startDate && !b.startDate) return 0;
      if (!a.startDate) return 1;
      if (!b.startDate) return -1;
      return 0;
    });

  // Group by month
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    event.months.forEach(month => {
      if (!acc[month]) acc[month] = [];
      acc[month].push(event);
    });
    return acc;
  }, {});

  // Format dates
  const formatDateRange = (event) => {
    if (event.isTBD) return event.displayDate;
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    return `${start.toLocaleDateString('default', { month: 'short' })}. ${start.getDate()}
      - ${end.toLocaleDateString('default', { month: 'short' })}. ${end.getDate()}, 
      ${start.getFullYear()}`;
  };

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Climate Weeks Directory</h1>
      <p className="text-gray-700 text-center max-w-xl mx-auto mb-6">
        Explore upcoming climate action events, summits, and activities around the globe.
        Filter by city or month to find events that matter to you!
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block" htmlFor="city-filter">
            City
          </label>
          <select
            id="city-filter"
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="all">All cities</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label className="text-sm font-medium mb-1 block" htmlFor="month-filter">
            Month
          </label>
          <select
            id="month-filter"
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="all">All months</option>
            {months.map(month => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* No results */}
      {filteredEvents.length === 0 && (
        <div className="mt-8 p-4 border rounded text-center text-gray-700">
          No events match your filters.
        </div>
      )}

      {/* Grouped events */}
      {Object.entries(groupedEvents).map(([month, events]) => (
        <section key={month} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">
            {month}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Link
                to={`/event/${event.slug}`} // <-- uses the slug
                key={index}
                className="block border rounded bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Pexels image */}
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.city}
                    className="w-full h-48 object-cover rounded-t"
                    loading="lazy"
                  />
                )}

                <div className="p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{event.city}</h3>
                      <p className="text-sm text-gray-600">{event.eventName}</p>
                    </div>
                    {event.website && (
                      <span className="text-green-600 flex-shrink-0">
                        <Globe size={20} />
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span>{formatDateRange(event)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-500" />
                      <span>{event.organizers.join(', ')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText size={16} className="text-gray-500 mt-0.5" />
                      <p className="line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ClimateWeeksDirectory;
