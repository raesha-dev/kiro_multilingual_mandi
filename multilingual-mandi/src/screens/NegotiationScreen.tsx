import React, { useState, useRef, useEffect } from 'react';
import { SupportedLanguage, ConversationMessage, NegotiationSuggestion, Commodity } from '../types';
import { mockPriceData } from '../data/mockPrices';
import VisionModeToggle from '../components/VisionModeToggle';
import { TrustTraceabilityBadge } from '../components/VisionComponents';
import Footer from '../components/Footer';
import { useOfflineDetection } from '../hooks/useOfflineDetection';

interface NegotiationScreenProps {
    onBack: () => void;
}

const NegotiationScreen: React.FC<NegotiationScreenProps> = ({ onBack }) => {
    const [vendorLanguage] = useState<SupportedLanguage>(SupportedLanguage.HINDI);
    const [buyerLanguage] = useState<SupportedLanguage>(SupportedLanguage.TAMIL);
    const [messages, setMessages] = useState<ConversationMessage[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [currentSuggestion, setCurrentSuggestion] = useState<NegotiationSuggestion | null>(null);
    const [selectedCommodity] = useState<Commodity>(Commodity.TOMATO);
    const [currentBuyerOffer] = useState<number | null>(25); // Mock current buyer offer
    const [isDemoRunning, setIsDemoRunning] = useState(false);
    const [isVisionMode, setIsVisionMode] = useState(false); // Vision 2048 mode
    const isOffline = useOfflineDetection(); // Automatic offline detection
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const startDemoNegotiation = () => {
        // Clear existing messages first
        setMessages([]);
        setCurrentSuggestion(null);
        setIsDemoRunning(true);

        // Add demo buyer message after a short delay
        setTimeout(() => {
            const demoMessage: ConversationMessage = {
                id: 'demo-1',
                speaker: 'buyer',
                originalText: '₹25 possible?',
                translatedText: 'क्या ₹25 हो सकता है?',
                timestamp: new Date(),
                language: SupportedLanguage.ENGLISH
            };

            setMessages([demoMessage]);

            // Add AI suggestion after another delay
            setTimeout(() => {
                const demoSuggestion: NegotiationSuggestion = {
                    counterOffer: 29,
                    reasoning: 'Counter with ₹29/kg. Do not go below ₹27/kg.',
                    confidence: 0.92,
                    language: SupportedLanguage.HINDI
                };

                setCurrentSuggestion(demoSuggestion);
                setIsDemoRunning(false); // Demo complete
            }, 1000);
        }, 500);
    };

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

    const getFairPriceShield = (commodity: Commodity, buyerOffer: number) => {
        const priceData = mockPriceData[commodity];
        const safeMinimum = Math.max(priceData.minimum, priceData.modal - 5); // Safe minimum is market min or modal-5, whichever is higher
        const isOfferTooLow = buyerOffer < safeMinimum;

        if (isOfferTooLow) {
            return {
                showWarning: true,
                message: `Buyer offer is below safe mandi rate.`,
                recommendation: `Recommended minimum: ₹${safeMinimum}/kg.`,
                severity: buyerOffer < (safeMinimum - 3) ? 'high' : 'medium'
            };
        }

        return { showWarning: false };
    };

    useEffect(() => {
        const initialMessages: ConversationMessage[] = [
            {
                id: '1',
                speaker: 'buyer',
                originalText: '₹25 முடியுமா?',
                translatedText: '₹25 हो सकता है?',
                timestamp: new Date(),
                language: SupportedLanguage.TAMIL
            },
            {
                id: '2',
                speaker: 'vendor',
                originalText: '₹30 चाहिए',
                translatedText: '₹30 வேண்டும்',
                timestamp: new Date(),
                language: SupportedLanguage.HINDI
            },
            {
                id: '3',
                speaker: 'buyer',
                originalText: '₹27 கொடுக்கிறேன்',
                translatedText: '₹27 दे रहा हूं',
                timestamp: new Date(),
                language: SupportedLanguage.TAMIL
            }
        ];

        const initialSuggestion: NegotiationSuggestion = {
            counterOffer: 29,
            reasoning: 'मार्केट औसत ₹32/kg है। ₹27 कम है। ₹29 फेयर प्राइस है।',
            confidence: 0.85,
            language: SupportedLanguage.HINDI
        };

        setMessages(initialMessages);
        setCurrentSuggestion(initialSuggestion);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (!currentInput.trim()) return;

        const newMessage: ConversationMessage = {
            id: Date.now().toString(),
            speaker: 'vendor',
            originalText: currentInput,
            translatedText: `[Tamil: ${currentInput}]`, // Mock translation
            timestamp: new Date(),
            language: vendorLanguage
        };

        setMessages(prev => [...prev, newMessage]);
        setCurrentInput('');

        // Mock buyer response after delay
        setTimeout(() => {
            const buyerResponse: ConversationMessage = {
                id: (Date.now() + 1).toString(),
                speaker: 'buyer',
                originalText: '₹28 ஓகே',
                translatedText: '₹28 ठीक है',
                timestamp: new Date(),
                language: buyerLanguage
            };
            setMessages(prev => [...prev, buyerResponse]);
        }, 2000);
    };

    const handleUseSuggestion = () => {
        if (!currentSuggestion) return;

        setCurrentInput(`₹${currentSuggestion.counterOffer} चाहिए`);
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-md mx-auto px-4 py-3 flex items-center">
                    <button
                        onClick={onBack}
                        className="mr-3 p-2 hover:bg-gray-100 rounded-full"
                    >
                        ←
                    </button>
                    <div className="flex-1">
                        <h1 className="text-lg font-bold text-gray-800 font-hindi">
                            बातचीत - टमाटर
                        </h1>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="flex items-center">
                                🇮🇳 हिंदी
                            </span>
                            <span>↔️</span>
                            <span className="flex items-center">
                                🇮🇳 தமிழ்
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-medium text-mandi-green">
                            Market: ₹{mockPriceData[selectedCommodity].modal}/kg
                        </div>
                        <div className="text-xs text-gray-500">{isOffline ? 'Cached' : 'Live'}</div>
                    </div>
                </div>
            </div>

            {/* Offline Banner */}
            {isOffline && (
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-b border-orange-200">
                    <div className="max-w-md mx-auto px-4 py-2">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg animate-pulse">📶</span>
                            <span className="text-orange-800 font-semibold font-hindi text-sm">
                                Network kamzor hai. Cached prices dikh rahe hain.
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Demo Negotiation Button */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                <div className="max-w-md mx-auto px-4 py-3 space-y-3">
                    {/* Vision Mode Toggle */}
                    <VisionModeToggle
                        isVisionMode={isVisionMode}
                        onToggle={setIsVisionMode}
                    />

                    <button
                        onClick={startDemoNegotiation}
                        disabled={isDemoRunning}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm ${isDemoRunning
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                            }`}
                    >
                        <span>{isDemoRunning ? '⏳' : '🎭'}</span>
                        <span className="font-hindi">
                            {isDemoRunning ? 'Running Demo...' : 'Demo Negotiation'}
                        </span>
                        {!isDemoRunning && <span className="text-xs opacity-75">(Live Demo)</span>}
                    </button>
                    <p className="text-xs text-blue-600 text-center mt-1 font-hindi">
                        Click to see AI negotiation in action
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 max-w-md mx-auto w-full px-4 py-4 space-y-4 overflow-y-auto">
                {isDemoRunning && (
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                            <span className="animate-pulse">🎭</span>
                            <span className="font-hindi">Demo in progress...</span>
                        </div>
                    </div>
                )}

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.speaker === 'vendor' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs px-4 py-3 rounded-lg ${message.speaker === 'vendor'
                                ? 'bg-mandi-green text-white'
                                : 'bg-white text-gray-800 border'
                                }`}
                        >
                            <div className="font-medium font-hindi">
                                {message.speaker === 'vendor' ? message.originalText : message.translatedText}
                            </div>
                            {message.speaker === 'buyer' && (
                                <div className="text-xs text-gray-500 mt-1 italic">
                                    Original: {message.originalText}
                                </div>
                            )}
                            <div className="text-xs opacity-75 mt-1">
                                {formatTime(message.timestamp)}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Fair Price Shield */}
            {currentBuyerOffer && (() => {
                const shield = getFairPriceShield(selectedCommodity, currentBuyerOffer);
                return shield.showWarning ? (
                    <div className={`max-w-md mx-auto w-full px-4 py-3 border-t-2 ${shield.severity === 'high'
                        ? 'bg-red-50 border-red-300'
                        : 'bg-orange-50 border-orange-300'
                        }`}>
                        <div className="flex items-start space-x-3">
                            <div className={`text-2xl ${shield.severity === 'high' ? 'animate-pulse' : ''
                                }`}>
                                🛡️
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                    <h3 className={`font-bold font-hindi ${shield.severity === 'high'
                                        ? 'text-red-800'
                                        : 'text-orange-800'
                                        }`}>
                                        Fair Price Shield
                                    </h3>
                                    <span className="text-lg">⚠️</span>
                                </div>
                                <p className={`text-sm font-hindi mb-2 ${shield.severity === 'high'
                                    ? 'text-red-700'
                                    : 'text-orange-700'
                                    }`}>
                                    {shield.message}
                                </p>
                                <p className={`text-sm font-semibold font-hindi ${shield.severity === 'high'
                                    ? 'text-red-800'
                                    : 'text-orange-800'
                                    }`}>
                                    {shield.recommendation}
                                </p>
                                <div className={`mt-2 pt-2 border-t ${shield.severity === 'high'
                                    ? 'border-red-200'
                                    : 'border-orange-200'
                                    }`}>
                                    <p className={`text-xs font-hindi ${shield.severity === 'high'
                                        ? 'text-red-600'
                                        : 'text-orange-600'
                                        }`}>
                                        🤖 AI आपकी सुरक्षा कर रहा है। इससे कम में न बेचें।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null;
            })()}

            {/* AI Suggestion Panel */}
            {currentSuggestion && (
                <div className="max-w-md mx-auto w-full px-4 py-3 bg-yellow-50 border-t border-yellow-200">
                    <div className="flex items-start space-x-3">
                        <div className="text-2xl">🤖</div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-yellow-800 font-hindi">AI सुझाव:</h3>
                            <p className="text-sm text-yellow-700 font-hindi mt-1">
                                {currentSuggestion.reasoning}
                            </p>
                            <div className="mt-2 pt-2 border-t border-yellow-200">
                                <p className="text-xs text-yellow-600 font-hindi">
                                    <span className="font-medium">कारण:</span> {getMarketReasoning(selectedCommodity)}
                                </p>
                            </div>
                            <button
                                onClick={handleUseSuggestion}
                                className="mt-2 bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700"
                            >
                                ₹{currentSuggestion.counterOffer} भेजें
                            </button>
                        </div>
                        <div className="text-xs text-yellow-600">
                            {Math.round(currentSuggestion.confidence * 100)}% sure
                        </div>
                    </div>
                </div>
            )}

            {/* Vision Mode Trust Badge */}
            {isVisionMode && (
                <div className="max-w-md mx-auto w-full px-4 py-3">
                    <TrustTraceabilityBadge language={vendorLanguage} />
                </div>
            )}

            <Footer isVisionMode={isVisionMode} />

            {/* Input Area */}
            <div className="max-w-md mx-auto w-full px-4 py-3 bg-white border-t">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="अपना जवाब लिखें..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mandi-green font-hindi"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!currentInput.trim()}
                        className="bg-mandi-green text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        भेजें
                    </button>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button className="text-mandi-blue text-sm hover:underline">
                        🎤 Voice
                    </button>
                    <div className="text-xs text-gray-500">
                        Auto-translating to தமிழ்
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NegotiationScreen;