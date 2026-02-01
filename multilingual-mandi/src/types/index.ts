export enum SupportedLanguage {
    HINDI = 'hi',
    ENGLISH = 'en',
    TAMIL = 'ta',
    TELUGU = 'te',
    BENGALI = 'bn',
    GUJARATI = 'gu',
    MARATHI = 'mr',
    PUNJABI = 'pa',
    BHOJPURI = 'bho'
}

export enum Commodity {
    TOMATO = 'tomato',
    ONION = 'onion',
    POTATO = 'potato',
    WHEAT = 'wheat',
    RICE = 'rice',
    CHILLIES = 'chillies',
    BHINDI = 'bhindi',
    BANANA = 'banana'
}

export interface PriceData {
    minimum: number;
    maximum: number;
    modal: number;
    unit: string;
    market: string;
    lastUpdated: Date;
    trend: 'up' | 'down' | 'stable';
    change: number; // percentage change
}

export interface ConversationMessage {
    id: string;
    speaker: 'vendor' | 'buyer';
    originalText: string;
    translatedText: string;
    timestamp: Date;
    language: SupportedLanguage;
}

export interface NegotiationSuggestion {
    counterOffer: number;
    reasoning: string;
    confidence: number;
    language: SupportedLanguage;
}

export interface User {
    id: string;
    name: string;
    preferredLanguage: SupportedLanguage;
    location: string;
    userType: 'vendor' | 'buyer';
}

export interface VoiceError {
    type: 'network' | 'permission' | 'recognition' | 'timeout';
    message: string;
    retryable: boolean;
}