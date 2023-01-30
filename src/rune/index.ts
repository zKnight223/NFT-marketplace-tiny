import { FileToImageData, RGBBitmapToImageF, URLToImageData } from 'utils/image'
import DEFAULT_RUNE from 'assets/image/default-rune.png'

const MINT_NFT_RUNE_URL = '/mint-style-nft.rune'
const RENDER_NFT_RUNE_URL = '/render-nft.rune'

let MINT_NFT_RUNE_RUNTIME: any = undefined
let RENDER_NFT_RUNE_RUNTIME: any = undefined
let DEFAULT_RUNE_IMAGE_RUNETIME: any = undefined

export const mintNFTRune = async (image: HTMLImageElement) => {
  let input: any
  let output: any

  class ImageCapability {
    parameters: { [key: string | number]: any } = {}
    generate(dest: any, id: any) {
      dest.set(input, 0)
    }
    setParameter(key: string | number, value: any) {
      this.parameters[key] = value
    }
  }

  class SerialOutput {
    consume(data: BufferSource | undefined) {
      const utf8 = new TextDecoder()
      output = JSON.parse(utf8.decode(data))
    }
  }

  const imageCap = new ImageCapability()
  const imports = {
    createCapability: () => imageCap,
    createOutput: () => new SerialOutput(),
    createModel: (mime: any, model_data: any) =>
      rune.TensorFlowModel.loadTensorFlowLite(model_data),
    log: (log: any) => {
      console.log(log)
    },
  }

  if (true || MINT_NFT_RUNE_RUNTIME === undefined) {
    const response = await fetch(MINT_NFT_RUNE_URL)
    const bytes = new Uint8Array(await response.arrayBuffer())
    // console.log(rune.Runtime.load)
    MINT_NFT_RUNE_RUNTIME = await rune.Runtime.load(bytes.buffer, imports)
  }
  //get input and resize
  input = rune.TensorFlowModel.resizeImage(image, 224)
  MINT_NFT_RUNE_RUNTIME.call()

  //get output and convert to image
  // console.log("Result:", output.elements);

  const bytesArray = new Uint8Array(new Float32Array(output.elements).buffer)
  // console.log("Bytes:", bytesArray);

  return bytesArray
}

export const renderNFTRune = async (image: HTMLImageElement, nft_style_buffer: Uint8Array) => {
  // console.log("default image:", image);
  // console.log("buffer:", nft_style_buffer)

  let output: any

  class NFTImageCapability {
    parameters: { [key: string | number]: any } = {}
    source
    data
    constructor(source: number, data: any) {
      this.source = source
      this.data = data
    }
    generate(dest: Uint8Array, id: any) {
      dest.set(this.data, 0)
    }
    setParameter(key: string | number, value: any) {
      this.parameters[key] = value
    }
  }

  class SerialOutput {
    consume(data: BufferSource | undefined) {
      const utf8 = new TextDecoder()
      output = JSON.parse(utf8.decode(data))
    }
  }

  let source = 0
  let data = [rune.TensorFlowModel.resizeImage(image, 384), nft_style_buffer]
  // console.log("data:", data);
  const imports = {
    createCapability: () => {
      let cap = new NFTImageCapability(source, data[source])
      source++
      return cap
    },
    createOutput: () => new SerialOutput(),
    createModel: (mime: any, model_data: any) =>
      rune.TensorFlowModel.loadTensorFlowLite(model_data),
    log: (log: any) => {
      console.log(log)
    },
  }

  if (true || RENDER_NFT_RUNE_RUNTIME === undefined) {
    const response = await fetch(RENDER_NFT_RUNE_URL)
    const bytes = new Uint8Array(await response.arrayBuffer())
    RENDER_NFT_RUNE_RUNTIME = await rune.Runtime.load(bytes.buffer, imports)
  }
  // get input and resize
  // console.log("rune:", RENDER_NFT_RUNE_RUNTIME);

  RENDER_NFT_RUNE_RUNTIME.call()

  // console.log("output:", output);

  // Convert rgba array to Image that can be displayed on browser.
  const resultImage = await RGBBitmapToImageF(new Float32Array(output.elements), 384, 384)

  return resultImage
}

export const renderDefaultRune = async (nft_style_buffer: Uint8Array) => {
  if (true || DEFAULT_RUNE_IMAGE_RUNETIME === undefined) {
    DEFAULT_RUNE_IMAGE_RUNETIME = await URLToImageData(DEFAULT_RUNE)
  }
  const image = await renderNFTRune(DEFAULT_RUNE_IMAGE_RUNETIME, nft_style_buffer)
  return image
}

export const renderRuneFromFile = async (
  fileOrUrl: string | File,
  nft_style_buffer: Uint8Array
) => {
  let image_data

  if (fileOrUrl instanceof File) {
    image_data = await FileToImageData(fileOrUrl)
  } else {
    image_data = await URLToImageData(fileOrUrl)
  }
  const renderedImage = await renderNFTRune(image_data, nft_style_buffer)

  return renderedImage
}
