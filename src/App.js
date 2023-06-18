import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Product } from './pages/Product';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
