import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";
import decorSphere from "assets/image/decors/decor-sphere.png";
import decorCube1 from "assets/image/decors/decor-cube1.png";
import decorDiamond from "assets/image/decors/decor-diamond.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // View root
    paddingTop: 111.5,
    paddingBottom: 300,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 24,
      paddingBottom: 138,
    },

    // View title
    "& .title": {
      marginBottom: 35.42,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 10,
      },
    },

    // View description
    "& .body1": {
      marginBottom: 80,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 40,
      },
    },
  },
  typeBox: {
    // Type Selection box decors
    "&.nftBox:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorSphere})`,
      backgroundSize: "251px 251px",
      width: 251,
      height: 251,
      right: -80,
      top: -66,
      zIndex: -1,
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "146px 147px",
        width: 146,
        height: 147,
        right: -53,
        top: -51,
      },
    },
    "&.styleBox:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorDiamond})`,
      backgroundSize: "273px 364px",
      width: 273,
      height: 364,
      right: -83.01,
      top: -129.7,
      zIndex: -1,
      transform: "rotate(-13.93deg)",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "122.71px 163.61px",
        width: 122.71,
        height: 163.61,
        right: -35.95,
        top: -56.56,
        transform: "rotate(-13.93deg)",
      },
    },
    "&.remixBox:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorCube1})`,
      backgroundSize: "391px 323px",
      width: 391,
      height: 323,
      right: -165.1,
      top: -96.05,
      zIndex: -1,
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "146px 121px",
        width: 146,
        height: 121,
        right: -63.1,
        top: -20,
      },
    },
    // Type Selection box root
    cursor: "pointer",
    height: 296,
    overflow: "hidden",
    position: "relative",
    padding: 40,
    borderRadius: 15,
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(50px)",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 25.68px 22px",
      width: 342,
      height: 85,
    },

    "& .subtitle": {
      marginBottom: 20,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 6.78,
      },
    },

    "&:hover": {
      backgroundColor: "#FFFFFF60",
    },
    "&:active": {
      backgroundColor: "#FFFFFF50",
    },
  },
}));
