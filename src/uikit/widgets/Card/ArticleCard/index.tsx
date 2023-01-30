import { useStyles } from './styles'
import { Card, Stack, CardMedia, Box, Chip, Hidden } from '@mui/material'
import Button from 'uikit/components/DNButton'
import Text from './Text'
import { ArrowForwardIos } from '@mui/icons-material'

import article1 from 'assets/image/temp/article1.png'
import article2 from 'assets/image/temp/article2.png'
import article3 from 'assets/image/temp/article3.png'

export function ArticleCard() {
  const classes = useStyles()
  const image = Math.random()
  const articleClass =
    Math.random() > 0.6 ? 'science' : Math.random() > 0.3 ? 'business' : 'technology'

  return (
    <Card className={classes.root}>
      <CardMedia image={image > 0.6 ? article1 : image > 0.3 ? article2 : article3} title="Auction">
        <Chip label={articleClass} className={`chip ${articleClass}`} />
        <Stack className="shoreSee">
          <Box>
            <Text className="title">Machine Learning effects on cryptocurrencies.</Text>
            <Text className="content">
              Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis...
            </Text>
          </Box>
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            <Text className="subtitle">12 July 2022</Text>
            <Hidden smDown>
              <Button variant="outlined" disableTextTransform>
                Read More
              </Button>
            </Hidden>
            <Hidden smUp>
              <Stack direction="row" spacing={1} alignItems="center">
                <Text className="content">Read More</Text>
                <ArrowForwardIos fontSize="small" />
              </Stack>
            </Hidden>
          </Stack>
        </Stack>
      </CardMedia>
    </Card>
  )
}
