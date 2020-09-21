import { PopupContext } from 'context/PopupContext'
import React from 'react'
import styled from 'styled-components'

interface Props {
  children: any
}

const PopupContainer = styled.div``
const PopupMask = styled.div.attrs({
  className: 'fixed inset-0 w-full h-full'
})`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`
const PopupStyled = styled.div.attrs({
  className: 'fixed right-0 bottom-0 left-0 w-full bg-white'
})`
  z-index: 1000;
`

const Popup: React.FunctionComponent<Props> = props => {
  return (
    <PopupContext.Consumer>
      {({ popup, hidePopup }) => {
        if (!popup) {
          return null
        }

        return (
          <PopupContainer>
            <PopupMask onClick={hidePopup} />
            <PopupStyled>{props.children}</PopupStyled>
          </PopupContainer>
        )
      }}
    </PopupContext.Consumer>
  )
}

export default Popup
