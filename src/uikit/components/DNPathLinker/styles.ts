import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    opacity: 0.45,
    marginLeft: theme.spacing(1),
    "& span": {
      textTransform: "uppercase",
    },
    "&:not(:last-child):after": {
      content: '"/"',
      marginLeft: theme.spacing(1),
    },
    "&:last-child": {
      opacity: 1,
    },
  },
}));
