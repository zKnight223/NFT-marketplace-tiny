import { TextField, IconButton } from "@mui/material";
import { useStyles } from "./styles";
import { Search } from "@mui/icons-material";

export default function DNSearchField({ className }: { className?: string }) {
  const classes = useStyles();

  return (
    <TextField
      placeholder="Search NFTs, Creators, ..."
      className={className}
      InputProps={{
        className: classes.searchField,
        endAdornment: (
          <IconButton>
            <Search />
          </IconButton>
        ),
      }}
    />
  );
}
