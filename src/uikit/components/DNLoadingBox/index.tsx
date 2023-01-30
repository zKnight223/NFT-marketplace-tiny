import { Box, Typography } from '@mui/material'
import { useStyles } from './styles'
import loadingImg from 'assets/image/loading.gif'
import { useEffect } from 'react'

type PropTypes = {
  open: boolean
  msg?: string
  textTransform?: 'none' | 'uppercase' | 'lowercase'
}

export default function DNLoadingBox({ open, msg = '', textTransform = 'none' }: PropTypes) {
  const classes = useStyles()

  useEffect(() => {
    if (open) {
      window.document.body.style.height = '100vh'
      window.document.body.style.overflowY = 'hidden'
    } else {
      window.document.body.style.height = 'auto'
      window.document.body.style.overflowY = ''
    }
  }, [open])

  useEffect(() => {
    return () => {
      window.document.body.style.height = 'auto'
      window.document.body.style.overflowY = ''
    }
  }, [])

  return (
    <Box className={`${classes.root} ${open ? 'show' : 'hidden'}`}>
      <Box component="img" src={loadingImg} alt="loading" />
      <Typography textTransform={textTransform}>{msg}</Typography>
    </Box>
  )
}
