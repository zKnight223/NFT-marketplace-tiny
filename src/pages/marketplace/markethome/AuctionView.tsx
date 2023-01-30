import { Box, Typography, IconButton, Stack, Hidden } from '@mui/material'
import { AuctionCard } from 'uikit/widgets/Card'
import { useAuctionViewStyles } from './styles'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import AbsoluteBox from 'uikit/components/DNAbsoluteBox'
// import Carousel from 'react-material-ui-carousel'

export default function AuctionView() {
  const classes = useAuctionViewStyles()

  return (
    <AbsoluteBox>
      <Box className={classes.root}>
        <Typography className="title" variant="h2">
          Today's Auctions
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" overflow="hidden">
          <IconButton className={classes.iconButton}>
            <ArrowLeft fontSize="large" />
          </IconButton>
          <Stack flexDirection="row" alignItems="center" className={classes.content}>
            {/* <Carousel> */}
            <Hidden mdDown>
              <AuctionCard />
            </Hidden>
            <AuctionCard />
            {/* <AuctionCard /> */}
            {/* </Carousel> */}
          </Stack>
          <IconButton className={classes.iconButton}>
            <ArrowRight fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </AbsoluteBox>
  )
}
