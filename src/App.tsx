import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/static/navbar/NavBar";
import Footer from "./components/static/footer/Footer";
import Login from "./components/login/Login";
import Cadastrar from "./components/cadastrar/Cadastrar";
import ListaTema from "./components/temas/listaTema/ListaTema";
import ListaPostagem from "./components/postagem/listaPostagem/ListaPostagem";
import CadastroPostagem from "./components/postagem/cadastroPostagem/CadastroPostagem";
import CadastroTema from "./components/temas/cadastrarTema/CadastroTema";
import DeletarPostagem from "./components/postagem/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />

        <Route path="/home" element={<Home />} />

        <Route path="/postagens" element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPostagem />} />
        <Route path="/editarPost/:id" element={<CadastroPostagem />} />
        <Route path="/apagarPost/:id" element={<DeletarPostagem />} />

        <Route path="/temas" element={<ListaTema />} />
        <Route path="/formularioTema/" element={<CadastroTema />} />
        <Route path="/atualizarTema/:id" element={<CadastroTema />} />
        <Route path="/apagarTema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
