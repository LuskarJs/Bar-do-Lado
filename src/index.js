import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer/Footer';
import HomeAll from './homepage';
import MenuBar from './menu-bar/menuBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './LogineCreate/Create';
import CardapioCompleto from "./Cardapio/CardapioCompleto";
import Login from './LogineCreate/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <MenuBar />
      <Routes>
        <Route path="/" element={<HomeAll />} />
        <Route path="/Criar-Conta" element={<Create />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Cardapio' element={<CardapioCompleto />} />
      </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);

