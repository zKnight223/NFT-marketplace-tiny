import { useEffect, useContext, useState } from 'react'
import { Web3ModalContext } from 'contexts/Web3ModalProvider'
import { assetIsStyle } from 'blockchain/utils'

export default function useCollections() {
  const { connected, account } = useContext(Web3ModalContext)
  const [collections, setCollections] = useState<any[]>([])
  const [nfts, setNFTs] = useState<any[]>([])
  const [deeps, setDeeps] = useState<any[]>([])
  const [styles, setStyles] = useState<any[]>([])

  useEffect(() => {
    if (connected) {
      const fetchData = () => {
        const options: RequestInit = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            // Do not expose your API key in the browser
            // 'X-API-KEY': undefined,
          } as HeadersInit,
        }

        // fetch collections
        fetch(
          `https://testnets-api.opensea.io/api/v1/collections?offset=0&owner=${account}`,
          options
        )
          .then(async (response) => {
            if (response.ok) setCollections(await response.json())
            else console.log('Error:', response.statusText)
          })
          .catch((error) => console.log(error))

        // fetch NFTs
        fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}`, options)
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json()

              const _styles: any[] = []
              const _deeps: any[] = []
              data['assets'].forEach((nft, index) => {
                if (assetIsStyle(nft)) _styles.push(nft)
                else _deeps.push(nft)
              })

              setNFTs(data['assets'])
              setDeeps(_deeps)
              setStyles(_styles)
            } else {
              console.log('Error:', response.statusText)
            }
          })
          .catch((error) => console.log(error))
      }

      fetchData()
      const timer = setInterval(fetchData, 50000)
      return () => clearInterval(timer)
    }
  }, [connected, account, setNFTs, setStyles, setDeeps])

  return { collections, nfts, styles, deeps }
}
