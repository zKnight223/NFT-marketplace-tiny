import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '0 0 30vh 0',
  },
  decor: {
    position: 'absolute',
    minWidth: 300,
    width: '40%',
    zIndex: -1,
    opacity: 0.4,
    transform: 'translate(-8%, -8vh)',
    [theme.breakpoints.down('md')]: {
      right: '0',
      transform: 'translate(0px, -8vh)',
    },
  },
  decorContainer: {
    marginTop: '20vmin',
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dividerHr: {
    width: '100%',
    margin: `0 ${theme.spacing(2)}`,
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  linkAccount: {
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    backgroundColor: '#FFF1',
    borderRadius: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FFF4',
    },
    '&:active': {
      backgroundColor: '#FFF2',
    },
    '&&&:first-child': {
      float: 'left',
    },
    '&&&:last-child': {
      float: 'right',
    },
  },
  textField: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF15',
    '& > input': {
      paddingLeft: theme.spacing(4),
    },
  },
  description: {
    textAlign: 'left',
    fontSize: 40,
    marginBottom: 20,
    backgroundImage: 'linear-gradient(95.46deg, #FFFFFF 0%, rgba(255, 255, 255, 0.27) 100%)',
    backgroundColor: theme.palette.background.default,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '100%',
  },
  icon: {
    color: 'white',
    '&.invisible': {
      transform: 'scaleX(-1)',
    },
  },
  actionBoard: {
    marginTop: '10vh',
    '& > :not(p)': {
      marginTop: theme.spacing(4),
    },
    '& > :nth-child(4)': {
      marginTop: theme.spacing(5),
    },
    '& > :nth-child(5)': {
      marginTop: theme.spacing(3),
    },
  },
}))
