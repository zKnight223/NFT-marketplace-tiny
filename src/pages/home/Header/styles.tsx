import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";
import decorEllipse from "assets/image/decors/decor-ellipse.png";
import decorItems from "assets/image/decors/decor-items.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "hidden",

    "&:before": {
      position: "absolute",
      backgroundImage: `url(${decorEllipse})`,
      backgroundRepeat: "no-repeat",
      content: '""',
      width: 1922,
      height: 1922,
      right: -681,
      top: -903,
      zIndex: -1,
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        content: '""',
        backgroundSize: "596px 596px",
        width: 596,
        height: 596,
        right: -87,
        top: -253,
        zIndex: -1,
      },
      overflow: "hidden",
    },

    "&:after": {
      position: "absolute",
      backgroundImage: `url(${decorItems})`,
      content: '""',
      backgroundSize: "594.03px 603.03px",
      width: 594.03,
      height: 603.03,
      right: 135,
      top: 195,
      zIndex: -1,
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        backgroundSize: "219.37px 222.7px",
        width: 219.37,
        height: 222.7,
        right: 85.63,
        top: 122.09,
        zIndex: -1,
      },
      overflow: "hidden",
    },

    // View root
    paddingTop: 208,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 239,
    },

    // Page Description Box
    "& > :first-child": {
      marginBottom: 215,
      [theme.breakpoints.down("sm")]: {
        marginBottom: 60.96,
        "& > :last-child": {
          justifyContent: "center",
        },
      },

      // Page Description subtitle
      "& > .subtitle": {
        marginBottom: 20,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 16.5,
        },
      },

      // Page Description Header
      "& > .title": {
        marginBottom: 40,
        maxWidth: 806,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 20,
          maxWidth: 350,
          marginLeft: "auto",
          marginRight: "auto",
        },
      },

      // Page Description Content
      "& > .content": {
        marginBottom: 60,
        maxWidth: 628,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 30,
          maxHeight: 328,
        },
      },

      // actions
      "& > :last-child > :not(:first-child)": {
        marginLeft: 30,
        [theme.breakpoints.down("sm")]: {
          marginLeft: 20.55,
        },
      },
    },

    // social links
    "& > :last-child > :not(:first-child)": {
      marginLeft: 60,
    },
  },
}));
