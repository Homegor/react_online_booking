import { useState } from "react"

function useModal() {
  const [isOpen, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }
  const handleCloseModal = () => {
    setOpen(false)
  }
  return { isOpen, handleOpenModal, handleCloseModal }
}

export default useModal
