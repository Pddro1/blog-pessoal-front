import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
            <form>
              <Typography variant="h3">Entrar</Typography>
              <TextField
                id="filled-basic"
                label="Usuário"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                id="filled-basic"
                label="Senha"
                variant="filled"
                fullWidth
                margin="normal"
                type="password"
              />
              <Box className="botao">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Entrar
                  </Button>
                </Link>
              </Box>
            </form>
            <Box display="flex">
              <Typography>Não tem uma conta?</Typography>
              <Link to="/cadastrar" style={{ textDecoration: "none" }}>
                <Typography>Cadastre-se</Typography>
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
