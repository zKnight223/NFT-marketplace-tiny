export type Bid = {
  bidder: string
  price: number
  createdAt: number
  expireAt: number
  canceled: boolean
  declined: boolean
}

export type Deep = {
  tokenId: number // token id
  name: string
  description: string
  owner: string
  creator: string
  createdAt: number
  parent: number
  proof: Uint8Array | null
  tokenURI: string
  image: any
  parentAsset?: Deep | null
  openToSell: boolean
  price: number
  bids: Bid[]
  isStyle: boolean
}

export type AccountData = {
  address: string
  deepBalance: number
  ownedTokens: number[]
}

export type GlobalData = {
  totalSupply: number
}

export type AccBasicInfo = {
  address: string
  ethBalance: number
}

export type DeepMetadataTrait = {
  trait_type: string
  value: string
}

export type DeepMetadata = {
  description: string
  image: string
  name: string
  attributes: DeepMetadataTrait[]
  creator: string
  createdAt: number
  parent: number
}
