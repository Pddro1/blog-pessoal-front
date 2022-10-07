import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import User from "../../model/User";
import { cadastroUsuario } from "../../services/Service";
import './Cadastrar.css'


function Cadastrar() {

  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  const [userCadastrar, setUserCadastrar] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(event.target.value)
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUserCadastrar({
      ...userCadastrar,
      [event.target.name]: event.target.value
    })
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    if(confirmarSenha == userCadastrar.senha){
      cadastroUsuario('usuarios/cadastrar', userCadastrar, setUserResult)
      
      alert('Cadastrado com Sucesso!')
    }
    else{
      alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
    }
  }

  useEffect(() => {
    if(userResult.id !== 0){
      navigate('/login')
    }
  }, [userResult])

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box padding={10}>
            <form onSubmit={conectar}>
              <Typography variant="h2">Cadastre-se</Typography>
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userCadastrar.nome}
                id="nome"
                name="nome"
                label='Digite seu Nome'
                variant="filled"
                fullWidth
                margin="normal"/>
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userCadastrar.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userCadastrar.senha}
                id="senha"
                name="senha"
                label="Senha"
                variant="filled"
                fullWidth
                margin="normal"
                type="password"
              />
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                value={confirmarSenha}
                id="confirmarSenha"
                name="confirmarSenha"
                label='Confirmar a Senha'
                variant="filled"
                fullWidth
                margin="normal"
                type='password'
              />
            <Box className="botao">
                <Link to='/login' className='text-decorator-none'>
                  <Button variant='contained' color='secondary'>
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
            </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={6} className="bg-c"></Grid>
      </Grid>
    </>
  );
}

export default Cadastrar;
