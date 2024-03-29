
import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<><LoginSignup/></>} />
        <Route path="/agrospace-home" element={<><Home/></>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <LoginSignup/>
    // </div>
  );
}

export default App;
