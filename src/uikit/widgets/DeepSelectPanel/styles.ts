import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    borderRadius: 15,
    flexWrap: 'wrap',
    // justifyContent: 'center',
    overflow: 'hidden',
    width: 'fit-content',
    border: `1px dashed ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('sm')]: {
      borderRadius: 8.74,
    },
  },
  nftItem: {
    display: 'inline-block',
    cursor: 'pointer',
    width: 146,
    height: 146,
    overflow: 'hidden',
    padding: 2.5,

    [theme.breakpoints.down('sm')]: {
      width: 85.06,
      height: 85.06,
    },
    '& img': {
      pointerEvents: 'none',
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      width: 12,
      height: 12,
      borderRadius: '100%',
      border: '2px solid white',
      background: 'transparent',
      transform: 'translate(-23px, 11px)',
      [theme.breakpoints.down('sm')]: {
        width: 10.49,
        height: 10.49,
        transform: 'translate(-16.15px, 4.66px)',
      },
    },
    '&.checked:after': {
      backgroundColor: 'white',
      border: 0,
    },
  },
}))
