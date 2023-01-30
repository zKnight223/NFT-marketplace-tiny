import { Box, Stack } from '@mui/material'
// import decor_ellipse from "assets/image/home/decor-ellipse.png";
// import decor from "assets/image/decor.png";
import Button from 'uikit/components/DNButton'
import { useStyles } from './styles'
import Text from './Text'
import Link from 'uikit/components/DNLink'

export default function Header() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box>
        <Text className="subtitle" color="textSecondary">
          NFTs Presents;{' '}
        </Text>
        <Text className="title">The Most Creative marketplace for your AI NFTs</Text>
        <Text className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Stack direction="row">
          <Button disableTextTransform>Get Started</Button>
          <Button variant="outlined" disableTextTransform>
            Explore
          </Button>
        </Stack>
      </Box>
      <Box>
        <Link to="/">facebook</Link>
        <Link to="/">twitter</Link>
        <Link to="/">linkedin</Link>
      </Box>
    </Box>
  )
}
