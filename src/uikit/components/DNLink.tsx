import { Link } from "react-router-dom";
import { styled, Theme } from "@mui/material";

const DNLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  fontSize: 15,
  lineHeight: 20.43,
  textTransform: "uppercase",
  padding: 0,
  margin: 0,
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16.34px",
  },
}));

export default DNLink;
