import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import LoginRegister from './pages/LoginRegister';
import VerAsistencias from './pages/VerAsistencias';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      
      <Routes>
        <Route 
          path="/" 
          element={!isAuthenticated ? 
            <LoginRegister setIsAuthenticated={setIsAuthenticated} /> : 
            <Navigate to="/home" />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/home" />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/asistencias" 
          element={isAuthenticated ? <VerAsistencias /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
