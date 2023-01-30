import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type TextType = "title" | "subtitle" | "content";
type valueType = { [key in TextType]: string | number };

const fontSize: valueType = { title: 40, subtitle: 20, content: 18 };
const fontWeight: valueType = { title: 600, subtitle: 400, content: 400 };
const lineHeight: valueType = {
  title: "54.47px",
  subtitle: "27.24px",
  content: "24.51px",
};

const mfontSize: valueType = { title: 18, subtitle: 16, content: 16 };
const mfontWeight: valueType = { title: 700, subtitle: 400, content: 400 };
const mlineHeight: valueType = {
  title: "25.2px",
  subtitle: "21.79px",
  content: "21.79px",
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
