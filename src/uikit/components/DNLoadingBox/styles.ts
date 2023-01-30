import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'not-allowed',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'hidden',
    '& > img': {
      width: '8%',
      pointerEvents: 'none',
      // transform: 'translate(50%, 50%)',
    },
    '& > p': {
      textAlign: 'left',
      backgroundImage:
        'linear-gradient(95.46deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.1) 100%)',
      backgroundSize: '300%',
      backgroundColor: '#FFFFFF00',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      // backgroundSize: '100%',
      animation: 'animated_text 5s ease-in-out infinite',

      maxWidth: '50%',
      fontSize: 'calc(20 * calc(200vw / 1280))',
      position: 'absolute',
      transform: 'translate(0, 150px)',
    },
    '&.show': {
      display: 'flex',
    },
    '&.hidden': {
      display: 'none',
    },
  },
}))
