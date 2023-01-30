import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // root
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    width: '100%',
    paddingTop: '100%',
    border: '3px dashed black',
    boxSizing: 'border-box',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 8,
      border: '1px dashed black',
    },

    // dropzone
    '& > .MuiDropzoneArea-root': {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      '& > img': {
        width: 50,
      },
      fontSize: 20,
      lineHeight: '27.24px',
      '& > :not(:first-child)': {
        marginTop: 30,
      },
      zIndex: 2,
    },

    '& > .MuiSnackbar-root': {
      display: 'none',
      opacity: 0,
    },

    // upload action board
    '& > .actions': {
      display: 'flex',
      zIndex: 1,
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      '& > img': {
        width: 50,
        '&:first-child:last-child': {
          width: '100%',
        },
      },
      fontSize: 20,
      lineHeight: '27.24px',
      '& > :not(:first-child)': {
        marginTop: 30,
      },
    },

    // description
    '& > :last-child': {
      width: '100%',
      position: 'absolute',
      fontSize: 16,
      lineHeight: '21.79px',
      fontStyle: 'italic',
      transform: 'translate(0, -60px)',
    },
  },
}))
