import Contract, { ContractOptionType } from './Contract'
import abi from '../abis/DeepNFT.json'

class DeepNFT extends Contract {
  constructor(options: ContractOptionType, address: string) {
    super(options, 'deep-' + address, abi, address)
  }

  async tokenURI(tokenId: number) {
    try {
      const _tokenURI = await this.call('tokenURI', tokenId)
      return _tokenURI
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async totalSupply() {
    try {
      const _totalSupply = await this.call('totalSupply')
      return _totalSupply
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async balanceOf(owner: string) {
    try {
      const _balance = await this.call('balanceOf', owner)
      return _balance
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async approve(to: string, tokenId: number) {
    try {
      await this.send('approve', null, to, tokenId)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async transferFrom(from: string, to: string, tokenId: number) {
    try {
      await this.send('transferFrom', null, from, to, tokenId)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }
}

export default DeepNFT
