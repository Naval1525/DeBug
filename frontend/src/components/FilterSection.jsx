import React from 'react';

export const FilterSection = ({ title, children }) => (
  <div className="mb-8 last:mb-4">
    <h3 className="text-lg font-medium text-gray-200 mb-3 pl-2 border-l-2 border-indigo-400">
      {title}
    </h3>
    <div className="space-y-2">{children}</div>
  </div>
);
