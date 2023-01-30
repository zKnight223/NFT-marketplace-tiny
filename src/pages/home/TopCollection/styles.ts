import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";
import decorWave from "assets/image/decors/decor-wave.png";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${decorWave})`,
      width: 442.36,
      height: 442.36,
      left: 0,
      transform: "translate(calc(15vw - 440px), 260px)",
      zIndex: -1,
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "155px 155px",
        width: 155,
        height: 155,
        left: 0,
        transform: "translate(-78px, 467px)",
      },
    },

    // View root
    paddingTop: 253.74,
    "& .actions > :not(:first-child)": {
      marginTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 90.46,
      "& .actions": {
        marginTop: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 33,
      },
      "& .actions > :not(:first-child)": {
        marginTop: 0,
      },
    },
  },

  // Collection Item root
  collection: {
    width: "100%",
    paddingTop: 20.5,
    paddingBottom: 20.5,
    display: "flex",

    // Collection has bottom border unless the first
    "&:not(:first-child)": {
      borderTop: "1px solid black",
    },

    // Collection
    "& .subtitle:not(:first-child)": {
      color: "green",
    },

    // Collection Image
    "& .image": {
      backgroundColor: "#FFF2",
      width: 80,
      height: 80,
      marginRight: 20,
      [theme.breakpoints.down("md")]: {
        width: 60,
        height: 60,
        marginRight: 14,
      },
      borderRadius: 4,
    },

    // Collection info
    "& .property": {
      height: "80%",
      "& > :first-child": {
        fontWeight: 600,
      },
    },

    // Collection number
    "& .number": {
      "& > :first-child": {
        fontWeight: 700,
      },
      position: "absolute",
      transform: "translate(33px, -57px)",
      [theme.breakpoints.down("md")]: {
        transform: "translate(27px, -40px)",
      },
    },
  },

  // Customized Select
  select: {
    "&:before": {
      border: 0,
    },
    "& > .MuiInput-input": {
      textDecoration: "underline",
      textUnderlinePosition: "under",
    },
    fontSize: 20,
    lineHeight: "27.24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "19.07px",
    },
  },
}));
