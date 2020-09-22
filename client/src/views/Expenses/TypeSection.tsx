import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const TypeSectionStyled = styled.section.attrs({
  className: 'flex justify-between'
})`
  margin: 0 20px 20px;

  > ul {
    ${tw`flex`}
  }
`
const TypeButton = styled.button.attrs({
  className: 'rounded-full'
})`
  background-color: #f1f1f1;
  color: #b3b3b3;
  padding: 5px 14px;

  &.expense {
    margin-right: 5px;
  }
`

const TypeSection: FunctionComponent = () => {
  return (
    <TypeSectionStyled>
      <ul>
        <li>
          <TypeButton>支出</TypeButton>
        </li>
        <li>
          <TypeButton>收入</TypeButton>
        </li>
      </ul>
      <div>日期选择</div>
    </TypeSectionStyled>
  )
}

export { TypeSection }
