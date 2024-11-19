import React from 'react';
import { Filter } from 'lucide-react';

const filterCategories = [
  {
    id: 'industry',
    label: 'Industry',
    options: ['Technology', 'Healthcare', 'Manufacturing', 'Entertainment', 'Agriculture']
  },
  {
    id: 'sector',
    label: 'Sector',
    options: ['Public', 'Private', 'Government', 'Non-Profit']
  },
  {
    id: 'stage',
    label: 'Stage',
    options: ['Application', 'Examination', 'Published', 'Granted', 'Opposed']
  },
  {
    id: 'state',
    label: 'State',
    options: ['California', 'New York', 'Texas', 'Florida', 'Illinois']
  },
  {
    id: 'city',
    label: 'City',
    options: ['San Francisco', 'New York City', 'Austin', 'Miami', 'Chicago']
  }
];

const Sidebar = ({ selectedFilters, onFilterChange }) => {
  return (
    <div className="w-64 bg-white shadow-lg p-4 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
      </div>
      
      <div className="space-y-6">
        {filterCategories.map((category) => (
          <div key={category.id} className="space-y-2">
            <h3 className="font-medium text-gray-700">{category.label}</h3>
            <div className="space-y-2">
              {category.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedFilters[category.id]?.includes(option)}
                    onChange={() => onFilterChange(category.id, option)}
                  />
                  <span className="text-sm text-gray-600">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;