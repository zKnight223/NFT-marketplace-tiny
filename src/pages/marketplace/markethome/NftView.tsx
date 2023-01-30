import { Box, Grid } from '@mui/material'
import { ItemCard } from 'uikit/widgets/Card'
import { useNftViewStyles } from './styles'
import { useBaseStyles } from 'assets/theme'
import Pagination from 'uikit/components/DNPagination'

export default function NftView() {
  const classes = { ...useNftViewStyles(), ...useBaseStyles() }

  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ItemCard />
        </Grid>
        <Grid item md={6} display={{ xs: 'none', lg: 'inline-block' }}>
          <ItemCard />
        </Grid>
        <Grid item md={6} display={{ xs: 'none', lg: 'inline-block' }}>
          <ItemCard />
        </Grid>
      </Grid>
      <Pagination count={100} />
    </Box>
  )
}
