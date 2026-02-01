import React from 'react';
import { PriceData, Commodity, SupportedLanguage } from '../types';
import { commodityNames } from '../data/mockPrices';

interface PriceCardProps {
    commodity: Commodity;
    priceData: PriceData;
    language: SupportedLanguage;
    isOffline?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
    commodity,
    priceData,
    language,
    isOffline = false
}) => {
    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up': return '📈';
            case 'down': return '📉';
            default: return '➡️';
        }
    };

    const getTrendColor = (trend: string) => {
        switch (trend) {
            case 'up': return 'text-green-600';
            case 'down': return 'text-red-600';
            default: return 'text-gray-600';
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const commodityName = commodityNames[commodity][language] || commodityNames[commodity].en;

    return (
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-mandi-green">
            {isOffline && (
                <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-2">
                    Offline Data
                </div>
            )}

            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800 font-hindi">
                    {commodityName}
                </h3>
                <div className="flex items-center space-x-1">
                    <span className="text-lg">{getTrendIcon(priceData.trend)}</span>
                    <span className={`text-sm font-medium ${getTrendColor(priceData.trend)}`}>
                        {priceData.change > 0 ? '+' : ''}{priceData.change.toFixed(1)}%
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Modal Price:</span>
                    <span className="font-bold text-xl text-mandi-green">
                        {priceData.modal} {priceData.unit}
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min: {priceData.minimum} {priceData.unit}</span>
                    <span className="text-gray-500">Max: {priceData.maximum} {priceData.unit}</span>
                </div>

                <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 truncate">
                        {priceData.market}
                    </p>
                    <p className="text-xs text-gray-400">
                        Updated: {formatTime(priceData.lastUpdated)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;