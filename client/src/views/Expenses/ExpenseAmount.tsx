import { X } from '@styled-icons/feather'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { AmountSection } from './AmountSection'
import { CategorySection } from './CategorySection'
import { NoteSection } from './NoteSection'
import { NumberKeyboardSection } from './NumberKeyboardSection'
import { TypeSection } from './TypeSection'

const ExpenseAmountStyled = styled.div``
const DetailsHeader = styled.header.attrs({
  className: 'flex'
})`
  margin-bottom: 30px;

  > .icon {
    color: #aeaeae;
    height: 24px;
    width: 24px;
  }
`
const DetailsContent = styled.main``

const ExpenseAmount: FunctionComponent = () => {
  const handleDelete = () => {
    console.log('delete')
  }

  const handleSubmit = () => {
    console.log('The link was clicked.')
  }

  return (
    <ExpenseAmountStyled>
      <DetailsHeader>
        <X className="icon" />
        <h2>记一笔</h2>
      </DetailsHeader>

      <DetailsContent>
        <TypeSection />
        <AmountSection />
        <CategorySection />
        <NoteSection />
        <NumberKeyboardSection />
      </DetailsContent>
    </ExpenseAmountStyled>
  )
}

export default ExpenseAmount
