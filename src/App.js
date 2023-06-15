import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Product } from './pages/Product';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
