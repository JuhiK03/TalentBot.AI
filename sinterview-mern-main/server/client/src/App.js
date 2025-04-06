import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhiteSection from './components/WhiteSection';
import PurpleSection from './components/PurpleSection';
import Benefits from './components/Benefits';
import Features from './components/Feature';
import FAQs from './components/FAQs';
import InterviewPage from './components/InterviewPage';
import ResultsPage from './components/ResultsPage';
import StartPage from './components/StartPage';
import WelcomePage from './components/WelcomePage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <WhiteSection />
              <PurpleSection />
              <Benefits />
              <Features />
              <FAQs />
              <Footer />
              <Link to="/welcome">
                <button className="demo-interview-btn">Demo Interview</button>
              </Link>
            </>
          } />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;