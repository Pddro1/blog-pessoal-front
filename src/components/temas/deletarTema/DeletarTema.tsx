import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../model/Tema";
import { buscaId, deleteId } from "../../../services/Service";

function DeletarTema() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token === "") {
      alert("Denovo???");
      navigate("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>();

  async function temaById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      temaById(id);
    }
  }, [id]);

  function nao() {
    navigate("/temas");
  }

  async function sim() {
    try {
      await deleteId(`/temas/${id}`, {
        headers: { Authorization: token },
      });
      alert("Tema apagado com sucesso.");
      navigate("/temas");
    } catch (error) {
      alert("Erro ao deletar o tema");
      navigate("/temas");
    }
  }

  return (
    <Container>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{tema?.descricao}</Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default DeletarTema;
