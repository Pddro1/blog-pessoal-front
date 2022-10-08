import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Grid >
       <AppBar position="static" style={{backgroundColor:'#A85CF9'}}>
        <Toolbar variant="dense">
          <Box>
            <Typography variant="h6" color="inherit">
              Blog Pessoal
            </Typography>
          </Box>

          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="start">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Link to='/temas' className="text-decorator-none">
                  <Typography variant="h6" color="inherit">
                    Temas
                  </Typography>
                </Link>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Temas
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Link to="/login" className="text-decorator-none">
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
    </>
  );
}

export default NavBar;
