import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 248,
    textAlign: "center",
    "& > .title": {
      marginBottom: 90,
    },
    "& .item": {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 310,
      "& img": {
        width: 190,
        height: 190,
        marginBottom: 37,
      },
      "& > .subtitle": {
        marginBottom: 12,
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 90,
      "& > .title": {
        marginBottom: 40,
      },
      "& > .item": {
        maxWidth: 284,
        "& > :first-child": {
          width: 109.1,
          height: 109.1,
          marginBottom: 15.25,
        },
        "& > .subtitle": {
          marginBottom: 8.66,
        },
        "&:not(:first-child)": {
          marginTop: 40,
        },
      },
    },
  },
}));
