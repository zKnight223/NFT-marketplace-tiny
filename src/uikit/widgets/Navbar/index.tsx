import { AppBar, Toolbar, CssBaseline, Select, MenuItem, Stack, Hidden } from '@mui/material'
import { Link } from 'react-router-dom'
import navigations from 'config/navigations'
import Logo from 'assets/image/logo-text.png'
import Button from 'uikit/components/DNButton'
import DrawerComponent from './DrawerComponent'
import { useStyles } from './styles'
import { useLocation } from 'react-router-dom'
import WalletConnectBtn from './WalletConnectBtn'

export default function Navbar() {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <AppBar position="static" className={classes.appbar}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={Logo} alt="Navbar Logo" className={classes.logo} />
        </Link>
        <Hidden smUp>
          <DrawerComponent />
        </Hidden>
        <Hidden smDown>
          <Stack direction="row" spacing={2}>
            {navigations.map((navigation, index) => (
              <Link
                to={navigation.route}
                color="primary"
                className={classes.link}
                key={navigation.key}
              >
                {navigation.name}
              </Link>
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            {pathname.includes('/create') ? (
              <WalletConnectBtn />
            ) : (
              <Button variant="contained" disableTextTransform>
                <Link to="/login" className={classes.link}>
                  Login/Sign up
                </Link>
              </Button>
            )}

            <Select defaultValue="en" variant="standard" className={classes.select}>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </Stack>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
