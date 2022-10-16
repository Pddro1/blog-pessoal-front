import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import TabPostagem from "../../components/postagem/tabPostagem/TabPostagem";
import "./Home.css";
import ModalPostagem from "../postagem/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/token/tokenReducer";
import { toast } from "react-toastify";

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  useEffect(() => {
    if (token == "") {
      navigate("/login");
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
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={12} className="grid1">
          <Box paddingX={20} paddingY={20}>
            
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="top"
            >
              Olá Tudo Bem?
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="top"
            >
              Seja Bem Vindo ao meu Espaço
            </Typography>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Link to='/postagens' className='text-decorator-none'>
                <Button variant="contained" className="botaoPost">
                  Ver Postagens
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
