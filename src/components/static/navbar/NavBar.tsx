import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./NavBar.css";

function NavBar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário Deslogado");
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static" style={{backgroundColor:'#A85CF9'}}>
        <Toolbar variant="dense">
          <Box className="logo" style={{marginRight: '500px'}}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

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

            
              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            

          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
