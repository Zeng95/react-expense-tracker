import React from 'react'
import styled from 'styled-components'
import { PopupContext } from 'context/PopupContext'

interface Props {
  children: any
}

const PopupContainer = styled.div``
const PopupMask = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;
`
const PopupStyled = styled.div`
  background-color: #fff;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

const Popup: React.FunctionComponent<Props> = (props) => {
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
