import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/static/navbar/NavBar';
import Footer from './components/static/footer/Footer';
import Login from './components/login/Login';
import Cadastrar from './components/cadastrar/Cadastrar';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagem/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagem/cadastrarPost/CadastroPost';
import CadastroTema from './components/temas/cadastrarTema/CadastroTema';
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastrar' element={<Cadastrar />} />
            <Route path='/temas' element={<ListaTema />}/>
            <Route path='/postagens' element={<ListaPostagem />}/>
            <Route path='/formularioPostagem' element={<CadastroPost />} />
            <Route path='/formularioPostagem/:id' element={<CadastroPost />} />
            <Route path='/formularioTema/' element={<CadastroTema />} />
            <Route path='/formularioTema/:id' element={<CadastroTema />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
