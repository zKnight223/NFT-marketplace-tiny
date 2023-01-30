import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material/styles'

export const usePlayButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: 64,
      height: 64,
      [theme.breakpoints.down('md')]: {
        width: 32,
        height: 32,
      },
      fill: 'white',
    },
    '&:hover svg': {
      fill: 'currentColor',
    },
  },
}))

export const useCardButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: 16,
    lineHeight: '16px',
    textTransform: 'none',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      borderRadius: 12.75,
      fontSize: 14,
      fontHeight: '14px',
      paddingTop: '11.14px',
      paddingBottom: '9.86px',
    },
  },
}))

export const useSecondButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '14px 26px',
    fontSize: 16,
    lineHeight: '16px',
    background: 'linear-gradient(180deg, #22C18D 0%, #287690 100%)',
    borderRadius: 20,
    textTransform: 'none',
    '& .MuiButton-startIcon': {
      height: 14,
      [theme.breakpoints.down('sm')]: {
        height: 13,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '11.85px 22px',
      fontSize: 13.54,
      lineHeight: '13.54px',
      borderRadius: 17.35,
    },
  },
}))

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: 'white',
    borderRadius: 20.5,
    fontSize: 16,
    lineHeight: '16px',
    padding: '14px 26px 14px 26px',
    width: 'max-content !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '14px',
      padding: '10px 15.5px',
    },
  },
  contained: {
    background: 'linear-gradient(95.89deg, #8000FF, #9C38FF, #8000FF)',
    position: 'relative',
    zIndex: 1,
    '&:before': {
      position: 'absolute',
      borderRadius: 'inherit',
      content: '""',
      width: '100%',
      height: '100%',
      zIndex: -1,
      display: 'inline-block',
      background: `linear-gradient(95.89deg, #8000FF, ${theme.palette.secondary.dark} 16.1%, ${theme.palette.secondary.dark} 82.29%, #8000FF)`,
      opacity: 0,
      transition: 'opacity 0.3s linear',
    },
    '&:hover:before': {
      opacity: 1,
    },
  },
  outlined: {
    borderColor: theme.palette.text.primary,
    '&:hover': {
      // Border gradient with sharp corner
      // border: "1px solid",
      // borderImage: `linear-gradient(110deg, #FFF, #000 60%, ${theme.palette.secondary.main}) 1`,
      border: `solid 1px transparent`,
      backgroundImage: `linear-gradient(${theme.palette.background.default},${theme.palette.background.default}), linear-gradient(95.89deg, #FFF, #000 60%, ${theme.palette.secondary.main})`,
      backgroundClip: `padding-box, border-box`,
      backgroundOrigin: `border-box`,
    },
  },
  disableTextTransform: {
    textTransform: 'none',
  },
}))
