import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../model/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/token/tokenReducer';
import "./CadastroTema.css";

function CadastroTema() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar Logado!');
      navigate('/login');
    }
  }, [token]);

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

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if(id !== undefined) {
      try {
        await put('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        alert('Tema atualizado com sucesso')
        navigate('/temas')
      } catch (error) {
        alert('Falha ao atualizar o tema, reveja o nome, por favor')
      }
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        alert('Tema cadastrado com sucesso')
        navigate('/temas')
      } catch (error) {
        alert('Falha ao criar o novo tema, por favor, verifique o nome.')
      }
    }
  }



  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={cadastrar}>
          <Typography variant="h3" component="h1">
            Novo tema
          </Typography>

          <TextField
            label="Nome do tema"
            value={tema.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedModel(event)
            }
            id="descricao"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Box display="flex" justifyContent="space-around">
            <Button type="submit" variant="contained" className='cadastro'>
              Cadastrar
            </Button>
            <Link to="/home" className="text-decoration-none">
              <Button variant="contained" className='cancelar'>
                Cancelar
              </Button>
            </Link>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default CadastroTema;