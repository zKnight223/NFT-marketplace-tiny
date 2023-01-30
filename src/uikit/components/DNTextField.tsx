import { TextField, TextFieldProps, Theme, Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF4D',
    padding: 0,
    '& > input, textarea': {
      padding: '17px 20px 18px',
      fontSize: 18,
      lineHeight: '24.51px',
      [theme.breakpoints.down('md')]: {
        padding: '12px 20px',
        fontSize: 14,
        lineHeight: '19.07px',
      },
    },
    '& > textarea': {
      minHeight: 150,
    },
  },
  label: {
    fontSize: 20,
    lineHeight: '27.24px',
    marginBottom: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '21.79px',
      marginBottom: 10,
    },
  },
}))

export default function DNTextField(props: TextFieldProps) {
  const classes = useStyles()
  const { className, label, InputProps, ...rest } = props

  return (
    <Box className={className}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      <TextField
        InputProps={{
          className: classes.textField,
          ...InputProps,
        }}
        {...rest}
      />
    </Box>
  )
}
