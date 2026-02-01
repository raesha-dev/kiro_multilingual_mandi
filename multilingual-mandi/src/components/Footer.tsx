import React from 'react';

interface FooterProps {
    isVisionMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisionMode = false }) => {
    return (
        <footer className={`border-t mt-auto ${isVisionMode
            ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white border-indigo-800'
            : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
            }`}>
            <div className="max-w-md mx-auto px-4 py-4">
                <div className="text-center space-y-2">
                    {isVisionMode ? (
                        <>
                            <div className="flex items-center justify-center space-x-2">
                                <span className="text-sm font-medium">
                                    AI for Every Mandi. Every Bhasha. Every Seller.
                                </span>
                            </div>
                            <div className="text-xs leading-relaxed font-hindi">
                                Building Bharat's Trade Companion for 2048 🇮🇳
                            </div>
                            <div className="flex items-center justify-center space-x-1 text-xs pt-1 text-indigo-200">
                                <span>🚀</span>
                                <span>Future-ready trade infrastructure</span>
                                <span className="text-yellow-300 animate-pulse">✨</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-center space-x-2">
                                <span className="text-sm font-medium text-gray-700">
                                    Built for Viksit Bharat
                                </span>
                                <span className="text-lg animate-pulse" style={{ animationDuration: '2s' }}>
                                    🇮🇳
                                </span>
                            </div>
                            <div className="text-xs text-gray-600 font-hindi leading-relaxed">
                                AI for Every Mandi. Every Bhasha. Every Seller.
                            </div>
                            <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 pt-1">
                                <span>🤖</span>
                                <span>Made with</span>
                                <span className="text-red-500 animate-pulse">❤️</span>
                                <span>for Bharat's farmers</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;