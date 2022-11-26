import { useState } from "react"

const useUpdateEvent = () => {
  const [attachmentFile, setAttachmentFile] = useState(undefined)

  const handleAttachmentFile = (event) => {
    const files = event.target.files
    if (!files) return

    setAttachmentFile(files[0])
  }

  const resetAttachment = () => {
    setAttachmentFile(undefined)
  }

  return {attachmentFile, handleAttachmentFile, resetAttachment}
}

export default useUpdateEvent