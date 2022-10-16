import { Avatar, Container, Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import User from "../../model/User";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/token/tokenReducer";
import "./Perfil.css";

function Perfil() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    if (token == "") {
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
    getUserById(+userId);
  }, []);

  return (
    <>
      <Container>
        <Grid container marginTop={5} direction='row'>
          <Grid xs={3} alignItems="center" justifyContent="center">
            <Avatar
              src={usuario.foto}
              alt="Foto do Usuário"
              className="fPerfil"
            />
            <Typography variant="h5" align="center">
              {usuario.nome}
            </Typography>
          </Grid>
          <Grid xs={9} justifyContent="center">
            <Typography variant="h4" align="center">
              Postagens de {usuario.nome}
            </Typography>
            Você tem um total de {usuario.postagem?.length} postagens feita
            {usuario.postagem?.map((post) => {
              <p>{post.titulo}</p>;
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
