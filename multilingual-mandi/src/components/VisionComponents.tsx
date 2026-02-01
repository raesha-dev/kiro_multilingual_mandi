import React from 'react';
import { SupportedLanguage, Commodity } from '../types';
import { mockPriceData } from '../data/mockPrices';

interface AIMarketForecastProps {
    commodity: Commodity;
    language: SupportedLanguage;
}

export const AIMarketForecast: React.FC<AIMarketForecastProps> = ({ commodity, language }) => {
    const priceData = mockPriceData[commodity];
    const forecastTrend = priceData.trend === 'up' ? '+5%' : priceData.trend === 'down' ? '-3%' : '+2%';
    const trendIcon = priceData.trend === 'up' ? '📈' : priceData.trend === 'down' ? '📉' : '📊';

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">🔮</span>
                <h4 className="font-semibold text-blue-800 font-hindi">
                    {language === SupportedLanguage.HINDI ? 'AI मूल्य पूर्वानुमान' : 'AI Price Forecast'}
                </h4>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">2048</span>
            </div>
            <div className="space-y-3">
                <div className="bg-white bg-opacity-70 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700 font-hindi">
                            {language === SupportedLanguage.HINDI ? '7-दिन का दृष्टिकोण' : '7-Day Outlook'}
                        </span>
                        <span className="flex items-center space-x-1 text-sm font-bold text-blue-800">
                            <span>{trendIcon}</span>
                            <span>{forecastTrend}</span>
                        </span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <div key={day} className="text-center">
                                <div className="text-xs text-gray-600">{day}</div>
                                <div className={`h-8 rounded-sm mt-1 ${index < 3 ? 'bg-green-400' : index < 5 ? 'bg-yellow-400' : 'bg-red-400'
                                    }`} style={{ height: `${20 + index * 3}px` }}></div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-blue-600 font-hindi">
                        {language === SupportedLanguage.HINDI
                            ? 'AI विश्लेषण: मौसम + मांग पैटर्न आधारित'
                            : 'AI Analysis: Weather + demand pattern based'
                        }
                    </p>
                </div>
                <p className="text-xs text-blue-600 font-hindi">
                    {language === SupportedLanguage.HINDI
                        ? 'पूर्वानुमान सलाहकारी है, ऐतिहासिक + मांग पैटर्न पर आधारित।'
                        : 'Forecast is advisory, based on historical + demand patterns.'
                    }
                </p>
            </div>
        </div>
    );
};

export const TrustTraceabilityBadge: React.FC<{ language: SupportedLanguage }> = ({ language }) => {
    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">🛡️</span>
                <h4 className="font-semibold text-green-800 font-hindi">
                    {language === SupportedLanguage.HINDI ? 'सत्यापित डिजिटल व्यापार रसीद' : 'Verified Digital Trade Receipt'}
                </h4>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">2048</span>
            </div>
            <div className="space-y-3">
                <div className="bg-white bg-opacity-70 rounded-lg p-3">
                    <div className="space-y-2 text-xs text-green-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span>✓</span>
                                <span className="font-hindi">Blockchain verified</span>
                            </div>
                            <span className="text-green-600 font-mono">#TX4A9B</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>✓</span>
                            <span className="font-hindi">Price source: Agmarknet + Local Co-op</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>✓</span>
                            <span className="font-hindi">Digital receipt stored permanently</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>✓</span>
                            <span className="font-hindi">Seller protection enabled</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                    <span className="text-green-600 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'पारदर्शी व्यापार रिकॉर्ड' : 'Transparent trade record'}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        🔒 Secured
                    </span>
                </div>
            </div>
        </div>
    );
};

