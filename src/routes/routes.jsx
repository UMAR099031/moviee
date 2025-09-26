import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';  
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import Ticked from '../pages/Ticket/Ticked';
import Bron from '../pages/Bron/Bron';
import OrderDetail from '../pages/OrderDetail/OrderDetail';
import Carty from '../pages/Carty/Carty';
import History from '../pages/Histor/History';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/ticket/:id" element={<Ticked />} />  
      <Route path="/seats/:id" element={<Bron />} />
      <Route path="/detail" element={<OrderDetail />} />
      <Route path="/carty" element={<Carty />} />
        <Route path="/history" element={<History />} /> 
    </Routes>
  )
}

export default AppRoutes
 