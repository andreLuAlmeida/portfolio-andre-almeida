import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReceituarioDigital from './pages/projetos/ReceituarioDigital';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/receituario-digital" element={<ReceituarioDigital />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
      <Footer />
    </Router>
  );
}
