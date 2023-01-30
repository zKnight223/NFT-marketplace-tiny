import Jimp from 'jimp'

export const URLToImageData = (url: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    let img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = url
  })
}

export const FileToImageData = (file: File) => {
  let fileUrl = URL.createObjectURL(file)

  return URLToImageData(fileUrl)
}

export const RGBBitmapToImageF = (data: Float32Array, width: number, height: number) => {
  return new Promise<string>((resolve, reject) => {
    var image = new Jimp(width, height, function (err: any, _image) {
      let buffer = _image.bitmap.data
      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          const offset = (y * width + x) * 3
          const offsetBuffer = (y * width + x) * 4 // RGB = 4 bytes
          buffer[offsetBuffer] = Math.round(data[offset] * 255) // R
          buffer[offsetBuffer + 1] = Math.round(data[offset + 1] * 255) // G
          buffer[offsetBuffer + 2] = Math.round(data[offset + 2] * 255) // B
          buffer[offsetBuffer + 3] = 255
        }
      }
      // console.log(buffer);
      image.getBase64Async('image/png').then(resolve).catch(reject)
    })
  })
}

export const BitmapToImage = (data: Uint8Array, width: number, height: number) => {
  return new Promise((resolve, reject) => {
    var image = new Jimp(width, height, function (err: any, _image) {
      let buffer = _image.bitmap.data
      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          const offset = (y * width + x) * 4 // RGBA = 4 bytes
          buffer[offset] = data[offset] // R
          buffer[offset + 1] = data[offset + 1] // G
          buffer[offset + 2] = data[offset + 2] // B
          buffer[offset + 3] = data[offset + 3] // Alpha
        }
      }

      image.getBase64Async('image/png').then(resolve).catch(reject)
    })
  })
}

export const dataURLtoFile = (dataurl: string, filename = 'image.png') => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)?.at(1),
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
