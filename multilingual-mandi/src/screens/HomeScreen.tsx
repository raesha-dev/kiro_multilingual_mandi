import React, { useState } from 'react';
import { SupportedLanguage, Commodity, VoiceError } from '../types';
import { mockPriceData } from '../data/mockPrices';
import VoiceInterface from '../components/VoiceInterface';
import PriceCard from '../components/PriceCard';
import LanguageSelector from '../components/LanguageSelector';
import CommodityDropdown from '../components/CommodityDropdown';
import VisionModeToggle from '../components/VisionModeToggle';
import {
    AIMarketForecast,
    TrustTraceabilityBadge,
    SmartMandiNetwork,
    BharatVision2048Panel
} from '../components/VisionComponents';
import Footer from '../components/Footer';
import { useOfflineDetection } from '../hooks/useOfflineDetection';

interface HomeScreenProps {
    onNavigateToNegotiation: () => void;
    onNavigateToDashboard: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
    onNavigateToNegotiation,
    onNavigateToDashboard
}) => {
    const [language, setLanguage] = useState<SupportedLanguage>(SupportedLanguage.HINDI);
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(Commodity.TOMATO); // Default to tomato for demo
    const [isListening, setIsListening] = useState(false);
    const [lastVoiceInput, setLastVoiceInput] = useState<string>('');
    const [isVisionMode, setIsVisionMode] = useState(false); // Vision 2048 mode
    const isOffline = useOfflineDetection(); // Automatic offline detection

    const handleVoiceInput = (text: string, confidence: number) => {
        setIsListening(false);
        setLastVoiceInput(text);

        // Simple commodity detection from voice input
        const lowerText = text.toLowerCase();
        if (lowerText.includes('टमाटर') || lowerText.includes('tomato')) {
            setSelectedCommodity(Commodity.TOMATO);
        } else if (lowerText.includes('प्याज') || lowerText.includes('onion')) {
            setSelectedCommodity(Commodity.ONION);
        } else if (lowerText.includes('आलू') || lowerText.includes('potato')) {
            setSelectedCommodity(Commodity.POTATO);
        } else {
            // Default to tomato for demo
            setSelectedCommodity(Commodity.TOMATO);
        }
    };

    const handleVoiceError = (error: VoiceError) => {
        setIsListening(false);
        console.error('Voice error:', error);
    };

    const handleMicPress = () => {
        setIsListening(true);
        setLastVoiceInput('');
    };

    const getWelcomeMessage = () => {
        switch (language) {
            case SupportedLanguage.HINDI:
                return {
                    greeting: "नमस्ते! यह आपका Mandi Saathi है।",
                    message: "आज का सही भाव जानिए और आत्मविश्वास से व्यापार करिए।",
                    values: [
                        { emoji: "💪", text: "आपकी मेहनत" },
                        { emoji: "🤝", text: "सही भाव" },
                        { emoji: "✨", text: "बेहतर कल" }
                    ]
                };
            case SupportedLanguage.ENGLISH:
                return {
                    greeting: "Welcome! This is your Mandi Saathi.",
                    message: "Know today's fair prices and trade with confidence.",
                    values: [
                        { emoji: "💪", text: "Your Hard Work" },
                        { emoji: "🤝", text: "Fair Price" },
                        { emoji: "✨", text: "Better Tomorrow" }
                    ]
                };
            case SupportedLanguage.TAMIL:
                return {
                    greeting: "வணக்கம்! இது உங்கள் Mandi Saathi.",
                    message: "இன்றைய நியாயமான விலையை அறிந்து நம்பிக்கையுடன் வர்த்தகம் செய்யுங்கள்.",
                    values: [
                        { emoji: "💪", text: "உங்கள் உழைப்பு" },
                        { emoji: "🤝", text: "நியாய விலை" },
                        { emoji: "✨", text: "சிறந்த நாளை" }
                    ]
                };
            case SupportedLanguage.BHOJPURI:
                return {
                    greeting: "नमस्कार! ई आपके Mandi Saathi बा।",
                    message: "आज के सही भाव जानीं आ भरोसा से व्यापार करीं।",
                    values: [
                        { emoji: "💪", text: "आपके मेहनत" },
                        { emoji: "🤝", text: "सही भाव" },
                        { emoji: "✨", text: "बेहतर कल" }
                    ]
                };
            default:
                return {
                    greeting: "नमस्ते! यह आपका Mandi Saathi है।",
                    message: "आज का सही भाव जानिए और आत्मविश्वास से व्यापार करिए।",
                    values: [
                        { emoji: "💪", text: "आपकी मेहनत" },
                        { emoji: "🤝", text: "सही भाव" },
                        { emoji: "✨", text: "बेहतर कल" }
                    ]
                };
        }
    };

    const welcomeContent = getWelcomeMessage();

    const getMarketReasoning = (commodity: Commodity) => {
        const priceData = mockPriceData[commodity];
        const changeAbs = Math.abs(priceData.change);

        // Generate contextual reasoning based on market conditions
        if (priceData.trend === 'up' && changeAbs > 5) {
            return `Market avg ₹${priceData.modal}/kg, strong demand (+${priceData.change}%), good time to sell.`;
        } else if (priceData.trend === 'down' && changeAbs > 3) {
            return `Market avg ₹${priceData.modal}/kg, prices falling (${priceData.change}%), hold firm on price.`;
        } else if (priceData.trend === 'stable') {
            return `Market avg ₹${priceData.modal}/kg, steady demand, fair negotiation range.`;
        } else {
            const demandLevel = priceData.trend === 'up' ? 'high' : priceData.trend === 'down' ? 'low' : 'stable';
            return `Market avg ₹${priceData.modal}/kg, nearby mandi demand ${demandLevel}, trending ${priceData.trend}.`;
        }
    };

    const getFairPriceShield = (commodity: Commodity) => {
        const priceData = mockPriceData[commodity];
        const safeMinimum = Math.max(priceData.minimum, priceData.modal - 5);

        return {
            safeMinimum,
            message: `Never sell below ₹${safeMinimum}/kg - AI protects your earnings.`,
            marketAverage: priceData.modal
        };
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 font-hindi">
                            मंडी साथी
                        </h1>
                        <p className="text-sm text-gray-600">AI Trade Companion</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <LanguageSelector
                            selectedLanguage={language}
                            onLanguageChange={setLanguage}
                        />
                    </div>
                </div>
            </div>

            {/* Offline Banner */}
            {isOffline && (
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-b border-orange-200">
                    <div className="max-w-md mx-auto px-4 py-3">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl animate-pulse">📶</div>
                            <div className="flex-1">
                                <p className="text-orange-800 font-semibold font-hindi text-sm">
                                    Network kamzor hai. Cached prices dikh rahe hain.
                                </p>
                                <p className="text-orange-600 text-xs mt-1 font-hindi">
                                    ऑफलाइन मोड - कल का डेटा दिख रहा है
                                </p>
                            </div>
                            <div className="text-orange-600 text-xs">
                                Offline
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Empowering Welcome Banner */}
            <div className="bg-gradient-to-r from-mandi-green to-green-600 text-white relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-4 text-4xl animate-pulse">🌾</div>
                    <div className="absolute bottom-2 left-4 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>🚜</div>
                </div>

                <div className="max-w-md mx-auto px-4 py-4 relative z-10">
                    <div className="flex items-center space-x-3">
                        <div className="text-3xl animate-bounce" style={{ animationDuration: '3s' }}>🙏</div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold font-hindi leading-tight">
                                {welcomeContent.greeting}
                            </h2>
                            <p className="text-green-100 text-sm font-hindi mt-1 leading-relaxed">
                                {welcomeContent.message}
                            </p>
                        </div>
                    </div>

                    {/* Subtle motivational elements */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-green-400 border-opacity-30">
                        <div className="flex items-center space-x-4 text-xs text-green-100">
                            {welcomeContent.values.map((value, index) => (
                                <span key={index} className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
                                    <span>{value.emoji}</span>
                                    <span className="font-hindi">{value.text}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-md mx-auto px-4 py-6 space-y-6 flex-1">

                {/* Vision Mode Toggle */}
                <VisionModeToggle
                    isVisionMode={isVisionMode}
                    onToggle={setIsVisionMode}
                />

                {/* Bharat 2048 Vision Panel */}
                {isVisionMode && (
                    <BharatVision2048Panel language={language} />
                )}

                {/* Voice Interface Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'आज का भाव पूछें' : 'Ask Today\'s Price'}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        {language === SupportedLanguage.HINDI ?
                            'माइक दबाकर फसल का नाम बोलें' :
                            'Press mic and speak commodity name'
                        }
                    </p>
                    <div className="mb-6">
                        <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                            <span>📊</span>
                            <span>Mock Agmarknet Data</span>
                            <span>•</span>
                            <span>Updated 9:10 AM</span>
                        </p>
                    </div>

                    <div onClick={handleMicPress}>
                        <VoiceInterface
                            language={language}
                            onVoiceInput={handleVoiceInput}
                            onError={handleVoiceError}
                            isListening={isListening}
                        />
                    </div>

                    {/* Try Demo Query Button */}
                    <div className="mt-4">
                        <button
                            onClick={() => {
                                setLastVoiceInput(language === SupportedLanguage.HINDI ? 'टमाटर का भाव क्या है' : 'What is tomato price');
                                setSelectedCommodity(Commodity.TOMATO);
                            }}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-sm flex items-center space-x-2 mx-auto"
                        >
                            <span>▶</span>
                            <span className="font-hindi">
                                {language === SupportedLanguage.HINDI ? 'डेमो क्वेरी आज़माएं' : 'Try Demo Query'}
                            </span>
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-1">
                            {language === SupportedLanguage.HINDI ? 'बिना आवाज़ के डेमो देखें' : 'Demo without voice input'}
                        </p>
                    </div>

                    {lastVoiceInput && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800 font-hindi">
                                आपने कहा: "{lastVoiceInput}"
                            </p>
                        </div>
                    )}

                    {/* Default Demo Example Card */}
                    {!lastVoiceInput && selectedCommodity === Commodity.TOMATO && (
                        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <span className="text-lg">🍅</span>
                                    <h3 className="text-lg font-semibold text-green-800 font-hindi">
                                        {language === SupportedLanguage.HINDI ? 'उदाहरण: टमाटर' : 'Example: Tomato'}
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-xl font-bold text-green-700">₹30–₹34/kg</span>
                                        <span className="text-green-600 text-lg">↑</span>
                                    </div>
                                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-green-800 font-hindi mb-1">
                                            {language === SupportedLanguage.HINDI ? 'सुझाया गया विक्रय मूल्य: ₹33/kg' : 'Suggested selling price: ₹33/kg'}
                                        </p>
                                        <p className="text-xs text-green-700 font-hindi">
                                            {language === SupportedLanguage.HINDI ? 'कारण: पास की मंडी औसत ₹32/kg' : 'Reason: Nearby mandi avg ₹32/kg'}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-green-600 mt-2 font-hindi">
                                    {language === SupportedLanguage.HINDI ? 'ऊपर "डेमो क्वेरी आज़माएं" दबाएं या नीचे से अन्य फसल चुनें' : 'Press "Try Demo Query" above or select other commodity below'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Commodity Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-hindi">
                        {language === SupportedLanguage.HINDI ? 'या फसल चुनें:' : 'Or select commodity:'}
                    </label>
                    <CommodityDropdown
                        selectedCommodity={selectedCommodity}
                        onCommodityChange={setSelectedCommodity}
                        language={language}
                    />
                </div>

                {/* Price Display */}
                {selectedCommodity && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 font-hindi">
                            {language === SupportedLanguage.HINDI ? 'आज का भाव:' : 'Today\'s Price:'}
                        </h3>
                        <PriceCard
                            commodity={selectedCommodity}
                            priceData={mockPriceData[selectedCommodity]}
                            language={language}
                            isOffline={isOffline}
                        />

                        {/* AI Suggestion */}
                        <div className="bg-mandi-green bg-opacity-10 border border-mandi-green rounded-lg p-4">
                            <h4 className="font-semibold text-mandi-green mb-2 font-hindi">
                                🤖 AI सुझाव:
                            </h4>
                            <p className="text-sm text-gray-700 font-hindi mb-2">
                                मार्केट औसत ₹{mockPriceData[selectedCommodity].modal}/kg है।
                                <br />
                                ₹{mockPriceData[selectedCommodity].modal - 2} से नीचे मत जाओ।
                                <br />
                                ₹{mockPriceData[selectedCommodity].modal + 1} से शुरू करो।
                            </p>
                            <div className="mt-3 pt-2 border-t border-mandi-green border-opacity-20">
                                <p className="text-xs text-gray-600 font-hindi">
                                    <span className="font-medium">कारण:</span> {getMarketReasoning(selectedCommodity)}
                                </p>
                            </div>
                        </div>

                        {/* Fair Price Shield Info */}
                        {selectedCommodity && (() => {
                            const shield = getFairPriceShield(selectedCommodity);
                            return (
                                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-lg">🛡️</span>
                                        <h5 className="font-semibold text-blue-800 font-hindi text-sm">
                                            Fair Price Shield
                                        </h5>
                                    </div>
                                    <p className="text-xs text-blue-700 font-hindi">
                                        {shield.message}
                                    </p>
                                </div>
                            );
                        })()}

                        {/* Vision Mode Features */}
                        {isVisionMode && selectedCommodity && (
                            <div className="space-y-4">
                                <AIMarketForecast commodity={selectedCommodity} language={language} />
                            </div>
                        )}
                    </div>
                )}

                {/* Vision Mode 2048 Preview Cards */}
                {isVisionMode && (
                    <div className="space-y-4">
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-semibold text-indigo-800 font-hindi mb-2">
                                {language === SupportedLanguage.HINDI ? '2048 पूर्वावलोकन सुविधाएं' : '2048 Preview Features'}
                            </h3>
                            <p className="text-sm text-indigo-600 font-hindi">
                                {language === SupportedLanguage.HINDI ? 'भविष्य की व्यापार तकनीक का अनुभव करें' : 'Experience future trade technology'}
                            </p>
                        </div>

                        {/* Always show these 3 cards in Vision Mode */}
                        <AIMarketForecast commodity={selectedCommodity || Commodity.TOMATO} language={language} />
                        <TrustTraceabilityBadge language={language} />
                        <SmartMandiNetwork language={language} />
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="space-y-3 pt-4">
                    <button
                        onClick={onNavigateToNegotiation}
                        className="w-full bg-mandi-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                        🗣️ {language === SupportedLanguage.HINDI ? 'बातचीत शुरू करें' : 'Start Negotiation'}
                    </button>

                    <button
                        onClick={onNavigateToDashboard}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                        📊 {language === SupportedLanguage.HINDI ? 'सभी भाव देखें' : 'View All Prices'}
                    </button>
                </div>
            </div>

            <Footer isVisionMode={isVisionMode} />
        </div>
    );
};

export default HomeScreen;