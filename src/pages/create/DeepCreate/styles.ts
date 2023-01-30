import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // View root
    paddingTop: 111.5,
    paddingBottom: 209,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 24,
      paddingBottom: 60,
    },
    '& > .title': {
      marginBottom: 117.42,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 10,
      },
    },
    '& > .body2': {
      marginBottom: 15,
    },
    '& #panel': {
      '& > :not(:first-child, :last-child)': {
        marginTop: 40,
        [theme.breakpoints.down('sm')]: {
          marginTop: 25.49,
        },
      },
      '& > :last-child': {
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
          marginTop: 40,
        },
      },
    },
  },
  preview: {
    position: 'fixed',
    width: 150,
    height: 150,
    right: 0,
  },
}))
