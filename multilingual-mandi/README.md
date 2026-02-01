# Multilingual Mandi - AI Trade Companion

**Tagline:** AI Trade Companion for Bharat's Local Vendors

## 🎯 Project Overview

A demo-ready React prototype that empowers farmers and small vendors in Indian mandis with:
- **Fair price knowledge** - Real-time market prices for 8 commodities
- **Multilingual negotiation support** - Instant translation between 8 Indian languages  
- **Voice-first usability** - Large mic button for low-literacy users
- **Offline resilience** - Cached data when network fails

## 🚀 Quick Start

```bash
cd multilingual-mandi
npm install
npm start
```

The app will open at `http://localhost:3000`

## 📱 Demo Screens

### 1. Home Screen
- **Empowering welcome banner** with multilingual greetings and motivational elements
- **Large mic button** for voice price queries
- **Language selector** (8 Indian languages)
- **Commodity dropdown** with multilingual names
- **Price card** with trend arrows and AI suggestions
- **Navigation** to negotiation and dashboard

### 2. Negotiation Screen  
- **Demo Negotiation button** - One-click live demonstration
- **Bilingual chat interface** (Hindi ↔ Tamil demo)
- **Real-time translation** with original text shown
- **AI counter-offer panel** with reasoning
- **Fair Price Shield** - protective warnings for low offers
- **Market price reference** in header
- **Voice input button** for hands-free operation

### 3. Vendor Dashboard
- **4 commodity price cards** with trend indicators
- **Offline status banner** with data freshness
- **Recent activity feed** showing negotiations
- **Quick action buttons** for common tasks
- **Summary stats** (price up/down counts)

## 🎭 Demo Negotiation Feature

Perfect for live presentations and demonstrations:

**One-Click Demo:**
- **Automatic Population**: Buyer says "₹25 possible?" → Translated to "क्या ₹25 हो सकता है?"
- **AI Response**: "Counter with ₹29/kg. Do not go below ₹27/kg."
- **Fair Price Shield**: Activates automatically for the low ₹25 offer
- **Visual Feedback**: Loading states and demo indicators

**Demo Flow:**
1. Click "🎭 Demo Negotiation" button
2. Buyer message appears with translation
3. Fair Price Shield warning activates (₹25 is below safe rate)
4. AI suggestion appears with protective guidance
5. Perfect for showcasing all features in 3 seconds

Makes live demonstrations effortless and impressive!

## 🛡️ Fair Price Shield

A protective AI feature that acts as the farmer's guardian during negotiations:

**Home Screen Protection:**
- Shows safe minimum price for each commodity
- *"Never sell below ₹27/kg - AI protects your earnings"*

**Negotiation Protection:**
- **Medium Alert**: Orange warning when offer is below safe minimum
- **High Alert**: Red pulsing warning when offer is significantly low
- **Clear Guidance**: *"Buyer offer is below safe mandi rate. Recommended minimum: ₹27/kg"*
- **Reassurance**: *"🤖 AI आपकी सुरक्षा कर रहा है। इससे कम में न बेचें।"*

The shield calculates safe minimums based on market data and protects farmers from exploitation.

## 🌾 Supported Commodities

8 commodities with realistic mock data:
- **Tomato** (टमाटर) - ₹28-35/kg
- **Onion** (प्याज) - ₹22-28/kg  
- **Potato** (आलू) - ₹18-24/kg
- **Wheat** (गेहूं) - ₹2180-2250/quintal
- **Rice** (चावल) - ₹3200-3450/quintal
- **Chillies** (मिर्च) - ₹85-110/kg
- **Bhindi** (भिंडी) - ₹35-45/kg
- **Banana** (केला) - ₹25-32/dozen

## 🗣️ Language Support

8 Indian languages with native scripts:
- **Hindi** (हिंदी)
- **English** 
- **Tamil** (தமிழ்)
- **Telugu** (తెలుగు)
- **Bengali** (বাংলা)
- **Gujarati** (ગુજરાતી)
- **Marathi** (मराठी)
- **Punjabi** (ਪੰਜਾਬੀ)

## 🤖 AI Features (Mock Implementation)

- **Voice Recognition**: Simulated speech-to-text with commodity detection
- **Price Analysis**: Smart suggestions based on market data with transparent reasoning
- **Negotiation Assistant**: Counter-offer recommendations with detailed explanations
- **Fair Price Shield**: Protective warnings when buyer offers are too low
- **Translation**: Instant multilingual communication bridge
- **Trust Building**: Clear explanations of AI reasoning for transparency

## 🎨 Design Features

- **Empowering messaging**: Respectful Hindi greetings that build confidence
- **Mobile-first**: Optimized for basic Android phones
- **High contrast**: Large fonts and clear visual hierarchy
- **Touch-friendly**: Big buttons and intuitive navigation
- **Offline indicators**: Clear status when network is poor
- **Cultural sensitivity**: Native scripts and local market terminology
- **Subtle animations**: Gentle visual feedback without distraction

## 📊 Mock Data

All data is realistic but simulated:
- **Price data**: Based on actual Agmarknet patterns
- **Market locations**: Real mandi names across India
- **Trends**: Realistic price movements and seasonality
- **Conversations**: Authentic negotiation patterns

## 🛠️ Technical Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Styling**: Mobile-first responsive design
- **Fonts**: Noto Sans Devanagari for multilingual support
- **Build**: Create React App with optimized production build
- **Testing**: Jest + React Testing Library (ready for expansion)

## 🎭 Demo Storyline

*"Sita Devi sells vegetables in Bihar and speaks Bhojpuri. A buyer from Tamil Nadu negotiates in Tamil. Multilingual Mandi translates instantly, shows fair prices, and suggests safe counters. She earns confidently. AI becomes her mandi saathi."*

## 🚧 MVP Scope (Phase 1-4 Complete)

✅ **Phase 1**: Project setup with React + Tailwind  
✅ **Phase 2**: Core data models and mock price dataset  
✅ **Phase 3**: Voice interface foundation with UI components  
✅ **Phase 4**: Three main screens with navigation  

**Not included in MVP:**
- Real backend API integration
- Actual voice recognition (uses mock data)
- Real translation service (shows mock translations)
- PWA offline functionality (shows offline UI states)
- Property-based testing (framework ready)

## 🎯 Key Demo Points

1. **Voice-first interaction** - Press mic, speak commodity name
2. **Multilingual UI** - Switch languages to see native scripts
3. **Price discovery** - Select commodities to see market data
4. **One-click demo** - Instant negotiation demonstration
5. **Transparent AI reasoning** - Clear explanations for all suggestions
6. **Fair Price Shield** - AI protection against unfair buyer offers
7. **Negotiation flow** - Real-time bilingual chat simulation
8. **AI suggestions** - Smart counter-offers with market-based reasoning
9. **Offline resilience** - UI adapts to network status
10. **Mobile optimization** - Works great on phone screens

## 🔮 Future Phases

- **Phase 5-8**: Multilingual translation system
- **Phase 9-10**: AI negotiation assistant with LLM
- **Phase 11-12**: PWA and offline functionality  
- **Phase 13-16**: Security, performance, and testing

---

**Built for every mandi, from Kashmir to Kanyakumari** 🇮🇳