import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 250.92,
    "& > :first-child": {
      marginBottom: 98,
      "& > img": {
        width: 39.21,
        height: 50.39,
      },
      "& > svg": {
        height: 32.09,
        width: 19.82,
        fill: "#9293A1",
      },
      "& > :not(:first-child)": {
        marginLeft: 20,
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 92,
      "& > :first-child": {
        marginBottom: 40,
        "& > :not(first-child)": {
          marginLeft: 10,
          "& > img": {
            width: 19,
            height: 24.41,
          },
          "& > svg": {
            width: 11.06,
            height: 17.91,
            fill: "#9293A1",
          },
        },
      },
    },
  },
}));
