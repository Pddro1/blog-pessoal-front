import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";
import { addToken } from "../../../store/token/Action";
import { toast } from "react-toastify";

function NavBar() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector <TokenState, TokenState['token']>(
    (state) => state.token
  )


  function goLogout() {
    dispatch(addToken(''));
    navigate("/login");
    toast.info('Usuário Deslogado, Volte Sempre ', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  var navbarComponent;

  if(token != ''){
    navbarComponent = <AppBar position="static" className="navbar">
    <Toolbar variant="dense">
      <Box className="logo">
        <Typography variant="h5" color="inherit">
          BlogPessoal
        </Typography>
      </Box>

        <Grid container justifyContent='flex-end'>
        <Box display="flex" justifyContent="start">
          <Link to='/home' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

        <Link to='/postagens' className="text-decorator-none">
          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Postagens
            </Typography>
          </Box>
        </Link>

        <Link to='/temas' className="text-decorator-none">
          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Temas
            </Typography>
          </Box>
        </Link>

          <Link to='/formularioTema' className='text-decorator-none'>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
          </Link>

          <Link to='/perfil' className="text-decorator-none">
            <Box mx={1} className='cursor'>
              <Typography variant='h6' color='inherit'>
                Perfil
              </Typography>
            </Box>
          </Link>

          
            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
        </Box>
        </Grid>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default NavBar;
