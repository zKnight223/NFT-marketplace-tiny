import { useEffect, useState, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Box, Stack, MenuItem, Hidden } from '@mui/material'

import TextField from 'uikit/components/DNTextField'
import Button from 'uikit/components/DNButton'
import Select from 'uikit/components/DNSelect'
import StyleSelect from 'uikit/widgets/StyleSelectPanel'
import DeepSelect from 'uikit/widgets/DeepSelectPanel'
import LoadingBox from 'uikit/components/DNLoadingBox'

import { Web3WrapperContext } from 'contexts/Web3WrapperProvider'
import { getProof } from 'blockchain/utils'
import { getCurrentBlockTimestamp } from 'utils/blockchain'
import { dataURLtoFile } from 'utils/image'
import { saveAssetToIpfs } from 'utils/filecoin'
import { renderRuneFromFile } from 'rune'
import { useStyles } from './styles'
import Text from './Text'

// import useCollections from 'hooks/useNFTs'

export default function DeepCreate() {
  const classes = useStyles()
  const navigate = useNavigate()

  const [rendering, setRendering] = useState<boolean>(false)
  const [renderingCaption, setCaption] = useState<string>('') // Caption displayed as NFT is rendering
  const [deep, selectDeep] = useState<any | null>(null)
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [style, setStyle] = useState<any | null>(null)
  const { web3Wrapper } = useContext(Web3WrapperContext)
  // const { collections } = useCollections()
  // const [collection, setCollection] = useState()

  useEffect(() => {
    if (deep) {
      setName(deep?.name)
      setDescription(deep?.description)
    }
  }, [deep])

  const handleCreation = useCallback(async () => {
    setRendering(true)
    setCaption('Generating Deep')

    const bytes: Uint8Array = await getProof(style)

    const renderedBase64: string = await renderRuneFromFile(deep.image_url, bytes)
    const defaultRendered: File = dataURLtoFile(renderedBase64)

    setCaption('Uploading To IPFS')

    const { tokenURI, metadata } = await saveAssetToIpfs(
      name,
      description,
      web3Wrapper?.account!,
      await getCurrentBlockTimestamp(),
      deep.token_id, // parent token_id
      bytes,
      defaultRendered
    )

    setCaption('Making Transaction')

    const txHash = await web3Wrapper?.factory.createNewAsset(tokenURI)
    if (!txHash) {
      console.log('Error', 'Create Transaction Error')
      return
    }
    console.log('Success', `New asset is created`, 'Create Success')

    setRendering(false)
    navigate('/create/detail', { state: { metadata, token: txHash } })
  }, [deep, style, description, name, web3Wrapper, navigate])

  const submitIsValid = (): boolean => {
    return name !== '' && description !== '' && style !== null && deep !== null
  }

  return (
    <>
      <LoadingBox open={rendering} msg={renderingCaption} textTransform="uppercase" />
      <Box className={classes.root}>
        <Text className="title">Create New AI NFT</Text>
        <Hidden mdDown>
          <Text className="body2">Select Your NFT:</Text>
        </Hidden>
        <Grid container spacing={5}>
          <Grid item sm={12} md={6}>
            <DeepSelect collection={1} selectDeep={selectDeep} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Stack maxWidth={490.68} id="panel">
              <TextField
                label="Name:"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                label="Description:"
                multiline
                fullWidth
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <Select variant="filled" defaultValue="default" label="Collection:">
                <MenuItem value="default">Default Collection</MenuItem>
              </Select>
              <StyleSelect setStyle={setStyle} />
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button kind="second" disabled={!submitIsValid()} onClick={() => handleCreation()}>
                  Create
                </Button>
                <Button variant="text" onClick={() => navigate('/create')}>
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
