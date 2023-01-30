import { useStyles } from './styles'
import { Card, Stack, CardContent, CardMedia, Box, Typography } from '@mui/material'
import Button from 'uikit/components/DNButton/CardButton'
import { useState } from 'react'
import auction1 from 'assets/image/temp/auction1.png'
import auction2 from 'assets/image/temp/auction2.png'
import auction3 from 'assets/image/temp/auction3.png'
import user1 from 'assets/image/temp/user1.png'
import user2 from 'assets/image/temp/user2.png'
import user3 from 'assets/image/temp/user3.png'

export function AuctionCard() {
  const classes = useStyles()
  const [secondsRemaining] = useState<number>(Math.random() * 86400)

  const image = Math.random()

  const getHour = (): number => {
    return Math.trunc(secondsRemaining / 3600)
  }

  const getMinute = (): number => {
    return Math.trunc((secondsRemaining % 3600) / 60)
  }

  const getSecond = (): number => {
    return Math.trunc(secondsRemaining % 60)
  }

  return (
    <Card className={classes.root}>
      <CardMedia image={image > 0.6 ? auction1 : image > 0.3 ? auction2 : auction3} title="Auction">
        <Box className="timeRemainingBox">
          <Stack direction="row" alignItems="end">
            <Typography className="timeFeature">{getHour()}</Typography>
            <Typography className="timeUnit">H</Typography>
            <Typography className="timeFeature">{getMinute()}</Typography>
            <Typography className="timeUnit">M</Typography>
            <Typography className="timeFeature">{getSecond()}</Typography>
            <Typography className="timeUnit">S</Typography>
          </Stack>
          <Box className="timelineBox">
            <Box
              width={`${(getHour() * 100) / 24}%`}
              className={`timeline ${
                getHour() > 12 ? 'normal' : getHour() > 3 ? 'warning' : 'danger'
              }`}
            />
          </Box>
        </Box>
      </CardMedia>
      <CardContent>
        <Stack justifyContent="space-between" height="100%">
          <Typography className="title">Dignissim enim sit amet</Typography>
          <Stack direction="row" alignItems="center">
            <Box
              component="img"
              src={Math.random() > 0.6 ? user1 : Math.random() > 0.3 ? user2 : user3}
              alt="User Logo"
            />
            <Typography className="owner">Angela Gomez Carlos</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography className="price">Latest Bid:</Typography>
            <Typography className="price" fontWeight="600">
              0.67 ETH
            </Typography>
          </Stack>
          <Button>Place a Bid</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
