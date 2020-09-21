import { Edit } from '@styled-icons/feather'
import { themes } from 'components/Shared/Styles'
import { PopupContext } from 'context/PopupContext'
import React from 'react'
import styled from 'styled-components'

const AddButtonStyled = styled.button.attrs({
  className: 'fixed rounded-full bg-white'
})`
  border: 0;
  bottom: 100px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.16);
  padding: 12px;
  right: 26px;

  &:focus {
    outline: none;
  }
`
const GreenEdit = styled(Edit)`
  color: ${themes.color};
  height: 20px;
  width: 20px;
`

const AddButton: React.FunctionComponent = () => {
  return (
    <PopupContext.Consumer>
      {({ showPopup }) => {
        return (
          <AddButtonStyled onClick={showPopup}>
            <GreenEdit />
          </AddButtonStyled>
        )
      }}
    </PopupContext.Consumer>
  )
}

export default AddButton
