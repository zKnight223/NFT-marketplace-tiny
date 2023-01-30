import { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Grid, Box } from '@mui/material'
import Button from 'uikit/components/DNButton'
import LoadingBox from 'uikit/components/DNLoadingBox'
import { Web3WrapperContext } from 'contexts/Web3WrapperProvider'
import { useStyles } from './styles'
import Text from './Text'

const AssetDetail = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { metadata /*token*/ } = state as any
  const { web3Wrapper } = useContext(Web3WrapperContext)
  const [tokenId, setTokenId] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (state == null) navigate('/create')
  }, [state, navigate])

  useEffect(() => {
    const getTokenId = async () => {
      const _tokenId = (await web3Wrapper?.defaultDeep.totalSupply()) as number
      setTokenId(_tokenId)
      setLoading(false)
    }

    if (!tokenId) getTokenId()
  }, [web3Wrapper, tokenId, setTokenId])

  return (
    <>
      <LoadingBox open={loading} />
      <Box className={classes.root}>
        <Grid container spacing={15}>
          <Grid item xs={12} md={6}>
            <Box className="imgBox">
              <Box component="img" src={metadata?.image} alt="asset" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="details">
              <Text className="title">{metadata?.name}</Text>
              <Text className="body2">By: unknown</Text>
              <Text className="subtitle">Details</Text>
              <hr />
              <Text className="body1">{metadata?.description}</Text>
              <Text className="body1">Token ID: #{tokenId}</Text>
              <Button kind="second">List Asset</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AssetDetail
