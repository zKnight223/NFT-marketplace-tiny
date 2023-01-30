import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 250,
    width: "100%",
    paddingLeft: theme.spacing(13),
    "& .title": {
      marginBottom: 40.58,
    },
    "& .content": {
      marginBottom: 40.58,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: 90.61,
      width: "100%",
      "& .title": {
        marginBottom: 20.23,
      },
      "& .content": {
        marginBottom: 20,
      },
    },
  },
  textBox: {
    borderRadius: 25,
    padding: "39.77px 63.5px 53.25px 63.5px",
    [theme.breakpoints.down("sm")]: {
      padding: "30.77px 20px 30.43px 20px",
    },
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(100px)",
  },
  videoBox: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      //transform: "translate(-106px, 51.03px)",
      bottom: -51.3,
      left: -106,
    },
    marginTop: 30.45,
  },
}));
