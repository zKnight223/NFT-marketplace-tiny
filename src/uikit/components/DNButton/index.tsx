import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material/Button'
import { useStyles } from './styles'
import { useSecondButtonStyles } from './styles'

type propTypes = ButtonProps & {
  //children?: any;
  disableTextTransform?: boolean
  className?: string
  kind?: 'default' | 'second'
}

function SecondButton(props: propTypes) {
  const classes = useSecondButtonStyles()
  const { variant = 'contained', children, className, disableTextTransform, ...rest } = props

  return (
    <Button variant={variant} className={classes.root} {...rest}>
      {children}
    </Button>
  )
}

function DefaultButton(props: propTypes) {
  const {
    variant = 'contained',
    children,
    className,
    disableTextTransform = false,
    ...rest
  } = props
  const classes = useStyles()
  const _className = `${className} ${classes.button} ${
    variant === 'contained' ? classes.contained : null
  } ${classes.button} ${variant === 'outlined' ? classes.outlined : null} ${
    disableTextTransform && classes.disableTextTransform
  }`

  return (
    <Button variant={variant} className={_className} {...rest}>
      {children}
    </Button>
  )
}

export default function DNButton(props: propTypes) {
  const { kind = 'default', ...rest } = props
  return <>{kind === 'default' ? <DefaultButton {...rest} /> : <SecondButton {...rest} />}</>
}
