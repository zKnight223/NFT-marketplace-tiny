import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type TextType = "title" | "subtitle" | "content";
type valueType = { [key in TextType]: string | number };

const fontSize: valueType = { title: 20, subtitle: 20, content: 15 };
const fontWeight: valueType = { title: 700, subtitle: 400, content: 400 };
const lineHeight: valueType = {
  title: "27.24px",
  subtitle: "27.24px",
  content: "20.43px",
};

const mfontSize: valueType = { title: 14, subtitle: 10, content: 12 };
const mlineHeight: valueType = {
  title: "19.07px",
  subtitle: "13.62px",
  content: "16.34px",
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
