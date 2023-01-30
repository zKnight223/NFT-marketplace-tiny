import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type TextType = "title" | "subtitle" | "content";
type valueType = { [key in TextType]: string | number };

const fontSize: valueType = { title: 25, subtitle: 20, content: 15 };
const fontWeight: valueType = { title: 400, subtitle: 600, content: 400 };
const lineHeight: valueType = {
  title: "34.05px",
  subtitle: "27.24px",
  content: "20.43px",
};

const mfontSize: valueType = { title: 14, subtitle: 14, content: 10 };
const mlineHeight: valueType = {
  title: "19.07px",
  subtitle: "19.07px",
  content: "13.62px",
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