export const SmartMandiNetwork: React.FC<{ language: SupportedLanguage }> = ({ language }) => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">🌐</span>
                <h4 className="font-semibold text-purple-800 font-hindi">
                    {language === SupportedLanguage.HINDI ? 'जुड़ा हुआ भारत मंडी नेटवर्क' : 'Connected Bharat Mandi Network'}
                </h4>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">2048</span>
            </div>
            <div className="space-y-3">
                <div className="bg-white bg-opacity-70 rounded-lg p-3">
                    <div className="flex items-center justify-center space-x-2 text-sm mb-3">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-hindi">Bihar</span>
                        <span className="text-purple-600">↔</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-hindi">Tamil Nadu</span>
                        <span className="text-purple-600">↔</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-hindi">Maharashtra</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                            <div className="text-purple-700 font-semibold">2,847</div>
                            <div className="text-purple-600">Active Mandis</div>
                        </div>
                        <div className="text-center">
                            <div className="text-purple-700 font-semibold">₹12.4L</div>
                            <div className="text-purple-600">Daily Volume</div>
                        </div>
                        <div className="text-center">
                            <div className="text-purple-700 font-semibold">98.7%</div>
                            <div className="text-purple-600">Uptime</div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-purple-600 text-center font-hindi">
                    {language === SupportedLanguage.HINDI
                        ? 'एकीकृत राष्ट्रीय व्यापार नेटवर्क'
                        : 'Unified national trade network'
                    }
                </p>
            </div>
        </div>
    );
};

export const VendorEmpowermentIndex: React.FC<{ language: SupportedLanguage }> = ({ language }) => {
    return (
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">💪</span>
                <h4 className="font-semibold text-orange-800 font-hindi">
                    {language === SupportedLanguage.HINDI ? 'विक्रेता सशक्तिकरण सूचकांक' : 'Vendor Empowerment Index'}
                </h4>
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'निष्पक्ष मूल्य पहुंच' : 'Fair pricing access'}
                    </span>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <span key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-orange-500' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'भाषा समानता' : 'Language equality'}
                    </span>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <span key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-orange-500' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'ऑफलाइन सुरक्षा' : 'Offline safety'}
                    </span>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <span key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-orange-500' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const BharatVision2048Panel: React.FC<{ language: SupportedLanguage }> = ({ language }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white rounded-lg p-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-4xl animate-pulse">🇮🇳</div>
                <div className="absolute bottom-4 left-4 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>🌾</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-5">🚀</div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-4">
                    <h3 className="text-xl font-bold font-hindi mb-2">
                        {language === SupportedLanguage.HINDI
                            ? 'भारत का AI व्यापार अवसंरचना 2048'
                            : 'Bharat\'s AI Trade Infrastructure for 2048'
                        }
                    </h3>
                    <p className="text-indigo-200 text-sm font-hindi">
                        {language === SupportedLanguage.HINDI
                            ? 'आज के स्थानीय मंडियों से शुरुआत'
                            : 'Starting from local mandis today'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-3">
                        <span className="text-2xl">⚖️</span>
                        <div>
                            <div className="font-semibold font-hindi">
                                {language === SupportedLanguage.HINDI ? 'निष्पक्ष व्यापार का भविष्य' : 'Future of Fair Trade'}
                            </div>
                            <div className="text-xs text-indigo-200 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'हर किसान के लिए पारदर्शी मूल्य निर्धारण' : 'Transparent pricing for every farmer'}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-3">
                        <span className="text-2xl">🗣️</span>
                        <div>
                            <div className="font-semibold font-hindi">
                                {language === SupportedLanguage.HINDI ? 'बहुभाषी वाणिज्य' : 'Multilingual Commerce'}
                            </div>
                            <div className="text-xs text-indigo-200 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'हर भाषा में व्यापार की सुविधा' : 'Trade facilitation in every language'}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-3">
                        <span className="text-2xl">🤝</span>
                        <div>
                            <div className="font-semibold font-hindi">
                                {language === SupportedLanguage.HINDI ? 'हर विक्रेता के लिए' : 'For Every Vendor'}
                            </div>
                            <div className="text-xs text-indigo-200 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'कश्मीर से कन्याकुमारी तक' : 'From Kashmir to Kanyakumari'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};