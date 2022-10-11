import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import './DeletarPostagem.css';
import Postagem from '../../../model/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';

function DeletarPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [post, setPosts] = useState<Postagem>();

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar Logado!');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function sim() {
    navigate('/postagens');

    try {
      await deleteId(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      alert('Postagem deletada com sucesso');
    } catch (error) {
      alert('Erro ao deletar');
    }
  }

  function nao() {
    navigate('/post');
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary">{post?.titulo}</Typography>
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
              <Box>
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
    </>
  );
}

export default DeletarPostagem;