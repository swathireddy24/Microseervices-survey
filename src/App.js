import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Survey from './survey';
import Team from './Team';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Navigate replace to="/team" />} />
        <Route path="*" element={<Navigate replace to="/team" />} />
      </Routes>
    </Router>
  );
}

export default App;
