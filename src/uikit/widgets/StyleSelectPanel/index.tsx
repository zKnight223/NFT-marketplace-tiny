import { Box, Stack, Typography, Tooltip } from '@mui/material'
import { useStyles } from './styles'
import Carousel from 'react-material-ui-carousel'
import { useCallback, useEffect, useState } from 'react'
import { CheckCircle } from '@mui/icons-material'
import useNFTs from 'hooks/useNFTs'

type SlidePropsType = {
  offset: number
  selectStyle: Function
  selected: number
}

function Slide({ offset, selectStyle, selected }: SlidePropsType) {
  const { styles } = useNFTs()

  return (
    <Stack direction="row" justifyContent="space-between">
      {styles.map((style, index) =>
        index >= offset && index < offset + 3 ? (
          <Tooltip title={style.name} placement="bottom" key={index}>
            <Box
              className={`styleItem ${selected === index ? 'checked' : null}`}
              onClick={() => selectStyle(index)}
            >
              <Box
                width="100%"
                height="100%"
                component="img"
                src={style.image_url}
                alt="Style Image"
              />
              <CheckCircle />
            </Box>
          </Tooltip>
        ) : null
      )}
    </Stack>
  )
}

export default function StyleSelect({ setStyle }: { setStyle: Function }) {
  const [styleIndex, setStyleIndex] = useState<number>(0)
  const classes = useStyles()
  const { styles } = useNFTs()

  const Slides = useCallback(() => {
    let slideMap: Array<any> = []
    for (let index = 0; index < styles.length; index += 3) {
      slideMap.push(
        <Slide key={index} offset={index} selected={styleIndex} selectStyle={setStyleIndex} />
      )
    }
    return slideMap
  }, [styles, styleIndex, setStyleIndex])

  useEffect(() => {
    setStyle(styles[styleIndex])
  }, [styles, setStyle, styleIndex])

  return (
    <Box className={classes.root} width="100%">
      <Typography className={classes.label}>Select Style Vector:</Typography>
      <Carousel
        className="carousel"
        animation="slide"
        autoPlay={false}
        cycleNavigation
        PrevIcon={null}
        NextIcon={null}
      >
        {/* <Slide offset={0} /> */}
        {Slides()}
      </Carousel>
    </Box>
  )
}
