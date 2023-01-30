import Contract, { ContractOptionType } from './Contract'
import abi from '../abis/DeepNFTMarketplace.json'
import { addresses } from '../constants'
import { Deep } from 'types/deepnft'
import { NumToBN } from '../utils'

class DeepNFTMarketplace extends Contract {
  defaultDeepAddr: string

  constructor(options: ContractOptionType) {
    super(options, 'DeepNFTFactory', abi, addresses.marketplace[options.chainId])

    this.defaultDeepAddr = addresses.marketplace[options.chainId]
  }

  async makeOffer(asset: Deep, price: number) {
    try {
      const tx = await this.send(
        'makeOffer',
        { value: NumToBN(price) },
        this.defaultDeepAddr,
        asset.tokenId,
        604800
      ) // 604800 secs = 7 days
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async setPrice(asset: Deep, price: number) {
    try {
      const tx = await this.send(
        'listAsset',
        null,
        this.defaultDeepAddr,
        asset.tokenId,
        NumToBN(price)
      )
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async delist(asset: Deep) {
    try {
      const tx = await this.send('delistAsset', null, this.defaultDeepAddr, asset.tokenId)
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async cancelOffer(asset: Deep) {
    try {
      const tx = await this.send('cancelOffer', null, this.defaultDeepAddr, asset.tokenId)
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async declineOffer(asset: Deep, bidder: string) {
    try {
      const tx = await this.send('declineOffer', null, this.defaultDeepAddr, asset.tokenId, bidder)
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }
}

export default DeepNFTMarketplace
