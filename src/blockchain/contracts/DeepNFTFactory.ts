import Contract, { ContractOptionType } from './Contract'
import abi from '../abis/DeepNFTFactory.json'
import { addresses } from '../constants'

class DeepNFTFactory extends Contract {
  constructor(options: ContractOptionType) {
    super(options, 'DeepNFTFactory', abi, addresses.factory[options.chainId])
  }

  async createNewAsset(tokenURI: string) {
    try {
      const tx = await this.send('createNewAsset', null, this.account, tokenURI)
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }
}

export default DeepNFTFactory
