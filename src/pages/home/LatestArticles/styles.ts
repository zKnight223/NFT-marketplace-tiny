import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";
import decorSphere from "assets/image/decors/decor-sphere.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // View latest articles root
    paddingTop: 301.7,
    paddingBottom: 161.63,
    "& .title": {
      marginBottom: 50.43,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 90,
      paddingBottom: 111,
      "& .title": {
        marginBottom: 30,
      },
    },

    "& .article": {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "&:after": {
        position: "absolute",
        content: '""',
        backgroundImage: `url(${decorSphere})`,
        width: 271.39,
        height: 271.39,
        left: -127.32,
        // transform: "translate(calc(15vw - 440px), 260px)",
        zIndex: -1,
        [theme.breakpoints.down("md")]: {
          backgroundSize: "122px 122px",
          alignSelf: "end",
          width: 122,
          height: 122,
          left: -77,
          transform: "translate(0, 131px)",
        },
      },
    },

    "& .MuiSvgIcon-root": {
      fill: "white",
      [theme.breakpoints.down("sm")]: {
        width: 15,
        height: 15,
      },
      width: 20,
      height: 20,
    },
  },
}));
