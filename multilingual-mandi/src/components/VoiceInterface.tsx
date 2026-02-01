import React, { useState, useCallback } from 'react';
import { SupportedLanguage, VoiceError } from '../types';

interface VoiceInterfaceProps {
    language: SupportedLanguage;
    onVoiceInput: (text: string, confidence: number) => void;
    onError: (error: VoiceError) => void;
    isListening: boolean;
}

const VoiceInterface: React.FC<VoiceInterfaceProps> = ({
    language,
    onVoiceInput,
    onError,
    isListening
}) => {
    const [isSupported] = useState(
        'webkitSpeechRecognition' in window || 'SpeechRecognition' in window
    );

    const handleMicClick = useCallback(() => {
        if (!isSupported) {
            onError({
                type: 'recognition',
                message: 'Voice recognition not supported in this browser',
                retryable: false
            });
            return;
        }

        // Mock voice input for demo - in real app this would use Web Speech API
        const mockInputs = {
            [SupportedLanguage.HINDI]: 'टमाटर का भाव क्या है',
            [SupportedLanguage.ENGLISH]: 'What is tomato price',
            [SupportedLanguage.TAMIL]: 'தக்காளி விலை என்ன',
            [SupportedLanguage.TELUGU]: 'టమాటో ధర ఎంత',
            [SupportedLanguage.BENGALI]: 'টমেটোর দাম কত',
            [SupportedLanguage.GUJARATI]: 'ટમેટાની કિંમત કેટલી છે',
            [SupportedLanguage.MARATHI]: 'टोमॅटोची किंमत काय आहे',
            [SupportedLanguage.PUNJABI]: 'ਟਮਾਟਰ ਦੀ ਕੀਮਤ ਕੀ ਹੈ',
            [SupportedLanguage.BHOJPURI]: 'टमाटर के भाव का बा'
        };

        // Simulate voice recognition delay
        setTimeout(() => {
            onVoiceInput(mockInputs[language] || mockInputs[SupportedLanguage.ENGLISH], 0.95);
        }, 1500);
    }, [isSupported, language, onVoiceInput, onError]);

    return (
        <div className="flex flex-col items-center space-y-4">
            <button
                onClick={handleMicClick}
                disabled={isListening}
                className={`
          w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl
          transition-all duration-200 shadow-lg
          ${isListening
                        ? 'bg-red-500 animate-pulse scale-110'
                        : 'bg-mandi-green hover:bg-green-600 hover:scale-105'
                    }
          ${!isSupported ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
                aria-label="Voice input"
            >
                {isListening ? '🔴' : '🎤'}
            </button>

            <div className="text-center">
                <p className="text-lg font-medium text-gray-700">
                    {isListening ? 'सुन रहा हूं...' : 'बोलने के लिए दबाएं'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    {isListening ? 'Listening...' : 'Press to speak'}
                </p>
            </div>

            {!isSupported && (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                    <p className="text-sm">Voice recognition not available in this browser</p>
                </div>
            )}
        </div>
    );
};

export default VoiceInterface;