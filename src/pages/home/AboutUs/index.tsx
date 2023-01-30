import { Box, Grid } from '@mui/material'
import { useStyles } from './styles'
import Button from 'uikit/components/DNButton'
import { useBaseStyles } from 'assets/theme'
import about from 'assets/image/temp/about.png'
import useElementRect from 'hooks/useElementRect'
import PlayButton from 'uikit/components/DNButton/PlayButton'
import Text from './Text'

export default function AboutUs() {
  const classes = { ...useStyles(), ...useBaseStyles() }
  const { rect: boxRect, ref: boxRef } = useElementRect<HTMLDivElement>()

  return (
    <Box className={classes.root}>
      <Box className={classes.textBox}>
        <Grid container>
          <Grid ref={boxRef} item sm={6} xs={12} order={{ xs: 2, sm: 1 }}>
            <Box className={classes.videoBox} position="relative">
              <Box component="img" width={boxRect?.width} src={about} alt="About us Link video" />
              <PlayButton />
            </Box>
          </Grid>
          <Grid item sm={6} xs={12} order={{ xs: 1, sm: 2 }}>
            <Text className="title">About us</Text>
            <Text className="content">
              Lacinia quis vel eros donec. Pretium quam vulputate dignissim suspendisse in est ante
              in. Ac turpis egestas maecenas pharetra convallis. A diam sollicitudin tempor id.
              Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Sodales neque
              sodales ut etiam.
            </Text>
            <Button disableTextTransform>Get Started</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
