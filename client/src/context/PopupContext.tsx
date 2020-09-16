import React, { createContext } from 'react'
import usePopup from 'hooks/usePopup'

type Props = {
  children: any
}

type PopupContextType = {
  popup: boolean
  showPopup: () => void
  hidePopup: () => void
}

const PopupContext = createContext({} as PopupContextType)

const PopupProvider = ({ children }: Props) => {
  const popup = usePopup()

  return (
    <PopupContext.Provider value={{ ...popup }}>
      {children}
    </PopupContext.Provider>
  )
}

export { PopupContext, PopupProvider }
