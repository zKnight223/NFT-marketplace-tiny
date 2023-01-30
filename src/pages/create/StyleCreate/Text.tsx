import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

type TextType = 'title' | 'subtitle' | 'body1' | 'body2'
type valueType = { [key in TextType]: string | number }

const fontWeight: valueType = { title: 700, subtitle: 700, body1: 400, body2: 400 }
const fontSize: valueType = { title: 40, subtitle: 30, body1: 20, body2: 25 }
const lineHeight: valueType = { title: '22px', subtitle: '40.85px', body1: '22px', body2: '20px' }

const mfontWeight: valueType = { title: 700, subtitle: 700, body1: 400, body2: 400 }
const mfontSize: valueType = { title: 18, subtitle: 16, body1: 14, body2: 14 }
const mlineHeight: valueType = {
  title: '24.51px',
  subtitle: '21.79px',
  body1: '22px',
  body2: '22px',
}

const Text = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'className' && prop !== 'transform',
})<{ className?: TextType; transform?: 'none' | 'uppercase' | 'lowercase' }>(
  ({ theme, className = 'body1', transform = 'none' }) => ({
    // set text-transform
    textTransform: transform,

    // set font attributes
    fontSize: fontSize[className],
    fontWeight: fontWeight[className],
    lineHeight: lineHeight[className],
    [theme.breakpoints.down('sm')]: {
      fontSize: mfontSize[className],
      fontWeight: mfontWeight[className],
      lineHeight: mlineHeight[className],
    },
    letterSpacing: 0,
  })
)

export default Text
