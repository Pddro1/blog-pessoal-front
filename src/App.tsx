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
import { Provider } from "react-redux";
import store from "./store/Store";
import Perfil from "./components/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/perfil" element={<Perfil />} />

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
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
