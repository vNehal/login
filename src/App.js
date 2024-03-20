
import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<><LoginSignup/></>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <LoginSignup/>
    // </div>
  );
}

export default App;
