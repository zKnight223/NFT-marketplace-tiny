import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

export const useNftViewStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 160.75,
    paddingBottom: 71.45,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 60,
      paddingBottom: 90.88,
    },
    '& .MuiPagination-root': {
      marginTop: 121.6,
      [theme.breakpoints.down('sm')]: {
        marginTop: 52.12,
      },
    },
  },
}))

export const useAuctionViewStyles = makeStyles((theme: Theme) => ({
  content: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100vw - max(140px, 20%)) !important',
    },
  },
  root: {
    paddingTop: 80.42,
    paddingBottom: 74,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
      paddingBottom: 30,
    },
    '& .MuiCard-root': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& > .title': {
      fontWeight: 600,
      fontSize: 40,
      lineHeight: '54.47px',
      marginBottom: 79.42,
      paddingLeft: 'max(70px, 10%)',
      paddingRight: 'max(70px, 10%)',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        marginBottom: 30,
        fontSize: 18,
        lineHeight: '25px',
      },
    },
    textAlign: 'center',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FFFFFF19',
    },
  },
}))

export const useCollectionViewStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 224.03,
    paddingBottom: 160.84,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 100,
      paddingBottom: 60,
    },
    '& > :first-child': {
      marginBottom: 140.31,
      [theme.breakpoints.down('md')]: {
        marginBottom: 0,
        '& > *': {
          marginBottom: 30,
        },
      },
    },
    '& .buttonGroup': {
      '& button:hover': { backgroundColor: '#98553850' },
      '& button.active': {
        backgroundColor: '#98553880',
      },
    },
    '& .buttonGroup > :not(:first-child)': {
      marginLeft: 20.45,
    },
    '& .MuiCard-root': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export const useHeaderViewStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'left',
    paddingTop: 131.61,
    '& > :first-child': {
      marginBottom: 39.92,
    },
    '& > :nth-child(2)': {
      marginBottom: 60.3,
      fontSize: 60,
      lineHeight: '84px',
      fontWeight: 700,
      maxWidth: 840.39,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      '& > :first-child': {
        marginBottom: 25.09,
      },
      '& > :nth-child(2)': {
        marginBottom: 30,
        fontSize: 25,
        lineHeight: '35px',
        width: 350,
      },
    },
  },
}))
