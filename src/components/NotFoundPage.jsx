// src/components/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-12 text-center">
      <Frown size={48} className="mx-auto text-gray-500 mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
      <p className="mb-4 text-gray-600">Sorry, we can’t find that page.</p>
      <Link
        to="/"
        className="text-blue-600 hover:underline inline-flex items-center"
      >
        Go Back Home
      </Link>
    </div>
  );
}
