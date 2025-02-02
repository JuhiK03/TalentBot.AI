import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhiteSection from './components/WhiteSection';
import PurpleSection from './components/PurpleSection';
import Benefits from './components/Benefits';
import Features from './components/Feature';
import FAQs from './components/FAQs';
import './App.css'; // Make sure to include your main CSS file

const App = () => {
  return (
    <div className="App">
      <Header />
      <WhiteSection />
      <PurpleSection />
      <Benefits />
      <Features />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
