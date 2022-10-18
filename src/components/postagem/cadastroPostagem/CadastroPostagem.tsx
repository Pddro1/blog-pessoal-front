import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import Tema from "../../../model/Tema";
import User from "../../../model/User";
import { busca, buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/token/tokenReducer";

function CadastroPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )
  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    foto: '',
    tema: null,
    usuario: null
  });

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  })

  useEffect(() => {
    if (token === "") {
      navigate("/login");
      toast.warn('Você Precisa estar Logado!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }, [token]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario
    });
  }, [tema]);

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {'Authorization': token,},
    });
  }

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {'Authorization': token,},
    });
  }

  function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/postagens`, postagem, setPostagem, {
          headers: {'Authorization': token,},
        });
        toast.success('Postagem Atualizada com Sucesso!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } catch (error) {
        toast.error('Erro ao Atualizar, Tente Novamente!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } else {
      try {
        await post(`/postagens`, postagem, setPostagem, {
          headers: {'Authorization': token,},
        });
        toast.success('Postagem Realizada', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } catch (error) {
        toast.error('Erro ao Postar, Verifique os Campos!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    }
    navigate("/postagens");
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Fazer um novo Post
          </Typography>

          <TextField
            value={postagem.titulo}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)}
            id="titulo"
            label="Titulo"
            variant="filled"
            name="titulo"
            margin="normal"
            fullWidth
          />

          <TextField
            value={postagem.texto}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)}
            id="texto"
            label="Texto"
            name="texto"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField value={postagem.foto}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)}
            id='foto'
            label='Insira uma foto como url'
            name='foto'
            variant='filled'
            margin='normal'
            fullWidth
            />

          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(event) =>
                buscaId(`/temas/${event.target.value}`, setTema, {
                  headers: { 'Authorization': token,},
                })
              }
            >
              {temas.map((item) => (
                <MenuItem value={item.id} style={{ display: "block" }}>
                  {item.descricao}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button
              type="submit"
              variant="contained"
              className='atualizar'
            >
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default CadastroPostagem;
