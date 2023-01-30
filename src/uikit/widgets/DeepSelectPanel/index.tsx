import { Box } from '@mui/material'
import { useState, MouseEventHandler, useEffect, useContext } from 'react'
import { Web3ModalContext } from 'contexts/Web3ModalProvider'
import useNFTs from 'hooks/useNFTs'
import { useStyles } from './styles'

function NFTItem({
  className,
  onMouseUp,
  image,
}: {
  className: string
  onMouseUp: MouseEventHandler<HTMLDivElement>
  image: any
}) {
  const classes = useStyles()

  return (
    <Box className={`${classes.nftItem} ${className}`} onMouseUp={onMouseUp}>
      <Box width="100%" height="100%" component="img" src={image} alt="NFT image" />
    </Box>
  )
}

export default function DeepSelect({
  collection,
  selectDeep,
}: {
  collection: any
  selectDeep: Function
}) {
  const { connected } = useContext(Web3ModalContext)
  const { deeps } = useNFTs()

  const classes = useStyles()
  const [selectedNFT, selectNFT] = useState<number>(0)

  useEffect(() => {
    if (connected && deeps.length) {
      selectDeep(deeps.at(selectedNFT))
    }
  }, [selectedNFT, connected, deeps, selectDeep])

  return (
    <Box className={classes.root}>
      {deeps.map((deep, index) => (
        <NFTItem
          key={index}
          image={deep.image_url}
          className={`${selectedNFT === index ? 'checked' : null}`}
          onMouseUp={() => selectNFT(index)}
        />
      ))}
    </Box>
  )
}
