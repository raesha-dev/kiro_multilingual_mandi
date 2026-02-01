import React, { useState } from 'react';
import { SupportedLanguage, Commodity } from '../types';
import { mockPriceData } from '../data/mockPrices';
import PriceCard from '../components/PriceCard';
import LanguageSelector from '../components/LanguageSelector';
import VisionModeToggle from '../components/VisionModeToggle';
import { SmartMandiNetwork, VendorEmpowermentIndex } from '../components/VisionComponents';
import Footer from '../components/Footer';
import { useOfflineDetection } from '../hooks/useOfflineDetection';

interface VendorDashboardProps {
    onBack: () => void;
}

const VendorDashboard: React.FC<VendorDashboardProps> = ({ onBack }) => {
    const [language, setLanguage] = useState<SupportedLanguage>(SupportedLanguage.HINDI);
    const [isVisionMode, setIsVisionMode] = useState(false); // Vision 2048 mode
    const isOffline = useOfflineDetection(); // Automatic offline detection
    const [lastUpdated] = useState(new Date());

    // Show 4 main commodities for the dashboard
    const mainCommodities = [
        Commodity.TOMATO,
        Commodity.ONION,
        Commodity.POTATO,
        Commodity.WHEAT
    ];

    const getOfflineStatusText = () => {
        if (language === SupportedLanguage.HINDI) {
            return isOffline ? 'ऑफलाइन - कल का डेटा' : 'ऑनलाइन - लाइव डेटा';
        }
        return isOffline ? 'Offline - Yesterday\'s Data' : 'Online - Live Data';
    };

    const formatLastUpdated = (date: Date) => {
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-md mx-auto px-4 py-3">
                    <div className="flex items-center justify-between mb-3">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            ←
                        </button>
                        <h1 className="text-xl font-bold text-gray-800 font-hindi">
                            {language === SupportedLanguage.HINDI ? 'मंडी डैशबोर्ड' : 'Mandi Dashboard'}
                        </h1>
                        <LanguageSelector
                            selectedLanguage={language}
                            onLanguageChange={setLanguage}
                        />
                    </div>

                    {/* Status Banner */}
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium ${isOffline
                        ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border border-orange-200'
                        : 'bg-green-100 text-green-800 border border-green-200'
                        }`}>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center space-x-2">
                                <span className={isOffline ? 'animate-pulse' : ''}>{isOffline ? '📶' : '🌐'}</span>
                                <span className="font-hindi">
                                    {isOffline ? 'Network kamzor hai. Cached prices dikh rahe hain.' : getOfflineStatusText()}
                                </span>
                            </span>
                            <span className="text-xs">
                                {formatLastUpdated(lastUpdated)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-md mx-auto px-4 py-6 flex-1">

                {/* Vision Mode Toggle */}
                <VisionModeToggle
                    isVisionMode={isVisionMode}
                    onToggle={setIsVisionMode}
                />

                {/* Summary Stats */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'आज का सारांश' : 'Today\'s Summary'}
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">3</div>
                            <div className="text-sm text-gray-600 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'बढ़ते भाव' : 'Price Up'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-red-600">1</div>
                            <div className="text-sm text-gray-600 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'गिरते भाव' : 'Price Down'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price Cards Grid */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'मुख्य फसलों के भाव' : 'Main Commodity Prices'}
                    </h2>

                    <div className="grid grid-cols-1 gap-4">
                        {mainCommodities.map((commodity) => (
                            <PriceCard
                                key={commodity}
                                commodity={commodity}
                                priceData={mockPriceData[commodity]}
                                language={language}
                                isOffline={isOffline}
                            />
                        ))}
                    </div>
                </div>

                {/* Vision Mode Features */}
                {isVisionMode && (
                    <div className="space-y-4 mb-6">
                        <SmartMandiNetwork language={language} />
                        <VendorEmpowermentIndex language={language} />
                    </div>
                )}

                {/* Recent Activity */}
                <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'हाल की गतिविधि' : 'Recent Activity'}
                    </h3>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div>
                                    <div className="text-sm font-medium font-hindi">
                                        {language === SupportedLanguage.HINDI ? 'टमाटर बातचीत पूरी' : 'Tomato negotiation completed'}
                                    </div>
                                    <div className="text-xs text-gray-500">₹30/kg final price</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">2 min ago</div>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div>
                                    <div className="text-sm font-medium font-hindi">
                                        {language === SupportedLanguage.HINDI ? 'प्याज का भाव चेक किया' : 'Checked onion price'}
                                    </div>
                                    <div className="text-xs text-gray-500">Voice query</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">5 min ago</div>
                        </div>

                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <div className="text-sm font-medium font-hindi">
                                        {language === SupportedLanguage.HINDI ? 'भाव अपडेट हुआ' : 'Price data updated'}
                                    </div>
                                    <div className="text-xs text-gray-500">All commodities</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">15 min ago</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="bg-mandi-green text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors font-hindi">
                        🎤 {language === SupportedLanguage.HINDI ? 'भाव पूछें' : 'Ask Price'}
                    </button>
                    <button className="bg-mandi-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors font-hindi">
                        💬 {language === SupportedLanguage.HINDI ? 'बातचीत' : 'Negotiate'}
                    </button>
                </div>

                {/* Footer Info */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    <p className="font-hindi">
                        {language === SupportedLanguage.HINDI ?
                            'डेटा स्रोत: मॉक एग्मार्कनेट' :
                            'Data Source: Mock Agmarknet'
                        }
                    </p>
                    <p>Last sync: {formatLastUpdated(lastUpdated)}</p>
                </div>
            </div>

            <Footer isVisionMode={isVisionMode} />
        </div>
    );
};

export default VendorDashboard;