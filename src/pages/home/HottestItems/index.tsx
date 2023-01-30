import fire from 'assets/image/home/fire.png'
import { Box, Grid, Stack } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import { ItemCard } from 'uikit/widgets/Card'
import { useStyles } from './styles'
import Text from './Text'

export default function HottestItems() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Stack direction="row" alignItems="center">
        <Box component="img" src={fire} alt="Home Hottest Hot" />
        <Text className="title">Hottest On The Market</Text>
        <ArrowForwardIos />
      </Stack>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={6} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={6} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={6} xs={12}>
          <ItemCard />
        </Grid>
      </Grid>
    </Box>
  )
}
