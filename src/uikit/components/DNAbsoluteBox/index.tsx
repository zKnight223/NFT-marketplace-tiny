import { Box } from "@mui/material";
import useElementRect from "hooks/useElementRect";
import { useStyles } from "./styles";

export default function DNAbsoluteBox({ children }: { children: any }) {
  const { rect, ref } = useElementRect();
  const classes = useStyles();

  return (
    <Box width="100%">
      <Box
        ref={ref}
        position="absolute"
        width="100%"
        left={0}
        className={classes.root}
      >
        {children}
      </Box>
      <Box height={rect?.height} width="1"></Box>
    </Box>
  );
}
