import { Box, Typography, Grid, Hidden, Icon } from "@mui/material";
import { useStyles } from "./styles";
import Logo from "assets/image/logo-text.png";
import { Twitter, Instagram, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import facebook from "assets/image/facebook.png";

function FooterLink({ children, to = "/" }: { children: string; to?: string }) {
  return (
    <Typography component={Link} to={to} className="pageLink">
      {children}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container>
        <Grid item md={6} xs={12} className="footerInfoBox">
          <Box component="img" src={Logo} alt="Footer Logo" />
          <Typography variant="h5">The deepest AI NFT marketplace!</Typography>
          <Box className="socialLinkBox">
            <Icon className="facebook">
              <img src={facebook} alt="Facebook icon" />
            </Icon>
            <Twitter />
            <YouTube />
            <Instagram />
          </Box>
          <Typography>Copyright ©2022 - All rights reserved</Typography>
        </Grid>
        <Hidden mdDown>
          <Grid container item sm={6} xs={false}>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <Typography variant="h5" fontWeight="600">
                  Links
                </Typography>
                <hr />
                <FooterLink>About us</FooterLink>
                <FooterLink>Market Place</FooterLink>
                <FooterLink>FAQ</FooterLink>
              </Grid>
              <Grid item md={4}>
                <Typography variant="h5" fontWeight="600">
                  Links
                </Typography>
                <hr />
                <FooterLink>Blog & News</FooterLink>
                <FooterLink>Top Collection</FooterLink>
                <FooterLink>Contact us</FooterLink>
              </Grid>
              <Grid item md={4} sm={1}>
                <Typography variant="h5" fontWeight="600">
                  Links
                </Typography>
                <hr />
                <FooterLink>Whitepaper</FooterLink>
                <FooterLink>DeepNFT Token</FooterLink>
                <FooterLink>AI</FooterLink>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}
