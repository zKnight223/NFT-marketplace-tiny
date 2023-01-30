import { Box, Stack, Grid, MenuItem } from '@mui/material'
import Select from 'uikit/components/DNSelect'
import Button from 'uikit/components/DNButton'
import { ItemCard } from 'uikit/widgets/Card'
import { useCollectionViewStyles } from './styles'
import { useState, Dispatch, SetStateAction } from 'react'

type CollectionButtonProps = {
  children: string
  collection: string
  setCollection: Dispatch<SetStateAction<string>>
}

function CollectionButton({ collection, setCollection, children }: CollectionButtonProps) {
  return (
    <Button
      variant="text"
      className={collection === children.toLowerCase() ? 'active' : ''}
      disableTextTransform
      onClick={() => setCollection(children.toLowerCase())}
    >
      {children}
    </Button>
  )
}

export default function CollectionView() {
  const classes = useCollectionViewStyles()
  const [collection, setCollection] = useState<string>('all')

  return (
    <Box className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item order={{ sm: 1, xs: 2 }}>
          <Select defaultValue="recent">
            <MenuItem value="recent">Recently Added</MenuItem>
          </Select>
        </Grid>
        <Grid item order={{ sm: 2, xs: 1 }}>
          <Stack direction="row" className="buttonGroup">
            <CollectionButton collection={collection} setCollection={setCollection}>
              All
            </CollectionButton>
            <CollectionButton collection={collection} setCollection={setCollection}>
              Collectibles
            </CollectionButton>
            <CollectionButton collection={collection} setCollection={setCollection}>
              Utility
            </CollectionButton>
            <CollectionButton collection={collection} setCollection={setCollection}>
              Ipsum
            </CollectionButton>
          </Stack>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6} display={{ xs: 'none', lg: 'inline-block' }}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6} display={{ xs: 'none', lg: 'inline-block' }}>
            <ItemCard />
          </Grid>
          <Grid item xs={12} lg={6} display={{ xs: 'none', lg: 'inline-block' }}>
            <ItemCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
