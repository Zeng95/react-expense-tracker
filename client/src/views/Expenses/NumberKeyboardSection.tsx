import { Delete, Trash2 } from '@styled-icons/feather'
import { themes } from 'components/Shared/Styles'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const NumberKeyboardSectionStyled = styled.section.attrs({
  className: ''
})`
  background-color: #fafafa;
  padding: 4px;

  > button {
    ${tw`bg-white font-semibold`}
    border-radius: 4px;
    font-size: 18px;
    height: 46px;
    margin: 4px;
    width: calc(25% - 8px);

    .icon {
      height: 24px;
      width: 24px;
    }

    &.zero {
      width: calc(50% - 8px);
    }

    &.confirm {
      ${tw`text-white float-right`}
      background-color: ${themes.color};
      height: calc(46px * 2 + 8px);
      opacity: 0.6;
    }
  }
`

const NumberKeyboardSection: FunctionComponent = () => {
  return (
    <NumberKeyboardSectionStyled>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>
        <Delete className="icon" />
      </button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>
        <Trash2 className="icon" />
      </button>

      <button>7</button>
      <button>8</button>
      <button>9</button>

      <button className="confirm">确定</button>
      <button className="zero">0</button>
      <button>.</button>
    </NumberKeyboardSectionStyled>
  )
}

export { NumberKeyboardSection }
