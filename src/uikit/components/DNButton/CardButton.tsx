import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { useCardButtonStyles } from "./styles";

type propTypes = ButtonProps & {
  //children?: any;
  disableTextTransform?: boolean;
  className?: string;
};

export default function CardButton(props: propTypes) {
  const { children, className, ...rest } = props;
  const classes = useCardButtonStyles();

  return (
    <Button
      variant="outlined"
      className={`${className} ${classes.root}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
