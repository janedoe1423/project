import React from 'react';
import { Copyright, CircleDot, Lightbulb } from 'lucide-react';

const IPTypeSelector = ({ selectedTypes, onTypeChange }) => {
  const types = [
    { id: 'patent', label: 'Patents', icon: Lightbulb, color: 'blue' },
    { id: 'trademark', label: 'Trademarks', icon: CircleDot, color: 'green' },
    { id: 'copyright', label: 'Copyrights', icon: Copyright, color: 'purple' }
  ];

  return (
    <div className="flex gap-4 mb-6">
      {types.map(({ id, label, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => onTypeChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
            ${selectedTypes.includes(id)
              ? `bg-${color}-100 text-${color}-700 border-2 border-${color}-500`
              : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
            }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default IPTypeSelector;