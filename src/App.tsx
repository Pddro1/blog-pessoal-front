import React from 'react';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/static/navbar/NavBar';
import Footer from './components/static/footer/Footer';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastrar from './components/cadastrar/Cadastrar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastrar' element={<Cadastrar />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
