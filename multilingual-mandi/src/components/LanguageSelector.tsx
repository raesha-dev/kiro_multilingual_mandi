import React, { useState } from 'react';
import { SupportedLanguage } from '../types';

interface LanguageSelectorProps {
    selectedLanguage: SupportedLanguage;
    onLanguageChange: (language: SupportedLanguage) => void;
}

const languageOptions = [
    { code: SupportedLanguage.HINDI, name: 'हिंदी', englishName: 'Hindi', flag: '🇮🇳' },
    { code: SupportedLanguage.ENGLISH, name: 'English', englishName: 'English', flag: '🇬🇧' },
    { code: SupportedLanguage.TAMIL, name: 'தமிழ்', englishName: 'Tamil', flag: '🇮🇳' },
    { code: SupportedLanguage.TELUGU, name: 'తెలుగు', englishName: 'Telugu', flag: '🇮🇳' },
    { code: SupportedLanguage.BENGALI, name: 'বাংলা', englishName: 'Bengali', flag: '🇮🇳' },
    { code: SupportedLanguage.GUJARATI, name: 'ગુજરાતી', englishName: 'Gujarati', flag: '🇮🇳' },
    { code: SupportedLanguage.MARATHI, name: 'मराठी', englishName: 'Marathi', flag: '🇮🇳' },
    { code: SupportedLanguage.PUNJABI, name: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', flag: '🇮🇳' },
    { code: SupportedLanguage.BHOJPURI, name: 'भोजपुरी', englishName: 'Bhojpuri', flag: '🇮🇳' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    selectedLanguage,
    onLanguageChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = languageOptions.find(lang => lang.code === selectedLanguage);

    return (
        <div className="relative">
            {/* Custom Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-mandi-green focus:border-transparent hover:bg-gray-50 transition-colors"
            >
                <span className="text-base">{selectedOption?.flag}</span>
                <span className="font-hindi text-base">{selectedOption?.name}</span>
                <svg className={`fill-current h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>

            {/* Native Script Badges - Always Visible */}
            <div className="mt-2 flex flex-wrap gap-1">
                {languageOptions.slice(0, 8).map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => {
                            onLanguageChange(lang.code);
                            setIsOpen(false);
                        }}
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${selectedLanguage === lang.code
                                ? 'bg-mandi-green text-white shadow-sm'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        title={lang.englishName}
                    >
                        <span className="font-hindi text-sm">{lang.name}</span>
                    </button>
                ))}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                    {languageOptions.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                onLanguageChange(lang.code);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${selectedLanguage === lang.code ? 'bg-mandi-green bg-opacity-10' : ''
                                }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <div className="flex-1">
                                <div className="font-hindi text-base font-medium">{lang.name}</div>
                                <div className="text-xs text-gray-500">{lang.englishName}</div>
                            </div>
                            {selectedLanguage === lang.code && (
                                <span className="text-mandi-green">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default LanguageSelector;