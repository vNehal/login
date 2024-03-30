
import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store'
import CropForm from './components/CropForm/CropForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<><LoginSignup/></>} />
        <Route path="/agrospace-home" element={<><Home/></>} />
        <Route path="/Pages/Store/Store" element={<><Store/></>} />
        <Route path='Components/CropForm/CropForm' element={<><CropForm/></>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <LoginSignup/>
    // </div>
  );
}

export default App;
