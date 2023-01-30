import { PlayCircleFilledOutlined } from "@mui/icons-material";
import { usePlayButtonStyles } from "./styles";
import { Box, IconButton } from "@mui/material";

export default function PlayButton() {
  const classes = usePlayButtonStyles();

  return (
    <Box className={classes.root}>
      <IconButton>
        <PlayCircleFilledOutlined />
      </IconButton>
    </Box>
  );
}
