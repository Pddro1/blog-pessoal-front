import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { width } from '@mui/system';
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Postagem from '../../../model/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/token/tokenReducer';
import "./ListaPostagem.css";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

function ListaPostagem() {

  const classes = useStyles();

  let navigate = useNavigate();

  const [postagens, setPostagens] = useState<Postagem[]>([])

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
    )

  useEffect(() => {
    if (token === '') {
      navigate('/login')
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
  }, [token])

  async function getPostagem() {
    await busca('/postagens', setPostagens, {
      headers: {'Authorization': token}
    })
  }

  useEffect(() => {
    getPostagem()
  }, [postagens.length])
  
  return (
    <>
      {postagens.map(postagem => (
        <Box m={2} key={postagem.id} >
        <Card variant="outlined">
          <CardMedia 
            className={classes.media}
            image={postagem.foto}
            />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="body1" component="p">
              Postado por: {postagem.usuario?.nome}
            </Typography>
            <Typography variant="h5" component="h2">
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body1" component="p">
              {postagem.tema?.descricao}
            </Typography>

          </CardContent>
          <CardActions>
            {postagem.usuario?.id === +userId ? (
              <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/editarPost/${postagem.id}`} className="text-decoration-none" >
                <Box mx={1}>
                  <Button variant="contained" size='small' className="atualizar" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/apagarPost/${postagem.id}`} className="text-decoration-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' style={{backgroundColor: 'red'}} >
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
            ) : (
              <></>
            )}
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  )
}

export default ListaPostagem