import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // View root
    paddingTop: 140,
    paddingBottom: 280,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 24,
      paddingBottom: 60,
      '& .MuiGrid-item:not(:first-child)': {
        paddingTop: 0,
      },
    },

    '& .imgBox': {
      width: '100%',
      paddingTop: '100%',
      backgroundColor: 'black',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 15,
      [theme.breakpoints.down('sm')]: {
        borderRadius: 8.75,
      },
      '& > img': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
    },

    '& .details': {
      paddingTop: 30,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 20,
      },
    },

    '& .title': {
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 15,
      },
    },
    '& .subtitle': {
      marginBottom: 9,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 4,
      },
    },
    '& .body1': {
      marginTop: 30,
      [theme.breakpoints.down('sm')]: {
        marginTop: 20,
      },
    },
    '& .body2': {
      marginBottom: 82,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 36,
        fontStyle: 'italic',
      },
    },
    '& button': {
      marginTop: 60,
      [theme.breakpoints.down('sm')]: {
        marginTop: 30,
      },
    },
  },
}))
