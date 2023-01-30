// import { defaultRuneName } from 'config'
// import { renderDefaultRune } from 'rune'
import { DeepMetadata } from 'types/deepnft'
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { byteArrayToHexString } from './blockchain'
// import { dataURLtoFile } from './image'

export const STORAGE_API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUyMDY2ZUU4NTUwMEUwYkJFMjZlNjExN2M0MjIwYkQ5MDlCNTgwMTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Mzk2MTMxOTc1NDMsIm5hbWUiOiJUaW55TkZUIn0.rGKd87D4hjgFRNnJc9xh2pT6LJ89Xgsppkomr-VgneM'

/**
 * Return an IPFS gateway URL for the given CID and path
 * @param {string} cid
 * @param {string} path
 * @returns {string}
 */
export function makeGatewayURL(cid: string, path: string) {
  return `https://${cid}.ipfs.dweb.link/${encodeURIComponent(path)}`
}

/**
 * Make a File object with the given filename, containing the given object (serialized to JSON).
 * @param {string} filename filename for the returned File object
 * @param {object} obj a JSON-serializable object
 * @returns {File}
 */
export function jsonFile(filename: string, obj: any) {
  return new File([JSON.stringify(obj)], filename)
}

export const storeMetadata = async (metadata: DeepMetadata): Promise<string> => {
  const client = new Web3Storage({ token: STORAGE_API_TOKEN })

  console.log(`Uploading metadata...`)
  const cid = await client.put([jsonFile('metadata.json', metadata)])
  console.log('Content added with CID:', cid)

  return cid as string
}

export const getMetadata = async (url: string): Promise<DeepMetadata> => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`error fetching metadata: [${res.status}] ${res.statusText}`)
  }
  const metadata = await res.json()
  return metadata
}

export const saveAssetToIpfs = async (
  name: string,
  description: string,
  creator: string,
  createdAt: number,
  parent: number,
  proof: Uint8Array,
  defaultRendered: File
): Promise<{ tokenURI: string; metadata: DeepMetadata }> => {
  // console.log(byteArrayToHexString(proof))
  // return '12'

  const client = new Web3Storage({ token: STORAGE_API_TOKEN })
  const imageCid = await client.put([defaultRendered])

  const _metadata: DeepMetadata = {
    description,
    image: `https://${imageCid}.ipfs.dweb.link/${encodeURIComponent(defaultRendered.name)}`,
    name,
    attributes: [
      {
        trait_type: 'proof',
        value: byteArrayToHexString(proof),
      },
      {
        trait_type: 'style',
        value: !parent ? 'true' : 'false',
      },
    ],
    creator,
    createdAt,
    parent,
  }

  const metadata = [jsonFile('metadata.json', _metadata)]
  console.log(`Uploading metadata...`)
  const cid = await client.put(metadata)
  console.log('Content added with CID:', cid)

  return { tokenURI: makeGatewayURL(cid, 'metadata.json'), metadata: _metadata }
}
