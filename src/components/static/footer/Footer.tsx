import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";

function Footer() {

  const token = useSelector <TokenState, TokenState['token']>(
    (state) => state.token
  )

  var footerComponent;

  if(token != ''){
    footerComponent = <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid alignItems="center" item xs={12}>
      <Box className="footer1">
        <Box
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            Me siga nas redes sociais{" "}
          </Typography>
        </Box>
        <Box className="icons" display="flex" justifyContent="center">
          <a
            href="https://www.instagram.com/pdro_camargo/"
            className="icon icon--instagram"
            target="_blank"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-camargo15/"
            className="icon icon--linkedin"
            target="_blank"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a
            href="https://github.com/Pddro1"
            className="icon icon--github"
            target="_blank"
          >
            <i className="ri-github-line"></i>
          </a>
        </Box>
      </Box>
      <Box className="footer2">
        <Box paddingTop={1}>
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            © 2022 Copyright:
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "white" }}
            align="center"
          >
            Pedro Henrique
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;

