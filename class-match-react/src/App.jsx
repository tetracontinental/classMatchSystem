import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import SchedulePage from './pages/SchedulePage';
import RankingPage from './pages/RankingPage';
import LoginPage from './pages/LoginPage';
import './index.css'; // Import the global CSS

function App() {
  return (
    <Router basename="/classMatchSystem">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Other routes will be added here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
