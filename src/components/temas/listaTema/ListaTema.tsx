import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import './ListaTema.css';
import Tema from '../../../model/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

  let navigate = useNavigate();
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    if(token === ''){
      alert('Você precisa estar logado amigo')
      navigate('/login')
    }
  }, [token])

  async function getTemas(){
    await busca('/temas', setTemas, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() => {
    getTemas()
  }, [temas.length])

  return (
    <>
      {temas.map(tema => {
        <Box m={2} >
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
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      })}
    </>
  );
}


export default ListaTema;