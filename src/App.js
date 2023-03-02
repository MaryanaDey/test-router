import React from 'react';
import Home from "./components/Home/home"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/auth/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
