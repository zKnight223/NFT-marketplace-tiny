import Web3 from 'web3'
import { addresses } from './constants'
import DeepNFTFactory from './contracts/DeepNFTFactory'
import DeepNFTMarketplace from './contracts/DeepNFTMarketplace'
import { Deep } from 'types/deepnft'
import DeepNFT from './contracts/DeepNFT'

export default class Web3Wrapper {
  web3: Web3
  chainId: number
  account: string
  wrapperOptions: any

  factory: DeepNFTFactory
  market: DeepNFTMarketplace
  defaultDeep: DeepNFT
  defaultDeepAddr: string

  constructor(web3: Web3, chainId: number, account: string, options = {}) {
    this.web3 = web3
    this.chainId = chainId
    this.account = account

    this.wrapperOptions = {
      web3,
      chainId,
      account,
      ...options,
    }

    this.defaultDeepAddr = addresses.deep[chainId]

    this.factory = new DeepNFTFactory(this.wrapperOptions)
    this.market = new DeepNFTMarketplace(this.wrapperOptions)
    this.defaultDeep = new DeepNFT(this.wrapperOptions, addresses.deep[chainId])
  }

  // async buy(asset: Deep) {
  //   try {
  //     const tx = await this.market.send("delistAsset", null, this.defaultDeepAddr, asset.tokenId);
  //     return tx;
  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // }

  async acceptOffer(asset: Deep, bidder: string) {
    try {
      await this.defaultDeep.send(
        'approve',
        null,
        addresses.marketplace[this.chainId],
        asset.tokenId
      )
      const tx = await this.market.send(
        'acceptOffer',
        null,
        this.defaultDeepAddr,
        asset.tokenId,
        bidder
      )
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async transfer(to: string, tokenId: number) {
    try {
      if (await this.defaultDeep.transferFrom(this.account, to, tokenId))
        console.log(`DefaultDeep is sent from "${this.account}" to "${to}".`)
      else console.log(`Failed to send DefaultDeep to ${to}.`)
    } catch (e) {
      console.log(e)
    }
  }
}
