import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  searchField: {
    border: "none",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 0,
    width: 462.72,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    "& input": {
      color: "#00000059",
      fontSize: 20,
      lineHeight: "28px",
      padding: "10.07px 25.13px 12.07px 25.13px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
        lineHeight: "21px",
        padding: "10px 16px 9px 16px",
      },
    },
    "& button": {
      height: 50.14,
      width: 64.25,
      borderRadius: "20px 0px 0px 20px",
      backgroundColor: theme.palette.secondary.main,
      transform: "scaleX(-1)",
      [theme.breakpoints.down("sm")]: {
        width: 48,
        height: 40,
      },
    },
    "& svg": {
      color: "white",
    },
  },
}));
