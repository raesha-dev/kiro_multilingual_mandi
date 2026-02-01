import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import NegotiationScreen from './screens/NegotiationScreen';
import VendorDashboard from './screens/VendorDashboard';

type Screen = 'home' | 'negotiation' | 'dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onNavigateToNegotiation={() => setCurrentScreen('negotiation')}
            onNavigateToDashboard={() => setCurrentScreen('dashboard')}
          />
        );
      case 'negotiation':
        return (
          <NegotiationScreen
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'dashboard':
        return (
          <VendorDashboard
            onBack={() => setCurrentScreen('home')}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigateToNegotiation={() => setCurrentScreen('negotiation')}
            onNavigateToDashboard={() => setCurrentScreen('dashboard')}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
