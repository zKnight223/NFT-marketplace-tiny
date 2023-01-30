import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useStyles } from './styles'
import uploadIcon from 'assets/image/upload.png'
import Button from 'uikit/components/DNButton'
import { DropzoneAreaBase, FileObject } from 'react-mui-dropzone'

export default function UploadBoard({ onChange }: { onChange: Function }) {
  const classes = useStyles()
  const [fileUrl, setFileUrl] = useState<string>('')
  let files: FileObject[] = []

  const handleDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles || !acceptedFiles[0]) return

    const file = acceptedFiles[0]
    setFileUrl(URL.createObjectURL(file))
    onChange(file)
  }

  return (
    <>
      <Box className={classes.root}>
        <DropzoneAreaBase onDrop={handleDrop} fileObjects={files} />
        <Box className="actions">
          {fileUrl !== '' ? (
            <Box component="img" src={fileUrl} alt="upload" />
          ) : (
            <>
              <Box component="img" src={uploadIcon} alt="upload" />
              <Typography>Drag and Drop Your Files Here</Typography>
              <Typography>Or</Typography>
              <Button kind="second" disableTextTransform>
                Upload
              </Button>
            </>
          )}
        </Box>
        <Box>
          {fileUrl === '' ? <Typography>JPG, JPEG, MP4, MP3 are supported</Typography> : null}
        </Box>
      </Box>
    </>
  )
}
