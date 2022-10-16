import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../model/Tema';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/token/tokenReducer';

function ListaTemas() {

  let navigate = useNavigate();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar Logado!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/login');
    }
  }, [token]);

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getTemas();
  }, [temas.length]);

  return (
    <>
      <Container>
        {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
        {temas.map((tema) => (
          <Box m={2} key={tema.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  Tema {tema.id} - {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/atualizarTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        className='atualizar'
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        className='deletar'
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default ListaTemas;