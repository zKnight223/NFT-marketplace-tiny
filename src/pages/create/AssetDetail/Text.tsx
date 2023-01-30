import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

type TextType = 'title' | 'subtitle' | 'body1' | 'body2'
type valueType = { [key in TextType]: string | number }

const fontWeight: valueType = { title: 700, subtitle: 700, body1: 400, body2: 600 }
const fontSize: valueType = { title: 40, subtitle: 20, body1: 18, body2: 18 }
const lineHeight: valueType = { title: '54px', subtitle: '27px', body1: '29px', body2: '24px' }

const mfontWeight: valueType = { title: 700, subtitle: 700, body1: 400, body2: 400 }
const mfontSize: valueType = { title: 20, subtitle: 16, body1: 14, body2: 14 }
const mlineHeight: valueType = { title: '27px', subtitle: '22px', body1: '23px', body2: '19px' }

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
