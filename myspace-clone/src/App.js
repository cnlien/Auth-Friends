import React from 'react';

// STYLING
import './styles/global.scss'

import MainHeader from './components/MainHeader/'
import Navigation from './components/Navigation/'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Navigation />
    </div>
  );
}

export default App;
