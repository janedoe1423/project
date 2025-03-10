import React from 'react';
import { Copyright, CircleDot, Lightbulb } from 'lucide-react';

const IPCard = ({ data }) => {
    const industry = data?.industry || 'Unknown Industry';
    const status = data?.status?.toLowerCase() || 'unknown';

    const getIcon = () => {
        switch (data?.type) {
            case 'patent':
                return <Lightbulb className="w-6 h-6 text-blue-600" />;
            case 'trademark':
                return <CircleDot className="w-6 h-6 text-green-600" />;
            case 'copyright':
                return <Copyright className="w-6 h-6 text-purple-600" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'granted':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {getIcon()}
                    <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
                    {status}
                </span>
            </div>
            <p className="mt-3 text-gray-600 text-sm">{data?.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Owner: {data?.owner}</span>
                <span>Filed: {data?.date}</span>
            </div>
        </div>
    );
}

export default IPCard;