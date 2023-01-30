import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { Contract as Web3Contract } from 'web3-eth-contract'

export type ContractOptionType = {
  web3: Web3
  chainId: number
  account: string | null
}

class Contract {
  web3: Web3
  chainId: number
  account: string | null
  contract: Web3Contract
  tag: string | null
  events: { [key: string]: boolean }

  constructor(options: ContractOptionType, _tag: string | null, _abi: any, _address: string) {
    this.web3 = options.web3
    this.chainId = options.chainId
    this.account = options.account

    this.contract = new this.web3.eth.Contract(_abi as AbiItem[], _address)

    if (_tag) this.tag = _tag
    else this.tag = 'contract-' + Date.now()

    this.events = {}
  }

  send(method: string, options: object | null, ...params: any[]) {
    return new Promise((resolve, reject) => {
      this.contract.methods[method](...params)
        .send({
          ...options,
          from: this.account,
        })
        .then(resolve)
        .catch(reject)
    })
  }

  call(method: string, ...params: any[]) {
    return new Promise((resolve, reject) => {
      this.contract.methods[method](...params)
        .call({ from: this.account })
        .then(resolve)
        .catch(reject)
    })
  }

  on(event: string, callback: Function, onerr?: Function) {
    if (this.events[event]) return

    this.contract.events[event]((err: any, res: any) => {
      if (err == null) {
        callback(res.returnValues, this.tag)
      } else {
        if (onerr !== undefined) onerr(err)
        else console.log(err)
      }
    })
  }
}

export default Contract
