import { LogoYen } from '@styled-icons/ionicons-solid'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const AmountSectionStyled = styled.section.attrs({
  className: 'flex'
})`
  border-bottom: 1px solid #e4e4e4;
  margin: 0 20px;
  padding-bottom: 20px;

  > .icon {
    height: 24px;
    width: 24px;
  }
`
const MoneyInput = styled.input``

const AmountSection: FunctionComponent = () => {
  return (
    <AmountSectionStyled>
      <LogoYen className="icon" />
      <MoneyInput />
    </AmountSectionStyled>
  )
}

export { AmountSection }
