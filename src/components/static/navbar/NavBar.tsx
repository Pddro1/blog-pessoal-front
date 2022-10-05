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
import { Box } from "@mui/material";
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
    <div id="nav" color="secondary">
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <div id="left">
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Box mx={1} style={{ cursor: "pointer" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6" className="home">
                  Home
                </Typography>
              </Link>

            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              
                <Typography variant="h6" className="postagem">
                  Postagens
                </Typography>
              
            </Box>

            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" className="temas">
                Temas
              </Typography>
            </Box>
          </div>

          <div id="right">
            {auth && (
              <div className="perfil">
                <Box>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
