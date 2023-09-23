import { useState } from "react"

function useModal() {
  const [isOpen, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  return { isOpen, handleOpenModal }
}

export default useModal
