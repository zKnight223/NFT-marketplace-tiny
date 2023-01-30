import { Grid, Box, Typography, TextField, IconButton, Hidden } from '@mui/material'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import Button from 'uikit/components/DNButton'
import { useBaseStyles } from 'assets/theme'
import decor from 'assets/image/decor.png'
import google from 'assets/image/login/google.png'
import facebook from 'assets/image/login/facebook.png'
import apple from 'assets/image/login/apple.png'
import { useStyles } from './styles'
import { useState } from 'react'

export default function Login() {
  const classes = { ...useStyles(), ...useBaseStyles() }
  const [passwordVisibility, setpasswordVisibility] = useState(false)

  return (
    <Box className={classes.root}>
      <Grid container spacing={8}>
        <Grid item md={7} xs={12} className={classes.decorContainer}>
          <img src={decor} alt="Login Decor" className={classes.decor} />
          <Typography className={classes.description}>
            Sign in to access to milions of AI NFTs
          </Typography>
          <Hidden mdDown>
            <Typography mb={6}>Don't have an account?</Typography>
            <Button variant="outlined" disableTextTransform>
              Register
            </Button>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={5} className={classes.actionBoard}>
          <Hidden mdDown>
            <Typography>Sign In</Typography>
          </Hidden>
          <TextField
            InputProps={{ className: classes.textField }}
            placeholder="Email Address"
            fullWidth
          />
          <TextField
            InputProps={{
              className: classes.textField,
              endAdornment: (
                <IconButton onClick={() => setpasswordVisibility(!passwordVisibility)}>
                  {passwordVisibility ? (
                    <VisibilityOutlined className={classes.icon} />
                  ) : (
                    <VisibilityOffOutlined className={`${classes.icon} invisible`} />
                  )}
                </IconButton>
              ),
            }}
            placeholder="Password"
            type={passwordVisibility ? 'text' : 'password'}
            fullWidth
          />
          <Box className={classes.inline}>
            <Typography>Forget password?</Typography>
            <Button disableTextTransform>Log in</Button>
          </Box>
          <Box className={classes.inline}>
            <hr className={classes.dividerHr} />
            OR
            <hr className={classes.dividerHr} />
          </Box>
          <Box className={classes.inline}>
            <img src={google} className={classes.linkAccount} alt="Link Google Account" />
            <img src={apple} className={classes.linkAccount} alt="Link Apple Account" />
            <img src={facebook} className={classes.linkAccount} alt="Link Facebook Account" />
          </Box>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Typography>Don't have an account?</Typography>
        <Button variant="outlined" disableTextTransform>
          Register
        </Button>
      </Hidden>
    </Box>
  )
}
