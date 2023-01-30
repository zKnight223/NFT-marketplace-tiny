import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 20,
    "&.MuiFilledInput-root": {
      backgroundColor: "#FFFFFF4D",
      borderRadius: 15,
      "&:before": {
        border: 0,
      },
      "&:hover:before": {
        border: 0,
      },
    },
    "& .MuiInputBase-Input": {
      padding: 0,
    },
    "& > fieldset": {
      borderColor: "white",
    },
    "& > svg": {
      cursor: "pointer",
      marginRight: 24,
    },
    "& .MuiSelect-select": {
      padding: "17px 24.12px 17px !important",
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiSelect-select": {
        fontSize: 12,
        padding: "11px 15px 11px !important",
      },
    },
  },
  label: {
    fontSize: 20,
    lineHeight: "27.24px",
    marginBottom: 15,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      lineHeight: "21.79px",
      marginBottom: 10,
    },
  },
}));
