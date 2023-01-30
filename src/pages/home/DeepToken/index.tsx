import { Box, Stack } from '@mui/material'
import { useStyles } from './styles'
import Button from 'uikit/components/DNButton'
// import decorCube from "assets/image/home/decor-cube.png";
// import decorDiamond from "assets/image/home/decor-diamond.png";
import { useBaseStyles } from 'assets/theme'
import Text from './Text'
import cloud from 'assets/image/home/cloud.png'

export default function DeepToken() {
  const classes = { ...useStyles(), ...useBaseStyles() }

  return (
    <Box className={classes.root}>
      <Text className="title">DEEP TOKEN</Text>
      <Text className="content">
        Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Dolor purus non enim
        praesent elementum. Massa ultricies mi quis hendrerit. Gravida cum sociis natoque penatibus
        et magnis dis. Vel fringilla est ullamcorper eget. Sed ullamcorper morbi tincidunt ornare
        massa eget egestas. Integer eget aliquet nibh praesent tristique magna sit amet. Massa enim
        nec dui nunc mattis. Accumsan lacus vel facilisis volutpat est velit egestas. Sit amet nisl
        purus in. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Malesuada
        pellentesque elit eget gravida cum sociis natoque penatibus et.
      </Text>
      <Stack direction="row" justifyContent="center">
        <Button
          startIcon={<Box component="img" src={cloud} alt="button icon" />}
          disableTextTransform
        >
          Get Whitepaper
        </Button>
        <Button variant="outlined" disableTextTransform>
          More Details
        </Button>
      </Stack>
    </Box>
  )
}
