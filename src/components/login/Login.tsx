import React, { ChangeEvent, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../model/UsuarioLogin";
import { login } from "../../services/Service";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/token/Action";

function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch();
  const [token, setToken] = useState('')
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    try{
      await login('usuarios/logar', userLogin, setToken)

      alert('Logado com Sucesso!!!');
    }catch(error){
      alert('Dados do usuário inconsistentes. Erro ao Logar!')
    }
  }

  useEffect(() => {
    if(token !== ''){
      dispatch(addToken(token));
      navigate('/home')
    }
  }, [token])

  return (
    <>
      <Grid
        container
        direction="row-reverse"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box padding={20}>
            <form onSubmit={conectar}>
              <Typography variant="h3">Entrar</Typography>
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userLogin.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userLogin.senha}
                id="senha"
                name='senha'
                label="Senha"
                variant="filled"
                fullWidth
                margin="normal"
                type="password"
              />
              <Box >
                  <Button type="submit" className="botaoLogin">
                    Entrar
                  </Button>
              </Box>
            </form>
            <Box display="flex">
              <Typography>Não tem uma conta?</Typography>
              <Link to="/cadastrar" className="text-decorator-none">
                <Typography style={{marginLeft: '4px', color:'black'}}>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;
