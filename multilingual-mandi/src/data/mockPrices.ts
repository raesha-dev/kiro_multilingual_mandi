import { Commodity, PriceData } from '../types';

// Mock Agmarknet dataset - realistic price data for 8 commodities
export const mockPriceData: Record<Commodity, PriceData> = {
    [Commodity.TOMATO]: {
        minimum: 28,
        maximum: 35,
        modal: 32,
        unit: '₹/kg',
        market: 'Azadpur Mandi, Delhi',
        lastUpdated: new Date('2024-01-26T09:10:00'),
        trend: 'up',
        change: 8.5
    },
    [Commodity.ONION]: {
        minimum: 22,
        maximum: 28,
        modal: 25,
        unit: '₹/kg',
        market: 'Lasalgaon Mandi, Maharashtra',
        lastUpdated: new Date('2024-01-26T09:15:00'),
        trend: 'down',
        change: -3.2
    },
    [Commodity.POTATO]: {
        minimum: 18,
        maximum: 24,
        modal: 21,
        unit: '₹/kg',
        market: 'Agra Mandi, UP',
        lastUpdated: new Date('2024-01-26T09:05:00'),
        trend: 'stable',
        change: 0.8
    },
    [Commodity.WHEAT]: {
        minimum: 2180,
        maximum: 2250,
        modal: 2215,
        unit: '₹/quintal',
        market: 'Kota Mandi, Rajasthan',
        lastUpdated: new Date('2024-01-26T08:45:00'),
        trend: 'up',
        change: 2.1
    },
    [Commodity.RICE]: {
        minimum: 3200,
        maximum: 3450,
        modal: 3325,
        unit: '₹/quintal',
        market: 'Karnal Mandi, Haryana',
        lastUpdated: new Date('2024-01-26T09:00:00'),
        trend: 'up',
        change: 4.2
    },
    [Commodity.CHILLIES]: {
        minimum: 85,
        maximum: 110,
        modal: 98,
        unit: '₹/kg',
        market: 'Guntur Mandi, Andhra Pradesh',
        lastUpdated: new Date('2024-01-26T08:30:00'),
        trend: 'down',
        change: -6.8
    },
    [Commodity.BHINDI]: {
        minimum: 35,
        maximum: 45,
        modal: 40,
        unit: '₹/kg',
        market: 'Pune Mandi, Maharashtra',
        lastUpdated: new Date('2024-01-26T09:20:00'),
        trend: 'up',
        change: 12.5
    },
    [Commodity.BANANA]: {
        minimum: 25,
        maximum: 32,
        modal: 28,
        unit: '₹/dozen',
        market: 'Jalgaon Mandi, Maharashtra',
        lastUpdated: new Date('2024-01-26T08:55:00'),
        trend: 'stable',
        change: 1.2
    }
};

// Commodity names in different languages
export const commodityNames = {
    [Commodity.TOMATO]: {
        hi: 'टमाटर',
        en: 'Tomato',
        ta: 'தக்காளி',
        te: 'టమాటో',
        bn: 'টমেটো',
        gu: 'ટમેટા',
        mr: 'टोमॅटो',
        pa: 'ਟਮਾਟਰ',
        bho: 'टमाटर'
    },
    [Commodity.ONION]: {
        hi: 'प्याज',
        en: 'Onion',
        ta: 'வெங்காயம்',
        te: 'ఉల్లిపాయ',
        bn: 'পেঁয়াজ',
        gu: 'ડુંગળી',
        mr: 'कांदा',
        pa: 'ਪਿਆਜ਼',
        bho: 'प्याज'
    },
    [Commodity.POTATO]: {
        hi: 'आलू',
        en: 'Potato',
        ta: 'உருளைக்கிழங்கு',
        te: 'బంగాళాదుంప',
        bn: 'আলু',
        gu: 'બટાકા',
        mr: 'बटाटा',
        pa: 'ਆਲੂ',
        bho: 'आलू'
    },
    [Commodity.WHEAT]: {
        hi: 'गेहूं',
        en: 'Wheat',
        ta: 'கோதுமை',
        te: 'గోధుమ',
        bn: 'গম',
        gu: 'ઘઉં',
        mr: 'गहू',
        pa: 'ਕਣਕ',
        bho: 'गेहूं'
    },
    [Commodity.RICE]: {
        hi: 'चावल',
        en: 'Rice',
        ta: 'அரிசி',
        te: 'బియ్యం',
        bn: 'চাল',
        gu: 'ચોખા',
        mr: 'तांदूळ',
        pa: 'ਚਾਵਲ',
        bho: 'चावल'
    },
    [Commodity.CHILLIES]: {
        hi: 'मिर्च',
        en: 'Chillies',
        ta: 'மிளகாய்',
        te: 'మిర్చి',
        bn: 'মরিচ',
        gu: 'મરચું',
        mr: 'मिरची',
        pa: 'ਮਿਰਚ',
        bho: 'मिर्च'
    },
    [Commodity.BHINDI]: {
        hi: 'भिंडी',
        en: 'Bhindi',
        ta: 'வெண்டைக்காய்',
        te: 'బెండకాయ',
        bn: 'ঢেঁড়স',
        gu: 'ભીંડા',
        mr: 'भेंडी',
        pa: 'ਭਿੰਡੀ',
        bho: 'भिंडी'
    },
    [Commodity.BANANA]: {
        hi: 'केला',
        en: 'Banana',
        ta: 'வாழைப்பழம்',
        te: 'అరటిపండు',
        bn: 'কলা',
        gu: 'કેળું',
        mr: 'केळी',
        pa: 'ਕੇਲਾ',
        bho: 'केला'
    }
};