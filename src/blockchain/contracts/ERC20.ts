import Contract, { ContractOptionType } from './Contract'
import abi from '../abis/erc20.json'

class ERC20 extends Contract {
  constructor(options: ContractOptionType, address: string) {
    super(options, 'erc20-' + address, abi, address)
  }
}

export default ERC20
