import React from "react";
import { Box, Button, FormControlLabel, Grid, RadioGroup, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Cadastrar() {

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box padding={20}>
            <form>
              <Typography variant="h2">Cadastrar</Typography>
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
              <TextField
                id="filled-basic"
                label="E-mail"
                variant="filled"
                fullWidth
                margin="normal"
                type="email"
                
              />
              <TextField
                id="filled-basic"
                label='Data de Nascimento'
                type="date"
                variant="filled"
                fullWidth
                margin="normal"
                InputLabelProps={{shrink: true,}}
              />
              
            </form>
            <Box className="botao">
              <Link to="/login" style={{textDecoration: 'none' }}>
                <Button type="submit" variant="contained" style={{color:'#e0e0e0'}}>
                  Cadastrar
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="bg-c"></Grid>
      </Grid>
    </>
  );
}

export default Cadastrar;
