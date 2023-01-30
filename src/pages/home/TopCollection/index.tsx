import { Box, Grid, Stack, Select, MenuItem, Hidden } from '@mui/material'
import Button from 'uikit/components/DNButton'
import { useStyles } from './styles'
import { useBaseStyles } from 'assets/theme'
import Text from './Text'
import auction1 from 'assets/image/temp/auction1.png'

function Collection({ number }: { number: number }) {
  const classes = { ...useStyles(), ...useBaseStyles() }

  return (
    <Box className={classes.collection}>
      <Box>
        <Box className="image" component="img" src={auction1} alt="Collection Image" />
        <Box className="number">
          <Text className="subtitle">{number}</Text>
        </Box>
      </Box>
      <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
        <Stack className="property" justifyContent="space-between">
          <Text className="content">Vitae auctor eu</Text>
          <Text className="content">425.45 ETH</Text>
        </Stack>
        <Text className="subtitle">+83.9%</Text>
      </Stack>
    </Box>
  )
}

export default function TopCollection() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xs={12} display={{ xs: 'flex', md: 'block' }}>
          <Stack className="actions">
            <Text className="title">Top Collections</Text>
            <Box>
              <Select variant="standard" className={classes.select} defaultValue="week">
                <MenuItem value="week">Last 7 Days</MenuItem>
              </Select>
            </Box>
            <Hidden mdDown>
              <Button variant="outlined" disableTextTransform>
                See All
              </Button>
            </Hidden>
          </Stack>
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          {Array.from(Array(4)).map((_, index) => (
            <Collection key={index} number={index + 1} />
          ))}
        </Grid>
        <Grid item lg={4} display={{ lg: 'block', xs: 'none' }}>
          {Array.from(Array(4)).map((_, index) => (
            <Collection key={index} number={index + 5} />
          ))}
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Button variant="outlined" disableTextTransform>
          See All
        </Button>
      </Hidden>
    </Box>
  )
}
