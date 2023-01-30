import { useContext, useState, MouseEvent, useCallback } from 'react'
import { Web3ModalContext } from 'contexts/Web3ModalProvider'
import Button from 'uikit/components/DNButton'
import { Box, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Logout } from '@mui/icons-material'
import walletImage from 'assets/image/wallet.png'
import { ellipseAddress } from 'utils/blockchain'

export default function WalletConnectBtn() {
  const { connect, disconnect, connected, account } =
    useContext(Web3ModalContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <>
      {connected ? (
        <Box>
          <Button
            id="wallet-menu"
            kind="second"
            startIcon={
              <Box component="img" src={walletImage} alt="button icon" />
            }
            disableTextTransform
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {ellipseAddress(account!)}
          </Button>
          <Menu
            id="wallet-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onClick={() => {
                disconnect()
                handleClose()
              }}
            >
              <ListItemText primary="Disconnect" />
              <ListItemIcon>
                <Logout color="primary" />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Button disableTextTransform kind="second" onClick={() => connect()}>
          Connect
        </Button>
      )}
    </>
  )
}
