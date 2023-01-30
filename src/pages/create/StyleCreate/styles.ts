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
      marginBottom: 35.24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 10,
      },
    },
    '& > .body2': {
      marginBottom: 80,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
      },
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
}))
