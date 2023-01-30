import { Box, Typography } from '@mui/material'
import { useHeaderViewStyles } from './styles'
import PathLinker from 'uikit/components/DNPathLinker'
import SearchField from 'uikit/components/DNSearchField'

export default function HeaderView() {
  const classes = useHeaderViewStyles()

  return (
    <Box className={classes.root}>
      <PathLinker />
      <Typography>Artificial Intelligence NFT MARKETPLACE</Typography>
      <SearchField />
    </Box>
  )
}
