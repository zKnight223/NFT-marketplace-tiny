import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    [theme.breakpoints.up("md")]: {
      margin: 0,
      paddingLeft: "max(70px, 10%)",
      paddingRight: "max(70px, 10%)",
    },
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: theme.palette.primary.light,
    boxShadow: "none",
    position: "sticky",
    top: "0",
    zIndex: 1000,
  },
  toolbar: {
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    width: "fit-content",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  select: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
    "&& > svg": {
      color: theme.palette.primary.main,
    },
  },
}));
