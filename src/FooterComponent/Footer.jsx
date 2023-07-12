import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../FooterComponent/Footer.css";
import { Fade } from "react-awesome-reveal";
import FootLogoA from "../assets/FooterImg/logo.png";

const Footer = () => {
  return (
    <>
      <Grid container className="footer-main">
        <Grid
          className="foot-box"
          item
          md={3}
          xs={6}
          sm={12}
          order={{ sm: 1, xs: 2 }}
        >
          <Box className="foot-box1">
            <img className="img1" src={FootLogoA} />
            <Typography className="foot-typ">
              Our Restaurant is one of the most poular restaurant & Special menu
              ade by our passionate chefs
            </Typography>
            <Box className="foot-box-1">
              <Fade delay={1e3} cascade damping={1e-1}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </Fade>
              <Fade delay={1e3} cascade damping={1e-1}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </Fade>
              <Fade delay={1e3} cascade damping={1e-1}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/github--v1.png"
                  alt="github--v1"
                />
              </Fade>
              <Fade delay={1e3} cascade damping={1e-1}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />
              </Fade>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={9}
          xs={6}
          sm={12}
          className="foot-box2"
          order={{ sm: 2, xs: 1 }}
        >
          <Box className="foot-box-2">
            <Typography className="foot-typ1">
              <Fade delay={1e3} cascade damping={1e-1}>
                Restaurant
              </Fade>
            </Typography>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                About Us
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Our Menu
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Book a Table
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Blog Post
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Contact
              </Fade>
            </Link>
          </Box>
          <Box className="foot-box-2">
            <Typography className="foot-typ1">
              <Fade delay={1e3} cascade damping={1e-1}>
                Information
              </Fade>
            </Typography>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Term & Condition
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                24/7 Service
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Style Guide
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Licenses
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                Change Log
              </Fade>
            </Link>
          </Box>
          <Box className="foot-box-2">
            <Typography className="foot-typ1">
              <Fade delay={1e3} cascade damping={1e-1}>
                Contact Info
              </Fade>
            </Typography>
            <Typography className="foot-typ">
              <Fade delay={1e3} cascade damping={1e-1}>
                20 Padam Mohan Colony Station Road Dewas
              </Fade>
            </Typography>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                abhishek.as663@gmail.com
              </Fade>
            </Link>
            <Link>
              <Fade delay={1e3} cascade damping={1e-1}>
                +91 7869407389
              </Fade>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
