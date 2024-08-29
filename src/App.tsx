import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';


export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>
    </Router>
  );
};