// src/ClimateWeekDetail.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Globe, Users, FileText, ArrowLeftCircle } from 'lucide-react';
import { climateWeeks } from './data/climateWeeks';

export default function ClimateWeekDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = climateWeeks.find(e => e.slug === slug);

  useEffect(() => {
    if (event) {
      document.title = `ClimateWeeks – ${event.city}`;
    }
  }, [event]);

  if (!event) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Event Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-accent hover:underline"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const formatDateRange = (ev) => {
    if (ev.isTBD) return ev.displayDate;
    const start = new Date(ev.startDate);
    const end = new Date(ev.endDate);
    return `${start.toLocaleDateString('default', { month: 'short' })}. ${start.getDate()}
      – ${end.toLocaleDateString('default', { month: 'short' })}. ${end.getDate()},
      ${start.getFullYear()}`;
  };

  return (
    <div className="py-6 max-w-4xl mx-auto">
      {/* "Go back" link */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center text-accent hover:underline"
      >
        <ArrowLeftCircle size={20} className="mr-1" />
        Back
      </button>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded shadow-subtle overflow-hidden">
        {event.imageUrl && (
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.city}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{event.city}</h1>
              <p className="text-lg text-gray-600">{event.eventName}</p>
            </div>
            {event.website && (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex-shrink-0"
              >
                <Globe size={24} />
              </a>
            )}
          </div>

          {/* Info */}
          <div className="text-gray-700 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-sm">{formatDateRange(event)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-gray-500" />
              <span className="text-sm">{event.organizers.join(', ')}</span>
            </div>
            <div className="flex items-start gap-2">
              <FileText size={18} className="text-gray-500 mt-0.5" />
              <p className="text-sm leading-relaxed">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
