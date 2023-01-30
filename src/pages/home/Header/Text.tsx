import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type TextType = "title" | "subtitle" | "content";
type valueType = { [key in TextType]: string | number };

const fontSize: valueType = { title: 50, subtitle: 18, content: 18 };
const fontWeight: valueType = { title: 700, subtitle: 400, content: 400 };
const lineHeight: valueType = {
  title: "70px",
  subtitle: "25.2px",
  content: "32.4px",
};

const mfontSize: valueType = { title: 20, subtitle: 12, content: 14 };
const mfontWeight: valueType = { title: 700, subtitle: 400, content: 400 };
const mlineHeight: valueType = {
  title: "28px",
  subtitle: "16.8px",
  content: "21px",
};

const Text = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "className",
})<{ className: TextType }>(({ theme, className = "title" }) => ({
  fontSize: fontSize[className],
  fontWeight: fontWeight[className],
  lineHeight: lineHeight[className],
  [theme.breakpoints.down("sm")]: {
    fontSize: mfontSize[className],
    fontWeight: mfontWeight[className],
    lineHeight: mlineHeight[className],
  },
  letterSpacing: 0,
}));

export default Text;
