import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // Style Select Widget root

    '& .carousel > :not(:first-child)': {
      display: 'none',
    },

    '& .styleItem': {
      width: 150,
      height: 150,
      borderRadius: 7.5,
      overflow: 'hidden',
      cursor: 'pointer',

      '&.checked': {
        border: '2px solid #22BC8D',
        '& svg': {
          position: 'absolute',
          fill: '#22BC8D',
          width: 39,
          height: 39,
          transform: 'translate(-94.5px, 54.5px)',
        },
      },

      '& img': {
        pointerEvents: 'none',
      },

      '&:not(.checked) svg': {
        display: 'none',
      },

      '&:not(:first-child)': {
        marginLeft: 5,
      },
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
