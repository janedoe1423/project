import React from 'react';
import { Copyright, CircleDot, Lightbulb } from 'lucide-react';

const IPTypeSelector = ({ types = [] }) => {
  return (
    <div>
      {types.map((type, index) => (
        <div key={index}>
          <p>{type.includes('someString') ? 'Included' : 'Not Included'}</p>
        </div>
      ))}
    </div>
  );
}

export default IPTypeSelector;