import React from 'react';
import { Commodity, SupportedLanguage } from '../types';
import { commodityNames } from '../data/mockPrices';

interface CommodityDropdownProps {
    selectedCommodity: Commodity | null;
    onCommodityChange: (commodity: Commodity) => void;
    language: SupportedLanguage;
}

const CommodityDropdown: React.FC<CommodityDropdownProps> = ({
    selectedCommodity,
    onCommodityChange,
    language
}) => {
    const commodities = Object.values(Commodity);

    return (
        <div className="relative">
            <select
                value={selectedCommodity || ''}
                onChange={(e) => onCommodityChange(e.target.value as Commodity)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-mandi-green focus:border-transparent w-full font-hindi"
            >
                <option value="">
                    {language === SupportedLanguage.HINDI ? 'फसल चुनें' : 'Select Commodity'}
                </option>
                {commodities.map((commodity) => (
                    <option key={commodity} value={commodity}>
                        {commodityNames[commodity][language]} ({commodityNames[commodity].en})
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
};

export default CommodityDropdown;