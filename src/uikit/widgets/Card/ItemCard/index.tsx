import { Card, Box, CardMedia, CardContent, Stack } from '@mui/material'
import { useStyles } from './styles'
import Text from './Text'
import Button from 'uikit/components/DNButton'
import decor from 'assets/image/decor.png'
import ether from 'assets/image/ether.png'
import user1 from 'assets/image/temp/user1.png'
import user2 from 'assets/image/temp/user2.png'
import user3 from 'assets/image/temp/user3.png'

//type propTypes = {
//  image: string;
//};

export function ItemCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia image={decor} title="NFT img" />
      <CardContent>
        <Text className="title">AI-X Sound Proccess</Text>
        <Stack className="owner" direction="row" alignItems="center">
          <Box
            component="img"
            src={Math.random() > 0.6 ? user1 : Math.random() > 0.3 ? user2 : user3}
            alt="User Logo"
          />
          <Text className="content">Amanda Johnson</Text>
        </Stack>
        <Stack
          className="action"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <img src={ether} alt="Ether Icon" />
            <Text className="subtitle">2.5 ETH</Text>
          </Stack>
          <Button disableTextTransform>Buy Now</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
