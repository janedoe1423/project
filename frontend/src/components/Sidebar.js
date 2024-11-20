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
    }
];

const IprSidebar = () => {
    return (
        <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-gray-500" />
                <h2 className="text-sm font-medium text-gray-700">Filters</h2>
            </div>

            <div className="space-y-4">
                {filterCategories.map((category) => (
                    <div key={category.id}>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">{category.label}</h3>
                        <div className="space-y-2">
                            {category.options.map((option) => (
                                <label key={option} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                                    />
                                    <span className="text-xs text-gray-600">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IprSidebar;