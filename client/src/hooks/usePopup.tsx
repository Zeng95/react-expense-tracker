import { useState } from 'react'

const usePopup = () => {
  const [popup, setPopup] = useState(true)

  const showPopup = () => {
    setPopup(true)
  }

  const hidePopup = () => {
    setPopup(false)
  }

  return { popup, showPopup, hidePopup }
}

export default usePopup
