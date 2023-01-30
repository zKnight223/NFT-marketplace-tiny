import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from 'uikit/widgets/Navbar'
import { useStyles } from './styles'
import Footer from './Footer'

type propTypes = {
  children: any
  toggleTheme: boolean
  changeTheme: () => void
}

export default function DNLayout({ children }: propTypes) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Navbar />
      <Container className={classes.content}>{children}</Container>
      <Footer />
    </Box>
  )
}
