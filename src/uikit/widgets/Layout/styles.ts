import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "clip",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "max(70px, 10%)",
      marginRight: "max(70px, 10%)",
      maxWidth: "calc(100% - max(20%, 140px))",
      padding: 0,
    },
    width: "100%",
  },
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    paddingTop: 90,
    paddingBottom: 67.03,
    paddingLeft: "max(70px, 10%)",
    paddingRight: "max(70px, 10%)",
    [theme.breakpoints.down("md")]: {
      paddingTop: 40.91,
      paddingBottom: 40,
    },

    // Footer Logo, Info, Social Linker, Issue
    "& .footerInfoBox": {
      // Logo
      "& > :first-child": {
        width: 194.55,
        height: 80.95,
        marginBottom: 31.18,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 20,
        },
      },

      // Social sites link
      "& .socialLinkBox": {
        marginTop: 58.71,
        marginBottom: 100,
        [theme.breakpoints.down("sm")]: {
          marginTop: 38,
          marginBottom: 40.73,
        },

        "& > *": {
          fontSize: 24,
          [theme.breakpoints.down("sm")]: {
            fontSize: 15,
          },
        },
        "& > :not(:first-child)": {
          marginLeft: 46,
          [theme.breakpoints.down("sm")]: {
            marginLeft: 33,
          }
        },

        // Facebook Letter
        "& .facebook": {
          fontWeight: 600,
          fontSize: 21,
          [theme.breakpoints.down("sm")]: {
            fontSize: 15,
          },
        },
      },

      // Issue info
      "& > :last-child": {
        fontSize: 15,
        lineHeight: "20.43px",
        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
          lineHeight: "13.62px",
        },
      },
    },
    
    // Typography
    "& h5": {
      fontSize: 20,
      lineHeight: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        lineHieght: "12px",
      },
    },

    // Horizontal bar
    "& hr": {
      width: 25.05,
      margin: 0,
      marginTop: 20.48,
    },    

    // Page Links
    "& .pageLink": {
      textDecoration: "none",
      color: theme.palette.text.primary,
      display: "block",
      marginTop: 30,
    },
  },
  
}));
