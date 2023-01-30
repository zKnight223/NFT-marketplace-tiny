import { Select, SelectProps, Typography, Box } from "@mui/material";
import { useStyles } from "./styles";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function DNSelect(props: SelectProps) {
  const { children, className, label, fullWidth = true, ...rest } = props;
  const classes = useStyles();

  return (
    <Box width="100%" className={className}>
      <Typography className={classes.label}>{label}</Typography>
      <Select
        className={classes.root}
        IconComponent={() => <KeyboardArrowDown className="MuiSelect-icon" />}
        {...rest}
        fullWidth={fullWidth}
      >
        {children}
      </Select>
    </Box>
  );
}
