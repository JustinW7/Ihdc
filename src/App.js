import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Join from './components/Join';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
