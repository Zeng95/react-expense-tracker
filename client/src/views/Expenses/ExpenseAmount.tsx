import React from 'react'
import styled from 'styled-components'

const ExpenseAmountStyled = styled.div``
const DetailsHeader = styled.header``
const DetailsContent = styled.main``
const TypeSection = styled.section``
const CategorySection = styled.section``
const NoteSection = styled.section``
const NumberKeyboardSection = styled.section``

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
          <div></div>
        </TypeSection>
        <CategorySection>分类</CategorySection>
        <NoteSection>
          <label>
            <span>备注</span>
            <input type="text" />
          </label>
        </NoteSection>
        <NumberKeyboardSection>NumberKeyboard</NumberKeyboardSection>
      </DetailsContent>
    </ExpenseAmountStyled>
  )
}

export default ExpenseAmount
