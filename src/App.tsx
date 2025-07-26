import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ResultsPage from './components/pages/ResultsPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Navigation from './components/organisms/Navigation';
import { NumbersProvider } from './context/NumbersContext';
import './App.css';

const App: React.FC = () => {
  return (
    <NumbersProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </NumbersProvider>
  );
};

export default App;
