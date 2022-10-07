import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className='footer1'>
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
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/Pddro1" target="_blank" >
                <GitHubIcon className="github" />
              </a>
              <a href="https://www.instagram.com/pdro_camargo/" target="_blank">
                <InstagramIcon className="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-camargo15/"
                target="_blank"
              >
                <LinkedInIcon className="linkedin" />
              </a>
            </Box>
          </Box>
          <Box className='footer2'>
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
    </>
  );
}

export default Footer;
