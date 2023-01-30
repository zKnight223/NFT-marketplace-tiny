import { Grid, Box, Stack } from '@mui/material'
import { useStyles } from './styles'
import { useNavigate, useLocation } from 'react-router-dom'
import Text from './Text'

type TypeBoxPropsType = { children: any; className: string; path?: string }

function TypeBox({ children, className, path = '/' }: TypeBoxPropsType) {
  const classes = useStyles()
  const { pathname } = useLocation()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${pathname}${path}`)
  }

  return (
    <Stack justifyContent="end" className={`${classes.typeBox} ${className}`} onClick={handleClick}>
      {children}
    </Stack>
  )
}

export default function TypeSelect() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Text className="title">Create New AI NFT</Text>
      <Text className="body1">Select Your Type</Text>
      <Grid container spacing={4} mt={5}>
        <Grid item xs={12} md={4}>
          <TypeBox className="nftBox" path="/deepnft">
            <Text className="subtitle" transform="uppercase">
              deep nft
            </Text>
            <Text className="body2">Import Your Current NFT</Text>
          </TypeBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <TypeBox className="styleBox" path="/style">
            <Text className="subtitle" transform="uppercase">
              style vector
            </Text>
            <Text className="body2">Upload a local file</Text>
          </TypeBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <TypeBox className="remixBox">
            <Text className="subtitle" transform="uppercase">
              deep remix
            </Text>
            <Text className="body2">Use DeepNFT to create new NFT</Text>
          </TypeBox>
        </Grid>
      </Grid>
    </Box>
  )
}
