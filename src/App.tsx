import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};