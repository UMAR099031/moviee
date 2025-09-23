import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';  
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import Ticked from '../pages/Ticket/Ticked';
import Bron from '../pages/Bron/Bron';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/ticket/:id" element={<Ticked />} />  
      <Route path="/seats/:id" element={<Bron />} />
    </Routes>
  )
}

export default AppRoutes
