import AppLayout from 'components/App/AppLayout'
import React from 'react'
import styled from 'styled-components'
import AddButton from './AddButton'

const DetailsHeader = styled.header``
const DetailsContent = styled.main``
const TypeSection = styled.section``
const CategorySection = styled.section``
const NoteSection = styled.section``
const NumberKeyboardSection = styled.section``

const Details: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <AddButton />

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
    </AppLayout>
  )
}

export default Details
