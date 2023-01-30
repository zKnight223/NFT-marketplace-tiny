import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {

    // Card root
    width: "100%",
    borderRadius: 10,
    textAlign: "left",
    boxShadow: "none",
    backgroundColor: "transparent",

    // Card Media root
    "& .MuiCardMedia-root": {
      width: "100%",
      height: "",
      paddingTop: "100%",
      backgroundColor: "transparent",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      position: "relative",

      // Article shortsee
      "& .shoreSee": {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        margin: 20,
        padding: "21px 30.32px 15.73px",
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(80px)",
        [theme.breakpoints.down("md")]: {
          height: 164,
          position: "initial",
          margin: 0,
          transform: "translate(0px, -31px)",
          backdropFilter: "blur(38.7853px)",
          padding: "15px 19px 18px 21px",
          justifyContent: "space-between",
        },

        // Article title
        "& .title": {
          marginBottom: 9.33,
          [theme.breakpoints.down("md")]: {
            marginBottom: 15,
          },
        },

        // Article content
        "& > div > .content": {
          marginBottom: 15.84,
          [theme.breakpoints.down("md")]: {
            marginBottom : 30,
          },
        },
      },

      // Article chip root
      "& .chip": {
        position: "absolute",
        borderRadius: 10,
        top: 0,
        margin: "28px 26px",
        padding: "8.39px, 18.59px, 8.57px, 9.1px",
        fontSize: 15,
        lineHeight: 20.43,
        [theme.breakpoints.down("sm")]: {
          position: "absolute",
          borderRadius: 7.02533,
          margin: 11,
          padding: "5.9px, 12.6px, 6.07px, 6.38px",
          fontSize: 10.54,
          lineHeight: 14.35,
        },
        // chip icon
        "&:before": {
          content: '""',
          borderRadius: "100%",
          marginLeft: 18.82,
          width: 13,
          height: 13,
          [theme.breakpoints.down("sm")]: {
            content: '""',
            borderRadius: "100%",
            marginLeft: 13.2,
            width: 9.12,
            height: 9.13,
          },
        },

        // Chip first letter to be upper
        "& span:first-letter": {
          textTransform: "uppercase",
        },

        // Chip type
        "&.technology": {
          backgroundColor: "#FDD91C33",
          "&:before": {
            backgroundColor: "#FDD91C",
          },
        },
        "&.science": {
          backgroundColor: "#00BB9933",
          "&:before": {
            backgroundColor: "#00BB99",
          },
        },
        "&.business": {
          backgroundColor: "#0094FF33",
          "&:before": {
            backgroundColor: "#0094FF",
          },
        },
      },
    },
  },
}));
