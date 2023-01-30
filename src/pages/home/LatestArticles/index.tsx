import { Box, Grid, Stack, Hidden, IconButton } from '@mui/material'
import { ArticleCard } from 'uikit/widgets/Card/ArticleCard'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'
import { useStyles } from './styles'
import Text from './Text'

export default function LatestArticles() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Stack>
            <Text className="title">Latest NFT Articles</Text>
            <Hidden mdDown>
              <Stack direction="row" mb="10vw" alignItems="center">
                <Text className="subtitle">All Articles</Text>
                <ArrowForwardIos fontSize="small" />
              </Stack>
            </Hidden>
            <Box className="article">
              <Hidden mdUp>
                <IconButton>
                  <ArrowBackIos fontSize="small" />
                </IconButton>
              </Hidden>
              <ArticleCard />
              <Hidden mdUp>
                <IconButton>
                  <ArrowForwardIos fontSize="small" />
                </IconButton>
              </Hidden>
            </Box>
          </Stack>
        </Grid>
        <Grid item md={6} display={{ xs: 'none', md: 'inline-block' }}>
          <Stack spacing={6} mb={8}>
            <ArticleCard />
            <ArticleCard />
          </Stack>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
          <Text className="subtitle">All Articles</Text>
          <ArrowForwardIos fontSize="small" />
        </Stack>
      </Hidden>
    </Box>
  )
}
