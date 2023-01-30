import Web3 from 'web3'
import { addresses, defaultChainId, rpcUrls /*tokenInfos*/ } from '../constants'
import { BigNumber } from 'bignumber.js'
import { AccountData, Deep, GlobalData, AccBasicInfo } from 'types/deepnft'
import DeepNFT from '../contracts/DeepNFT'
// import DeepNFTFactory from '../contracts/DeepNFTFactory'
import DeepNFTMarketplace from '../contracts/DeepNFTMarketplace'
import { toTimespanInStr } from 'utils/time'
import { hexStringToByteArray } from 'utils/blockchain'
import { getMetadata /*makeGatewayURL*/ } from 'utils/filecoin'
// import { defaultRuneName } from 'config'
import { ContractOptionType } from 'blockchain/contracts/Contract'

export const createWeb3 = (provider: any) => {
  var realProvider

  if (typeof provider === 'string') {
    if (provider.includes('wss')) {
      realProvider = new Web3.providers.WebsocketProvider(provider)
    } else {
      realProvider = new Web3.providers.HttpProvider(provider)
    }
  } else {
    realProvider = provider
  }

  return new Web3(realProvider)
}

export const getDefaultWeb3 = () => {
  return createWeb3(rpcUrls[defaultChainId])
}

export const getDefaultContractOptions = (): ContractOptionType => {
  const web3 = getDefaultWeb3()
  return {
    web3,
    chainId: defaultChainId,
    account: null,
  }
}

export const BNtoNum = (value: any, decimal = 18) => {
  return new BigNumber(value).shiftedBy(-decimal).toNumber()
}

export const NumToBN = (value: any, decimal = 18) => {
  return new BigNumber(value).shiftedBy(decimal)
}

export const toFixed = (num: number, digit: number) => {
  if (isNaN(num)) return 0
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString())
}

export const getDateStr = (dateObj: Date) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = monthNames[dateObj.getMonth()]
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear()
  const output = month + ' ' + day + ', ' + year
  return output
}

export const getActiveBids = (asset: Deep) => {
  return asset.bids.filter((bid) => {
    return (
      bid.declined === false && bid.canceled === false && toTimespanInStr(bid.expireAt) !== false
    )
  })
}

// export const getAssetData = async (tokenId: number): Promise<Deep | null> => {
//   const deep = new DeepNFT(getDefaultContractOptions(), addresses.deep[defaultChainId])
//   const market = new DeepNFTMarketplace(getDefaultContractOptions())

//   const bExist = await deep.call('exists', tokenId)

//   if (!bExist) return null

//   const owner = await deep.call('ownerOf', tokenId)
//   // const proof = await deep.call("tokenProof", tokenId);
//   const info: any = await deep.call('tokenInfo', tokenId)
//   const cid = info.cid as string

//   const metadata = await getMetadata(cid)

//   const defaultDeep = addresses.deep[defaultChainId]
//   const marketInfo: any = await market.call('asset', defaultDeep, tokenId)

//   const _bids: Bid[] = (marketInfo.bids as Array<any>).map((bid: any): Bid => {
//     return {
//       bidder: bid.bidder,
//       price: BNtoNum(bid.price),
//       createdAt: Number(bid.createdAt),
//       expireAt: Number(bid.expireAt),
//       canceled: bid.canceled,
//       declined: bid.declined,
//     }
//   })

//   let isStyle: boolean = false
//   let proof: Uint8Array | null = null

//   metadata.attributes.forEach((trait) => {
//     switch (trait.trait_type) {
//       case 'style':
//         isStyle = trait.value === 'true'
//         return
//       case 'proof':
//         proof = hexStringToByteArray(trait.value as string)
//         return
//       default:
//         return
//     }
//   })

//   return {
//     tokenId: tokenId,
//     name: metadata.name,
//     description: metadata.description,
//     owner: owner as string,
//     creator: metadata.creator,
//     createdAt: metadata.createdAt,
//     parent: metadata.parent,
//     isStyle,
//     proof,
//     cid: cid,
//     image: metadata.image /*makeGatewayURL(cid, defaultRuneName)*/,
//     openToSell: marketInfo.openToSell as boolean,
//     price: BNtoNum(marketInfo.basicPrice),
//     bids: _bids,
//   }
// }

export const getAccountData = async (account: string): Promise<AccountData> => {
  const options = getDefaultContractOptions()
  const deep = new DeepNFT(options, addresses.deep[options.chainId])

  const deepBalance = await deep.call('balanceOf', account)
  const tokens = await deep.call('ownedTokens', account)

  return {
    address: account,
    deepBalance: Number(deepBalance),
    ownedTokens: tokens as number[],
  }
}

export const getGlobalData = async (): Promise<GlobalData> => {
  const options = getDefaultContractOptions()
  const deep = new DeepNFT(options, addresses.deep[options.chainId])

  const totalSupply = await deep.call('totalSupply')

  return {
    totalSupply: Number(totalSupply),
  }
}

export const getTokenIdByIndex = async (index: number): Promise<number> => {
  const options = getDefaultContractOptions()
  const deep = new DeepNFT(options, addresses.deep[options.chainId])

  const tokenId = await deep.call('tokenByIndex', index)

  return Number(tokenId)
}

export const getTokenIdsByIndexRange = async (
  startIndex: number,
  count: number
): Promise<number[]> => {
  // const options = getDefaultContractOptions()
  // const deep = new DeepNFT(options, addresses.deep[options.chainId])

  const promises: Promise<number>[] = []

  for (let i = 0; i < count; i++) {
    promises.push(getTokenIdByIndex(startIndex + i))
  }

  const values = await Promise.all(promises)

  return values
}

export const getAccBasicInfo = async (account: string): Promise<AccBasicInfo> => {
  const web3 = getDefaultWeb3()

  const _ethBalance = await web3.eth.getBalance(account)

  return {
    address: account,
    ethBalance: BNtoNum(_ethBalance),
  }
}

export const existActiveOffer = async (asset: Deep, account: string): Promise<boolean> => {
  const options = getDefaultContractOptions()
  const market = new DeepNFTMarketplace(options)

  const activeOffer: any = await market.call(
    'searchActiveOffer',
    addresses.deep[options.chainId],
    asset.tokenId,
    account,
    true
  )

  return activeOffer.exist
}

export const assetIsStyle = (asset: any): boolean => {
  let isStyle: boolean = false
  asset.traits.forEach((trait) => {
    if (trait.trait_type === 'style' && trait.value === 'true') isStyle = true
  })
  return isStyle
}

export const getProof = async (asset: any): Promise<Uint8Array> => {
  let proof: Uint8Array = new Uint8Array()
  const deep = new DeepNFT(getDefaultContractOptions(), addresses.deep[defaultChainId])
  const tokenURI: string = (await deep.call('tokenURI', asset.token_id)) as string

  const metadata = await getMetadata(tokenURI)

  metadata.attributes.forEach((trait) => {
    if (trait.trait_type === 'proof') {
      proof = hexStringToByteArray(trait.value as string)
      // console.log(trait.value)
    }
  })
  return proof
}
