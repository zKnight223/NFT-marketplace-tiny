import { getDefaultWeb3 } from 'blockchain/utils'

export function ellipseAddress(address: string, width: number = 3): string {
  return `${address.slice(0, width + 4)}...${address.slice(-2)}`
}

export const hexStringToByteArray = (hexString: string): Uint8Array => {
  const hex = hexString.substring(2)
  if (hex.length % 2 !== 0) {
    throw Error('Must have an even number of hex digits to convert to bytes')
  }
  var numBytes = hex.length / 2
  var byteArray = new Uint8Array(numBytes)
  for (let i = 0; i < numBytes; i++) {
    byteArray[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16)
  }
  return byteArray
}

export const byteArrayToHexString = (bytes: Uint8Array): string => {
  return (
    '0x' +
    Array.from(bytes, function (byte) {
      return ('0' + (byte & 0xff).toString(16)).slice(-2)
    }).join('')
  )
}

export const getCurrentBlockTimestamp = async (): Promise<number> => {
  const web3 = getDefaultWeb3()
  const blockNumber = await web3.eth.getBlockNumber()
  const block = await web3.eth.getBlock(blockNumber)
  return Number(block.timestamp)
}

// useEffect(() => {
//   const array: number[] = [7, 11, 18, 19, 20]
//   array.forEach((id) => web3Wrapper?.transfer('0x5d59cBC04f63Ba99Ee2a851586B0EcDe5268134F', id))
// }, [])
// console.log(nfts)
