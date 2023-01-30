import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";
import decorCube from "assets/image/decors/decor-cube.png";
import decorDiamond from "assets/image/decors/decor-diamond.png";
import decorEllipse from "assets/image/decors/decor-ellipse1.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorCube})`,
      backgroundSize: "300px 209px",
      backgroundRepeat: "no-repeat",
      width: 300,
      height: 209,
      left: -150,
      zIndex: -1,
      transform: "translate(0px, -44px)",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "95.39px 66.45px",
        width: 95.39,
        height: 66.45,
        left: -57,
        zIndex: -1,
        transform: "translate(0px, -23px)",
      },
    },
    "&:after": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorDiamond})`,
      backgroundSize: "221.98px 296.65px",
      backgroundRepeat: "no-repeat",
      width: 221.98,
      height: 296.65,
      right: -70.6,
      zIndex: -1,
      transform: " translate(0px, -233.4px) rotate(24.21deg)",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "69.7px 93.14px",
        width: 69.7,
        height: 93.14,
        right: -29.38,
        zIndex: -1,
        transform: " translate(0px, -102.14px) rotate(24.21deg)",
      },
    },

    // View root
    textAlign: "center",
    paddingTop: 250.14,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 113,
    },

    // View Title
    "& > .title": {
      marginBottom: 80.71,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 30,
      },
    },

    // View content
    "& > .content": {
      marginBottom: 80.59,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 1180,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 29,
        minWidth: 350,
      },
      position: "relative",

      // Content Decor
      "&:before": {
        position: "absolute",
        content: '""',
        backgroundImage: `url(${decorEllipse})`,
        backgroundSize: "100% 771px",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: 771,
        zIndex: -1,
        transform: " translate(0px, -385px)",
      },
    },

    // View actions
    "& > :last-child > :not(:first-child)": {
      marginLeft: 30.78,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 21.5,
      },
    },
  },
}));
