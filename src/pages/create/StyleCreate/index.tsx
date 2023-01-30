import { useNavigate } from 'react-router-dom'
import { useContext, useState, useCallback } from 'react'
import { Grid, Box, Stack, MenuItem, Hidden } from '@mui/material'
import TextField from 'uikit/components/DNTextField'
import Button from 'uikit/components/DNButton'
import Select from 'uikit/components/DNSelect'
import UploadBoard from 'uikit/widgets/UploadBoard'
import LoadingBox from 'uikit/components/DNLoadingBox'
import { Web3WrapperContext } from 'contexts/Web3WrapperProvider'

import { mintNFTRune, renderDefaultRune } from 'rune'
import { dataURLtoFile, FileToImageData } from 'utils/image'
import { getCurrentBlockTimestamp } from 'utils/blockchain'
import { saveAssetToIpfs } from 'utils/filecoin'
import { defaultRuneName } from 'config'
import { useStyles } from './styles'
import Text from './Text'

export default function StyleCreate() {
  const classes = useStyles()
  const navigate = useNavigate()
  const { web3Wrapper } = useContext(Web3WrapperContext)
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [rendering, setRendering] = useState<boolean>(false)
  const [renderingCaption, setCaption] = useState<string>('') // Caption displayed as NFT is rendering

  const handleCreation = useCallback(async () => {
    console.log(window.location.host, window.location.protocol)
    console.log(window.location.origin)
    const url = new URL('./worker.ts', import.meta.url)
    // const worker = new Worker(url, { name: 'Rendering', type: 'module' })

    // worker.addEventListener('message', (e) => {
    //   console.log(e.data) // "hiya!"
    // })

    // worker.postMessage('hello')
    return

    setRendering(true)
    setCaption('Generating Style')

    const image: HTMLImageElement = await FileToImageData(file!)
    const bytes: Uint8Array = await mintNFTRune(image)

    const renderedBase64: string = await renderDefaultRune(bytes)
    const defaultRendered: File = dataURLtoFile(renderedBase64, defaultRuneName)

    setCaption('Uploading To IPFS')

    const { tokenURI, metadata } = await saveAssetToIpfs(
      name,
      description,
      web3Wrapper?.account!,
      await getCurrentBlockTimestamp(),
      0, // parent token_id
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
  }, [file, description, name, web3Wrapper, navigate])

  const submitIsValid = (): boolean => {
    return file !== null && name !== '' && description !== ''
  }

  return (
    <>
      <LoadingBox open={rendering} msg={renderingCaption} textTransform="uppercase" />
      <Box className={classes.root}>
        <Text className="title">Create New AI NFT</Text>
        <Hidden mdDown>
          <Text className="body2">Image, Video, Audio or 3D Model</Text>
        </Hidden>
        <Grid container spacing={5}>
          <Grid item sm={12} md={6}>
            <UploadBoard onChange={setFile} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Stack maxWidth={490.68} id="panel">
              <TextField
                label="Name:"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
              />
              <TextField
                label="Description:"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                multiline
                fullWidth
              />
              <Select variant="filled" defaultValue="default" label="Collection:">
                <MenuItem value="default">Default Collection</MenuItem>
              </Select>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button kind="second" disabled={!submitIsValid()} onClick={handleCreation}>
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
