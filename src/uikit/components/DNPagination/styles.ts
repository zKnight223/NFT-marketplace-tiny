import type { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& ul": {
      justifyContent: "center",
    },
  },
  pagenationItem: {
    "&.Mui-selected": { border: "1.13902px solid #985538" },
  },
}));
