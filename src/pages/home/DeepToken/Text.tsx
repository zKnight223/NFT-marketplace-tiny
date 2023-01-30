import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type TextType = "title" | "subtitle" | "content";
type valueType = { [key in TextType]: string | number };

const fontSize: valueType = { title: 150, subtitle: 18, content: 18 };
const fontWeight: valueType = { title: 700, subtitle: 400, content: 400 };
const lineHeight: valueType = {
  title: "150px",
  subtitle: "28.8px",
  content: "28.8px",
};

const mfontSize: valueType = { title: 40, subtitle: 12, content: 12 };
const mlineHeight: valueType = {
  title: "40px",
  subtitle: "19.2px",
  content: "19.2px",
};

const Text = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "className",
})<{ className: TextType }>(({ theme, className = "title" }) => ({
  fontSize: fontSize[className],
  fontWeight: fontWeight[className],
  lineHeight: lineHeight[className],
  [theme.breakpoints.down("sm")]: {
    fontSize: mfontSize[className],
    lineHeight: mlineHeight[className],
  },
  letterSpacing: 0,
}));

export default Text;
