import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../model/Tema";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../model/Postagem";
import { busca, buscaId, post, put } from "../../../services/Service";
import { backdropClasses } from "@mui/material/Backdrop";

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você Precisa estar Logado para Postar");
      navigate("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id != undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/tema", setTema, {
      headers: { Authorization: token },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/postagens/${id}`, setPostagem, {
      headers: { Authorization: token },
    });
  }

  function atualizarPostagem(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id != undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: { Authorization: token },
      });
      alert("Postagem atualizada com Sucesso!");
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: { Authorization: token },
      });
      alert("Postagem Cadastrada com Sucesso!");
    }
    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Container maxWidth="sm" className="topo">
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
          onChange={(event: ChangeEvent<HTMLInputElement>) => atualizarPostagem(event)}
          id="titulo"
          label="Titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(event: ChangeEvent<HTMLInputElement>) => atualizarPostagem(event)}
          id="texto"
          label="Texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(event) =>
              buscaId(`/tema/${event.target.value}`, setTema, {
                headers: {'Authorization': token},
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
