import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    display: "flex",

    // Card root
    maxWidth: 680,
    height: 253.09,
    borderRadius: 15,
    background: "linear-gradient(107.56deg, #392B77 71.17%, #985538 100%)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 390,
      height: 129,
      borderRadius: 7.65,
      boxShadow: "0px 0px 5.09704px rgba(0, 0, 0, 0.25)",
    },

    // Card Media
    "& > .MuiCardMedia-root": {
      width: 187.3,
      height: "100%",
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {
        width: 105,
      },
    },

    // Card Content
    "& > .MuiCardContent-root": {
      
      // Card Content root
      width: "calc(100% - 187.3px)",
      padding: "33.1px 40.21px 30px 30.96px",
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 105.3px)",
        padding: "14px 12.92px 8px 17.25px",
      },

      // Card Content title
      "& > .title": {
        marginBottom: 39.45,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 10,
        },
      },

      // Card [NFT Owner]
      "& > .owner": {
        marginBottom: 39.44,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 18,
        },
        "& > img": {
          width: 40,
          height: 40,
          borderRadius: "100%",
          marginRight: 10.08,
          [theme.breakpoints.down("sm")]: {
            width: 30,
            height: 30,
            borderRadius: "100%",
            marginRight: 7,
          },
        },
      },

      // Card [NFT Price & Bid Btn]
      "& > .action": {
        "& img": {
          width: 18.54,
          height: 30.19,
          [theme.breakpoints.down("sm")]: {
            width: 12.95,
            height: 21.1,
          },
        },
        "& .subtitle": {
          fontStyle: "italic",
          marginLeft: 12.11,
          [theme.breakpoints.down("sm")]: {
            fontStyle: "italic",
            marginLeft: 6.55,
          },
        },
        [theme.breakpoints.down("sm")]: {
          "& button": {
            padding: "7.14px 17px",
            fontSize: 12,
            lineHeight: "12px",
          },
        },
      },
    },
  }
}));
