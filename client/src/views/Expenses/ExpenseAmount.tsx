import { Delete, Trash2 } from '@styled-icons/feather'
import { themes } from 'components/Shared/Styles'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ExpenseAmountStyled = styled.div``
const DetailsHeader = styled.header``
const DetailsContent = styled.main``
const TypeSection = styled.section``
const CategorySection = styled.section``
const NoteSection = styled.section``
const NumberKeyboardSection = styled.section.attrs({
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

const ExpenseAmount = () => {
  return (
    <ExpenseAmountStyled>
      <DetailsHeader></DetailsHeader>

      <DetailsContent>
        <TypeSection>
          <div>
            <ul>
              <li>支出</li>
              <li>收入</li>
            </ul>
          </div>
          <div>100</div>
        </TypeSection>

        <CategorySection>分类</CategorySection>

        <NoteSection>
          <label>
            <span>备注</span>
            <input type="text" />
          </label>
        </NoteSection>

        <NumberKeyboardSection>
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
        </NumberKeyboardSection>
      </DetailsContent>
    </ExpenseAmountStyled>
  )
}

export default ExpenseAmount
